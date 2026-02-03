"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Point = { x: number; y: number };

const buildPenCursor = () => {
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 20h9'/><path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z'/></svg>";
  return `url("data:image/svg+xml,${svg}") 2 22, crosshair`;
};

const PenToolCanvas = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<Point | null>(null);
  const pendingPointRef = useRef<Point | null>(null);
  const rafRef = useRef<number | null>(null);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });
  const [background, setBackground] = useState("#0f172a");

  const penCursor = useMemo(() => buildPenCursor(), []);

  const applyCanvasStyle = useCallback(() => {
    const ctx = contextRef.current;
    if (!ctx) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#e2e8f0";
  }, []);

  const redraw = useCallback(() => {
    const ctx = contextRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, sizeRef.current.width, sizeRef.current.height);
    const points = pointsRef.current;
    if (points.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.stroke();
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const bounds = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(bounds.width * dpr);
    canvas.height = Math.floor(bounds.height * dpr);
    canvas.style.width = `${bounds.width}px`;
    canvas.style.height = `${bounds.height}px`;
    sizeRef.current = { width: bounds.width, height: bounds.height, dpr };
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    contextRef.current = ctx;
    applyCanvasStyle();
    redraw();
  }, [applyCanvasStyle, redraw]);

  useEffect(() => {
    resizeCanvas();
    const observer = new ResizeObserver(() => resizeCanvas());
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [resizeCanvas]);

  const scheduleDraw = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      const ctx = contextRef.current;
      const nextPoint = pendingPointRef.current;
      const lastPoint = lastPointRef.current;
      if (!ctx || !nextPoint || !lastPoint) return;
      ctx.beginPath();
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(nextPoint.x, nextPoint.y);
      ctx.stroke();
      lastPointRef.current = nextPoint;
      pointsRef.current.push(nextPoint);
      pendingPointRef.current = null;
    });
  }, []);

  const toPoint = (event: React.PointerEvent<HTMLCanvasElement>): Point => {
    const rect = event.currentTarget.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    isDrawingRef.current = true;
    const point = toPoint(event);
    pointsRef.current.push(point);
    lastPointRef.current = point;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    pendingPointRef.current = toPoint(event);
    scheduleDraw();
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
    isDrawingRef.current = false;
    lastPointRef.current = null;
  };

  const handleClear = () => {
    pointsRef.current = [];
    lastPointRef.current = null;
    pendingPointRef.current = null;
    redraw();
  };

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-secondary px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Background</span>
          <input
            type="color"
            value={background}
            onChange={(event) => setBackground(event.target.value)}
            className="h-8 w-10 cursor-pointer rounded-md border border-border bg-transparent"
            aria-label="Select background color"
          />
        </div>
        <button
          type="button"
          onClick={handleClear}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground transition hover:bg-muted"
        >
          Clear path
        </button>
      </div>
      <div
        ref={containerRef}
        className="relative flex-1 overflow-hidden rounded-xl border border-border"
        style={{ backgroundColor: background }}
      >
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{ cursor: penCursor }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />
      </div>
    </div>
  );
};

export default PenToolCanvas;
