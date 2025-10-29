import { useCenterSoftGlowStore } from "./centersoftglowhelper";

export const CenterSoftGlow = () => {
  const {
    bgColor,
    bgImageColor,
    bgImageColorOpacity,
    bgImagePosition,
    secondaryBg,
    secondaryBgOpacity,
    opacity,
    blendMode,
    gradientSize, // added
  } = useCenterSoftGlowStore();

  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="min-h-screen w-full relative"
    >
      {/* Soft Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle ${gradientSize || "farthest-corner"} 
              at ${bgImagePosition}, 
              ${bgImageColor} ${bgImageColorOpacity}%, 
              ${secondaryBg} ${secondaryBgOpacity}%
            )
          `,
          opacity: opacity,
          mixBlendMode: blendMode,
        }}
      />
      {/* Your Content/Components */}
    </div>
  );
};
