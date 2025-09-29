"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { getMovieSearch, getMovieVideo } from "@/utils/getData";
import { movieResponseType } from "@/type/MovieResponseType";
import { ArrowRight, LoaderCircle, Search } from "lucide-react";

import Link from "next/link";
import { Separator } from "../ui/separator";

export const SearchSection = (toggler: any) => {
  const [searchValue, SetSearchValue] = useState("");
  const [loader, SetLoader] = useState(false);
  const [foundMovies, SetFoundMovies] = useState<movieResponseType | null>(
    null
  );

  const [isOpen, setIsOpen] = useState(false);

  const HandleOnType = async (e: any) => {
    SetLoader(true);
    const { value } = e.target;
    SetSearchValue(value);
    const foundData = await getMovieSearch(value);
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    SetLoader(false);
    SetFoundMovies(foundData);
    {
      console.log(foundMovies);
    }
  };

  return (
    <div>
      <Popover
        onOpenChange={() => {
          setIsOpen(false);
          SetSearchValue("");
        }}
        open={isOpen}
      >
        <PopoverTrigger>
          <div className="flex items-center">
            <Search className="text-muted-foreground mr-[-27px] w-[12px] h-[12px] " />
            <Input
              value={searchValue}
              className={`w-70 pl-8 sm:border-stone-300 sm:border-[1px] border-white shadow-none h-[36px] hidden sm:block sm:w-[379px] ${
                toggler ? "block" : "hidden"
              }`}
              type="text"
              placeholder="Search.."
              onChange={HandleOnType}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          align="start"
          className="sm:w-[577px] w-fit h-fit p-5 rounded-md border mt-[7px] bg-white dark:bg-black sm:block hidden"
        >
          <div className="gap-4 flex flex-col justify-center">
            {loader ? (
              <LoaderCircle className="m-auto animate-spin" />
            ) : foundMovies === null ? (
              ""
            ) : foundMovies!.results.length > 0 ? (
              foundMovies?.results.slice(0, 5).map((movie, i) => {
                return (
                  <div key={i} className="flex gap-4 justify-between">
                    <Link key={i} href={`/seeMore/${movie.id}`}>
                      <div className="flex">
                        <div className="w-[67px] h-[100px]">
                          <img
                            width={67}
                            height={100}
                            src={
                              movie.poster_path
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : "https://images.squarespace-cdn.com/content/v1/61b7a2c705855c798750b051/1639699939145-AJZ5O6AOME163WJ32ILA/p_800x1200_emptymanthe_en_121520.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="ml-2">
                          <h1 className="sm:w-80 w-auto">{movie.title}</h1>
                          <div className="flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.99967 1.3335L10.0597 5.50683L14.6663 6.18016L11.333 9.42683L12.1197 14.0135L7.99967 11.8468L3.87967 14.0135L4.66634 9.42683L1.33301 6.18016L5.93967 5.50683L7.99967 1.3335Z"
                                fill="#FDE047"
                                stroke="#FDE047"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="text-[12px] text-foreground font-bold">
                              {movie.vote_average}
                              <span className="text-muted-foreground">/10</span>
                            </p>
                          </div>
                          <div>
                            <h1 className="text-[14px]">2024</h1>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href={`/searchMore?&search=${searchValue}`}>
                      <button className="flex items-center px-[16px] py-[8px] pr-[0px]">
                        <p>See more</p>
                        <ArrowRight className="w-4 ml-2 mt-[2px]" />
                      </button>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center"> "no results"</div>
            )}
          </div>
          <div>
            <Separator className="mt-4"></Separator>
            <h1 className="mt-4">
              <a href={`/searchMore?&search=${searchValue}`}>
                See all results for'{searchValue}'
              </a>
            </h1>
          </div>
        </PopoverContent>
        <PopoverContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          align="center"
          className="bg-background border rounded-md p-5"
        >
          <div className="gap-4 flex flex-col justify-center w-full">
            {loader ? (
              <LoaderCircle className="m-auto animate-spin" />
            ) : foundMovies === null ? (
              ""
            ) : foundMovies!.results.length > 0 ? (
              foundMovies?.results.slice(0, 4).map((movie, i) => {
                return (
                  <div key={i} className="flex gap-4 justify-between">
                    <Link key={i} href={`/seeMore/${movie.id}`}>
                      <div className="flex">
                        <div className="w-[auto] h-[auto]">
                          <img
                            width={67}
                            height={100}
                            src={
                              movie.poster_path
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : "https://images.squarespace-cdn.com/content/v1/61b7a2c705855c798750b051/1639699939145-AJZ5O6AOME163WJ32ILA/p_800x1200_emptymanthe_en_121520.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="ml-2">
                          <h1 className="sm:w-80 w-40">{movie.title}</h1>
                          <div className="flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M7.99967 1.3335L10.0597 5.50683L14.6663 6.18016L11.333 9.42683L12.1197 14.0135L7.99967 11.8468L3.87967 14.0135L4.66634 9.42683L1.33301 6.18016L5.93967 5.50683L7.99967 1.3335Z"
                                fill="#FDE047"
                                stroke="#FDE047"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="text-[12px] text-foreground font-bold">
                              {movie.vote_average}
                              <span className="text-muted-foreground">/10</span>
                            </p>
                          </div>
                          <div>
                            <h1 className="text-[14px]">2024</h1>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href={`/searchMore?&search=${searchValue}`}>
                      <button className="flex items-center px-[16px] py-[8px] pr-[0px]">
                        <p>See more</p>
                        <ArrowRight className="w-4 ml-2 mt-[2px]" />
                      </button>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center w-80"> "no results"</div>
            )}
          </div>
          {loader && (
            <div>
              <Separator className="mt-4"></Separator>
              <h1 className="mt-4 ">
                <a href={`/searchMore?&search=${searchValue}`}>
                  See all results for'{searchValue}'
                </a>
              </h1>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};
