"use client";
import { useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { HexColorInput, HexColorPicker } from "react-colorful";

interface colorTypes {
  color: string;
  setColor: (color: string) => void;
  disabled?: boolean;
}

const ColorPicker = ({ color, setColor, disabled = false }: colorTypes) => {
  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <div className="border border-foreground/10 w-full h-8 p-1 rounded-lg bg-input flex items-center overflow-hidden">
      <Popover>
        <PopoverTrigger disabled={disabled}>
          <div
            className="h-6 aspect-square rounded-md border border-border cursor-pointer"
            style={{
              background: disabled ? "transparent" : color,
              opacity: disabled ? 0.5 : 1,
            }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <HexColorPicker color={color} onChange={(color) => setColor(color)} />
        </PopoverContent>
      </Popover>

      {disabled ? (
        <span className="px-2 text-sm text-foreground/50 select-none">
          Transparent
        </span>
      ) : (
        <HexColorInput
          prefixed={true}
          color={color}
          className="px-2 outline-none"
          onChange={(color) => setColor(color)}
        />
      )}
    </div>
  );
};

export default ColorPicker;
