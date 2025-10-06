"use client";
import { ChevronDown, Search, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import SearchSection from "./SearchSection";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import { GenreTrigger } from "./genreTrigger";
import SearchSectionSmall from "./SearchSectionSmall";

export const SearchButton = ({ genres }: any) => {
  console.log(genres);
  const [toggler, setToggler] = useState(false);

  return (
    <div className="w-full h-full sm:hidden flex justify-center">
      {!toggler == false ? (
        <div className="flex items-center justify-between w-full h-full">
          <div className="sm:hidden block">
            <GenreTrigger genres={genres}></GenreTrigger>
          </div>
          <div className="sm:hidden block justify-center">
            <SearchSectionSmall toggler={toggler}></SearchSectionSmall>
          </div>
          <div className="sm:hidden flex items-center mr-[20px]">
            <button
              onClick={() => {
                setToggler(false);
              }}
            >
              <X strokeWidth={1.5} />
            </button>
          </div>
        </div>
      ) : (
        <div className="justify-between items-center w-full h-full sm:hidden flex">
          <Link href={"/"}>
            <div className="items-center sm:ml-0 ml-4 sm:hidden flex w-full h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M5.83366 2.16675V18.8334M14.167 2.16675V18.8334M1.66699 10.5001H18.3337M1.66699 6.33341H5.83366M1.66699 14.6667H5.83366M14.167 14.6667H18.3337M14.167 6.33341H18.3337M3.48366 2.16675H16.517C17.5203 2.16675 18.3337 2.9801 18.3337 3.98341V17.0167C18.3337 18.0201 17.5203 18.8334 16.517 18.8334H3.48366C2.48034 18.8334 1.66699 18.0201 1.66699 17.0167V3.98341C1.66699 2.9801 2.48034 2.16675 3.48366 2.16675Z"
                  stroke="#4338CA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[#4338CA] italic font-extrabold ml-[8px]">
                Movie Z
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                setToggler(true);
              }}
              variant="outline"
              className="secondary sm:hidden text-black bg-background w-[36px] m-auto justify-center flex dark:text-white"
            >
              <Search className="black" />
            </Button>
            <div className="sm:hidden block sm:mr-0 mr-4 ">
              <ThemeToggler></ThemeToggler>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
