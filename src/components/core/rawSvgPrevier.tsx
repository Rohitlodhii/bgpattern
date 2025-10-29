"use client";

import React from "react";

interface RawSVGPreviewProps {
  svg: string;
}

const RawSVGPreview: React.FC<RawSVGPreviewProps> = ({ svg }) => {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-300">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
};

export default RawSVGPreview;
