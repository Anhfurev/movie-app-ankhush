"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GetTrailer } from "@/components/my/GetTrailer";
import { getMovieDetail, getMovieVideo } from "@/utils/getData";
import { MovieType } from "@/type/MovieType";

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
          {move.slice(0, 5).map((el: MovieType) => (
            <CarouselCard key={el.id} el={el} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10 sm:flex items-center justify-center hidden" />
        <CarouselNext className="right-10 sm:flex items-center justify-center hidden" />
      </Carousel>
      <div className="relative justify-center flex sm:mt-[-50px] mt-[-325px] m-auto">
        <div className="flex gap-2 justify-center m-auto ">
          {Array.from({ length: count }).map((_, index) => (
            <div
              onClick={() => {
                api?.scrollTo(index);
              }}
              key={index}
              className={`rounded-full sm:size-3 size-2 ${
                index + 1 === current ? "bg-white" : "bg-[#FFFFFFCC]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CarouselCard = ({ el }: { el: MovieType }) => {
  const [selectedTrailer, setSelectedTrailer] = React.useState("");
  const getTrailer = async () => {
    const Trailer = await getMovieVideo(el.id.toString());
    const za = Trailer.results.find((trail: any) =>
      trail.name.includes("Trailer")
    );
    setSelectedTrailer(za ? za.key : "");
  };

  React.useEffect(() => {
    getTrailer();
  }, []);

  return (
    <CarouselItem className="shadow-none w-full p-0">
      <div className="w-full">
        <Card
          className={`rounded-none h-[60vw] w-full p-0 md:h-[100vw]border-0 shadow-none items-center flex`}
        >
          <CardContent className="flex relative  items-center justify-center p-0   h-100%  w-full h-full sm:mt-0 mt-4">
            <img
              className="object-cover h-full w-full"
              src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
              alt=""
            />

            <div className="absolute text-white left-80 mt-[-160px] sm:block hidden">
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

              <GetTrailer
                youtubeKey={selectedTrailer}
                backdrop_path={el.backdrop_path}
              ></GetTrailer>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="sm:hidden flex">
        <CardContent
          key={el.id}
          className="items-center justify-center p-0   h-100%  w-full h-full sm:mt-0  sm:hidden ml-5 mr-5 z-10 mt-5"
        >
          <div className="text-accent-foreground flex justify-between mt-0">
            <div className="">
              <p className=" sm:text-[16px] text-[14px] mb-0 font-medium">
                Now Playing:
              </p>
              <h1 className="font-bold text-[24px] w-fit mt-[-3] h-fit">
                {el.title}
              </h1>
            </div>
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
          </div>
          <p className="w-fit mt-[20px]  overflow-hidden text-clip... h-30">
            {el.overview}
          </p>
          <GetTrailer
            youtubeKey={selectedTrailer}
            backdrop_path={""}
          ></GetTrailer>
        </CardContent>
      </div>
    </CarouselItem>
  );
};
