import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import React from "react";
import { Badge } from "./Badge";

type typeOfMe = {
  genres: { id: string; name: string }[];
};
export const GenreTrigger = ({ genres }: typeOfMe) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger
          asChild
          className="flex items-center h-[36px] border-stone-300 border rounded-md mr-[20px] py-[12px] sm:w-[97px]  w-[40px] justify-center "
        >
          <div className="ml-[20px] sm:ml-0">
            <ChevronDown className="w-[16px] items-center" />

            <div className="sm:block hidden">
              <p className="ml-[8px]">Genre</p>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="sm:w-[577px] h-fit bg-background p-5 rounded-md border mt-[7px] w-[calc(100vw-40px)] sm:ml-0"
        >
          <h1 className="font-bold text-[24px] mt-0">Genres</h1>
          <p className="text-[16px]">See lists of movies by genre</p>
          <Separator className="mt-[20px] w-full" />
          <div className="mt-[20px]">
            <Badge genres={genres}></Badge>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
