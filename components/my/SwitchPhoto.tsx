"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { movieResponseType } from "@/type/MovieResponseType";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

export const SwitchPhoto = ({ move }: any) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full flex justify-center shadow-none border-0 h-full max-h-[1200px] mt-10"
      >
        <CarouselContent className="w-full shadow-none border-0 ml-0">
          {move.slice(0, 5).map((el: any) => (
            <CarouselItem className="shadow-none w-full p-0" key={el.id}>
              <div className="w-full">
                <Card className=" rounded-none h-full w-full p-0 border-0 shadow-none items-center flex">
                  <CardContent className="flex relative  items-center justify-center p-0   h-[1133px]  w-full ">
                    <img
                      className="object-cover h-full w-full"
                      src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                      alt=""
                    />
                    <div className="absolute text-white left-80">
                      <p className="text-white text-[16px] mb-0 font-medium">
                        Now Playing:
                      </p>
                      <h1 className="font-extrabold text-[50px] mt-[-10px]">
                        {el.title}
                      </h1>
                      <div className="flex items-center text-[18px]">
                        <svg
                          className="mr-[2px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="25"
                          viewBox="0 0 26 25"
                          fill="none"
                        >
                          <path
                            d="M12.9999 1.33337L16.6049 8.63671L24.6666 9.81504L18.8333 15.4967L20.2099 23.5234L12.9999 19.7317L5.78992 23.5234L7.16658 15.4967L1.33325 9.81504L9.39492 8.63671L12.9999 1.33337Z"
                            fill="#FDE047"
                            stroke="#FDE047"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="ml-1">{el.vote_average}</p>
                        <p className="text-muted-foreground">/10</p>
                      </div>
                      <p className="w-[500px] mt-[20px]">{el.overview}</p>
                      <Link href={""}>
                        <button className="flex items-center bg-white py-[8px] px-[16px] rounded-[6px] gap-[8px] mt-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="14"
                            viewBox="0 0 12 14"
                            fill="none"
                          >
                            <path
                              d="M1.33325 1L10.6666 7L1.33325 13V1Z"
                              stroke="#18181B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="text-black">Watch Trailer</p>
                        </button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10" />
        <CarouselNext className="right-10" />
      </Carousel>
      <div className="relative justify-center flex mt-[-50px]">
        <div className="flex gap-2 justify-center mt-[0px]">
          {Array.from({ length: count }).map((_, index) => (
            <div
              onClick={() => {
                api?.scrollTo(index);
              }}
              key={index}
              className={`rounded-full size-4 ${
                index + 1 === current ? "bg-white" : "bg-[#FFFFFFCC]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
