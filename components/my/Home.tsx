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
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
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

      <div className="max-w-[1280px] flex flex-col justify-center m-auto">
        <div className="flex justify-between sm:w-[1280px] w-auto sm:mt-[92px] mt-[340px] sm:mb-[36px] mb-5">
          <h2 className="text-[24px] font-bold flex justify-start sm:ml-0 ml-5">
            Upcoming
          </h2>
          <Link className="sm:mr-0 mr-5" href={"/upComingMore"}>
            <button className="flex items-center px-[16px] py-[8px] pr-[0px]">
              <p>See more</p>
              <ArrowRight className="w-4 ml-2 mt-[2px]" />
            </button>
          </Link>
        </div>
        <GenreOfMovie
          className="sm:flex hidden"
          move={upcomingMovies.results}
        ></GenreOfMovie>
      </div>
      <div className="max-w-[1280px] flex flex-col justify-center m-auto">
        <div className="flex justify-between sm:w-[1280px] w-auto  sm:mt-[52px] mt-6 sm:mb-[36px] mb-5">
          <h2 className="text-[24px] font-bold flex justify-start sm:ml-0 ml-5">
            Popular
          </h2>
          <Link href={"/popularMore"}>
            <button className="flex items-center px-[16px] py-[8px] sm:mr-0 mr-5 pr-[0px]">
              <p>See more</p>
              <ArrowRight className="w-4 ml-2 mt-[2px]" />
            </button>
          </Link>
        </div>
        <GenreOfMovie move={getpopularMovies.results}></GenreOfMovie>
      </div>
      <div className="max-w-[1280px] flex flex-col justify-center m-auto">
        <div className="flex justify-between sm:w-[1280px] w-auto  sm:mt-[52px] mt-6 sm:mb-[36px] mb-5">
          <h2 className="text-[24px] font-bold flex justify-start sm:ml-0 ml-5">
            Top Rated
          </h2>
          <Link href={"/topRatedMore"}>
            <button className="flex items-center px-[16px] py-[8px] sm:mr-0 mr-5 pr-[0px]">
              <p>See more</p>
              <ArrowRight className="w-4 ml-2 mt-[2px]" />
            </button>
          </Link>
        </div>
        <GenreOfMovie move={gettopRated.results}></GenreOfMovie>
      </div>
    </div>
  );
}
function getMovieVideo(arg0: any) {
  throw new Error("Function not implemented.");
}

function setSelectedTrailer(arg0: any) {
  throw new Error("Function not implemented.");
}
