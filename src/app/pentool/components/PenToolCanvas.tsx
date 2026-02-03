"use client";

import React, { useMemo, useRef, useState } from "react";

type Point = { x: number; y: number };

type PenToolCanvasProps = {
  points: Point[];
  setPoints: React.Dispatch<React.SetStateAction<Point[]>>;
  smoothPath: boolean;
  clipFill: string;
  borderColor: string;
  borderBlur: number;
  borderWidth: number;
  canvasColor: string;
};

const CANVAS_WIDTH = 820;
const CANVAS_HEIGHT = 520;

const getSmoothPath = (points: Point[]) => {
  if (points.length < 2) return "";
  if (points.length < 3) {
    const [first, second] = points;
    return `M ${first.x} ${first.y} L ${second.x} ${second.y} Z`;
  }
  let path = `M ${points[0].x} ${points[0].y}`;
  const count = points.length;
  for (let i = 0; i < count; i += 1) {
    const p0 = points[(i - 1 + count) % count];
    const p1 = points[i];
    const p2 = points[(i + 1) % count];
    const p3 = points[(i + 2) % count];

    const c1 = {
      x: p1.x + (p2.x - p0.x) / 6,
      y: p1.y + (p2.y - p0.y) / 6,
    };
    const c2 = {
      x: p2.x - (p3.x - p1.x) / 6,
      y: p2.y - (p3.y - p1.y) / 6,
    };
    path += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p2.x} ${p2.y}`;
  }
  return `${path} Z`;
};

const getStraightPath = (points: Point[]) => {
  if (points.length === 0) return "";
  const move = `M ${points[0].x} ${points[0].y}`;
  const lines = points.slice(1).map((point) => `L ${point.x} ${point.y}`).join(" ");
  return `${move} ${lines} Z`;
};

const PenToolCanvas = ({
  points,
  setPoints,
  smoothPath,
  clipFill,
  borderColor,
  borderBlur,
  borderWidth,
  canvasColor,
}: PenToolCanvasProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const pathData = useMemo(() => {
    return smoothPath ? getSmoothPath(points) : getStraightPath(points);
  }, [points, smoothPath]);

  const getSvgPoint = (event: React.PointerEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    const x = ((event.clientX - rect.left) / rect.width) * CANVAS_WIDTH;
    const y = ((event.clientY - rect.top) / rect.height) * CANVAS_HEIGHT;
    return { x, y };
  };

  const handlePointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    const target = event.target as HTMLElement;
    if (target.dataset.point) return;
    const point = getSvgPoint(event);
    setPoints((prev) => [...prev, point]);
  };

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (dragIndex === null) return;
    const point = getSvgPoint(event);
    setPoints((prev) =>
      prev.map((item, index) => (index === dragIndex ? point : item))
    );
  };

  const handlePointerUp = () => {
    setDragIndex(null);
  };

  return (
    <div className="w-full max-w-4xl px-6 py-4">
      <div className="rounded-2xl border border-border bg-background/60 p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>Click to add anchor points. Drag points to resize the clip path.</span>
          <span className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-widest">
            Pen Tool
          </span>
        </div>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
          className="h-[380px] w-full cursor-crosshair rounded-xl border border-border bg-muted"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <defs>
            <clipPath id="pen-clip-path">
              {pathData && <path d={pathData} />}
            </clipPath>
            <filter id="pen-border-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={borderBlur} />
            </filter>
          </defs>
          <rect width={CANVAS_WIDTH} height={CANVAS_HEIGHT} fill={canvasColor} />
          {pathData && (
            <rect
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              fill={clipFill}
              clipPath="url(#pen-clip-path)"
            />
          )}
          {pathData && (
            <path
              d={pathData}
              fill="none"
              stroke={borderColor}
              strokeWidth={borderWidth}
              filter={borderBlur > 0 ? "url(#pen-border-blur)" : undefined}
            />
          )}
          {pathData && (
            <path
              d={pathData}
              fill="none"
              stroke={borderColor}
              strokeWidth={Math.max(1, borderWidth - 1)}
            />
          )}
          {points.map((point, index) => (
            <circle
              key={`${point.x}-${point.y}-${index}`}
              data-point
              cx={point.x}
              cy={point.y}
              r={6}
              fill="#fff"
              stroke={borderColor}
              strokeWidth={2}
              onPointerDown={(event) => {
                event.stopPropagation();
                setDragIndex(index);
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default PenToolCanvas;
