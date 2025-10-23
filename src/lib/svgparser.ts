import { DOMParser } from "xmldom";

interface ParsedSVG {
  width: number | string;
  height: number | string;
  viewBox: string;
  clipId?: string;
  paths: { d: string; fill: string }[];
}

export function parseSVG(svgString: string): ParsedSVG {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "application/xml");

  const svgEl = doc.getElementsByTagName("svg")[0];
  if (!svgEl) throw new Error("Invalid SVG");

  const width = svgEl.getAttribute("width") || "100%";
  const height = svgEl.getAttribute("height") || "100%";
  const viewBox = svgEl.getAttribute("viewBox") || `0 0 ${width} ${height}`;

  // Optional clipPath
  const clipEl = svgEl.getElementsByTagName("clipPath")[0];
  const clipId = clipEl?.getAttribute("id") || undefined;

  // Extract all paths
  const pathEls = Array.from(svgEl.getElementsByTagName("path"));
  const paths = pathEls.map((p, index) => {
    const d = p.getAttribute("d") || "";
    const fill = p.getAttribute("fill") || "#000000";
    const fillVar = `\${path${index + 1}Fill || '${fill}'}`;
    return { d, fill: fillVar };
  });

  return {
    width,
    height,
    viewBox,
    clipId,
    paths,
  };
}
