import { MovieCard, SwitchPhoto } from "@/components/my";
import GenreOfMovie from "@/components/my/GenreOfMovie";
import { movieResponseType } from "@/type/MovieResponseType";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const Movietype = async (typeOfMovie: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${typeOfMovie}?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const upcomingMovies: movieResponseType = await Movietype("upcoming");
  const getpopularMovies: movieResponseType = await Movietype("popular");
  const gettopRated: movieResponseType = await Movietype("top_rated");
  const nowPlaying: movieResponseType = await Movietype("now_playing");

  return (
    <div>
      <div className="justify-center">
        <SwitchPhoto move={nowPlaying.results}></SwitchPhoto>
      </div>
      <div>
        <div className="flex justify-between w-[1280px] m-auto mt-[92px] mb-[36px]">
          <h2 className="text-[24px] font-bold flex justify-start">Upcoming</h2>
          <Link href={"/seeMore"}>
            <button className="flex items-center px-[16px] py-[8px] pr-[0px]">
              <p>See more</p>
              <ArrowRight className="w-4 ml-2 mt-[2px]" />
            </button>
          </Link>
        </div>
        <GenreOfMovie move={upcomingMovies.results}></GenreOfMovie>
      </div>
      <div>
        <div className="flex justify-between w-[1280px] m-auto mt-[52px] mb-[36px]">
          <h2 className="text-[24px] font-bold flex justify-start">Popular</h2>
          <button className="flex items-center px-[16px] py-[8px] pr-[0px]">
            <p>See more</p>
            <ArrowRight className="w-4 ml-2 mt-[2px]" />
          </button>
        </div>
        <GenreOfMovie move={getpopularMovies.results}></GenreOfMovie>
      </div>
      <div>
        <div className="flex justify-between w-[1280px] m-auto mt-[52px] mb-[36px]">
          <h2 className="text-[24px] font-bold flex justify-start">
            Top Rated
          </h2>
          <button className="flex items-center px-[16px] py-[8px] pr-[0px]">
            <p>See more</p>
            <ArrowRight className="w-4 ml-2 mt-[2px]" />
          </button>
        </div>
        <GenreOfMovie move={gettopRated.results}></GenreOfMovie>
      </div>
    </div>
  );
}
