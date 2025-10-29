import React, { useState } from "react";
import { useCenterSoftGlowStore } from "./centersoftglowhelper";
import ColorPicker from "@/components/input/colorpicker";
import { Slider } from "@/components/ui/slider";
import { SwitchHeading, VContainer, VDivider, VHeading } from "@/components/core/editors/valuecontainer";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";


const CenterSoftGlowEditor = () => {
  const {
    bgColor,
    bgImageColor,
    bgImageColorOpacity,
    bgImagePosition,
    secondaryBg,
    secondaryBgOpacity,
    opacity,
    blendMode,
    gradientSize,
    setBgColor,
    setBgImageColor,
    setBgImageColorOpacity,
    setSecondaryBg,
    setBgImagePosition,
    setSecondaryBgOpacity,
    setOpacity,
    setBlendMode,
    setGradientSize,
  } = useCenterSoftGlowStore();


  const [ scolor , setSColor] = useState(true);

  const setChecked = () => {
    setSColor(!scolor);
    setSecondaryBg("transparent");
  }

  return (
    <div className="w-full ">
      <div className="flex flex-col gap-2">
        <VContainer heading="Background">
          <ColorPicker color={bgColor} setColor={setBgColor} />
        </VContainer>

        <VContainer>
          <VHeading>Primary Color</VHeading>
          <ColorPicker color={bgImageColor} setColor={setBgImageColor} />

          <Slider
            className="w-full"
            label="Primary Opacity"
            valueSubtext={bgImageColorOpacity}
            value={[bgImageColorOpacity]}
            onValueChange={(val) => setBgImageColorOpacity(val[0])}
            max={100}
            step={1}
          />
        </VContainer>

        <VDivider/>

        <VContainer>
          <SwitchHeading heading="Secondary Color?" checked={scolor} setChecked={setChecked} />
          <ColorPicker color={secondaryBg} setColor={setSecondaryBg} disabled={!scolor}/>

          <Slider
            className="w-full"
            label="Secondary Opacity"
            valueSubtext={secondaryBgOpacity}
            value={[secondaryBgOpacity]}
            onValueChange={(val) => setSecondaryBgOpacity(val[0])}
            max={100}
            step={1}
          />
        </VContainer>

        <VDivider/>

        <VContainer heading="Gradient Position">
        <Select
    value={bgImagePosition as string}
    onValueChange={(val) => setBgImagePosition(val)}
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select gradient Position" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Positions</SelectLabel>
    <SelectItem value="center">center</SelectItem>
    <SelectItem value="top">top</SelectItem>
    <SelectItem value="bottom">bottom</SelectItem>
    <SelectItem value="left">left</SelectItem>
    <SelectItem value="right">right</SelectItem>
    <SelectItem value="top left">top left</SelectItem>
    <SelectItem value="top right">top right</SelectItem>
    <SelectItem value="bottom left">bottom left</SelectItem>
    <SelectItem value="bottom right">bottom right</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</VContainer>
        <VDivider/>

        <VContainer heading="Gradient Size">
        <Select
    value={ gradientSize as string}
    onValueChange={(val) => setGradientSize(val)}
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select gradient size" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Keywords</SelectLabel>
        <SelectItem value="closest-side">closest-side</SelectItem>
        <SelectItem value="closest-corner">closest-corner</SelectItem>
        <SelectItem value="farthest-side">farthest-side</SelectItem>
        <SelectItem value="farthest-corner">farthest-corner</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</VContainer>


      </div>
    </div>
  );
};

export default CenterSoftGlowEditor;

// <Slider
// className='w-full'
// label="BgOpacity"
// valueSubtext={opacity}

// value={[opacity]}
// onValueChange={(val) => setOpacity(val[0])}
// max={1}
// step={0.01}
// />
