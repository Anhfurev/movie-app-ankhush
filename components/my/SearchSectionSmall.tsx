"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

import React, { useState } from "react";

import { Input } from "../ui/input";

import { getMovieSearch } from "@/utils/getData";

import { movieResponseType } from "@/type/MovieResponseType";

import { ArrowRight, LoaderCircle, Search } from "lucide-react";

import Link from "next/link";

import { Separator } from "../ui/separator";

export default function SearchSection({ toggler }: { toggler: boolean }) {
  const [searchValue, setSearchValue] = useState("");

  const [loader, setLoader] = useState(false);

  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleOnType = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchValue(value);

    if (value.length > 0) {
      setLoader(true);

      const foundData = await getMovieSearch(value);

      setFoundMovies(foundData);

      setIsOpen(true);

      setLoader(false);
    } else {
      setIsOpen(false);

      setFoundMovies(null);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="flex items-center cursor-text">
          <Search className="text-muted-foreground mr-[-27px] w-[12px] h-[12px]" />
          <Input
            value={searchValue}
            className={`w-70 pl-8 sm:border-stone-300 sm:border-[1px] border-white shadow-none h-[36px] sm:w-[379px] ${
              toggler ? "block" : "hidden"
            }`}
            type="text"
            placeholder="Search..."
            onChange={handleOnType}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        align="center"
        className="sm:w-[577px] w-[90vw] h-full p-5 rounded-md border mt-[7px] ml-[-18px] bg-white dark:bg-black"
      >
        <div className="gap-4 flex-col justify-center sm:flex">
          {loader ? (
            <LoaderCircle className="m-auto animate-spin" />
          ) : foundMovies?.results.length ? (
            foundMovies.results.slice(0, 5).map((movie, i) => (
              <div key={i} className="flex gap-4 justify-between">
                <Link
                  onClick={() => setIsOpen(false)}
                  href={`/seeMore/${movie.id}`}
                >
                  <div className="flex">
                    <div className="w-[67px] h-[100px]">
                      <img
                        width={67}
                        height={100}
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                            : "/placeholder.jpg"
                        }
                        alt={movie.title}
                      />
                    </div>
                    <div className="ml-2">
                      <h1 className="sm:w-80 w-auto">{movie.title}</h1>
                      <div className="flex">
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
              </div>
            ))
          ) : (
            <div className="flex justify-center">No results</div>
          )}
        </div>
        <Separator className="mt-4" />
        <h1 className="mt-4">
          <a href={`/searchMore?&search=${searchValue}`}>
            See all results for '{searchValue}'
          </a>
        </h1>
      </PopoverContent>
    </Popover>
  );
}
