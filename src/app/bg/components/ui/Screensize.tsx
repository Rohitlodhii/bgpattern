import { useScreenStore } from '@/store/screen.store'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Screensize = () => {

    const {screenType , setScreenType } = useScreenStore();

  return (
    <div className='flex items-center justify-center h-8 w-36 absolute bg-secondary  overflow-hidden rounded-lg bottom-2 right-2'>
      
<Select
 
  value={screenType}
  onValueChange={(val) => setScreenType(val as "lg" | "md" | "sm")}
>
  <SelectTrigger className="h-full w-full bg-secondary">
    <SelectValue placeholder="Select screen type" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Screen Type</SelectLabel>
      <SelectItem value="lg">Desktop (lg)</SelectItem>
      <SelectItem value="md">Tablet (md)</SelectItem>
      <SelectItem value="sm">Mobile (sm)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
     
    </div>
  )
}

export default Screensize
