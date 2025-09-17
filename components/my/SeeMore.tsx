import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  getMovieDetail,
  getMovieDirector,
  getMoviesBySame,
} from "@/utils/getData";

import { ArrowRight } from "lucide-react";
import { MovieCard } from "./Moviecard";
import { movieResponseType } from "@/type/MovieResponseType";
import { MovieType } from "@/type/MovieType";
type DetailDynamicPageProps = {
  id: string;
};
type TypeofPerson = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  job: string;
};

const SeeMore = async ({ id }: DetailDynamicPageProps) => {
  const similarMovies: movieResponseType = await getMoviesBySame(id);
  const MovieDetail: MovieType = await getMovieDetail(id);
  const MovieDirector = await getMovieDirector(id);
  console.log(MovieDirector);
  return (
    <div className="mt-14 max-w-[1280px] m-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-foreground text-[36px] font-extrabold">
            {MovieDetail.title}
          </h1>
          <p className="text-foreground text-[18px]">
            {MovieDetail.release_date}· PG · {MovieDetail.runtime} min
          </p>
        </div>
        <div>
          <div>
            <p className="text-[12px] font-bold">Rating</p>
          </div>
          <div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
                  fill="#FDE047"
                  stroke="#FDE047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <div>
                  <div className="flex">
                    <p className="text-foreground font-bold">
                      {MovieDetail.vote_average}
                      <span className="text-muted-foreground font-medium">
                        /10
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-center text-[12px]">
                    {MovieDetail.vote_count}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-8 mt-[24px] flex h-[510px]">
        <div className="w-[340px] h-[511px] rounded-1">
          <img
            src={`https://image.tmdb.org/t/p/original/${MovieDetail.poster_path}`}
            alt=""
          />
        </div>
        <div className="w-[908px] h-[511px] rounded-1">
          <img
            src={`https://image.tmdb.org/t/p/original/${MovieDetail.backdrop_path}`}
            alt=""
          />
        </div>
      </div>
      <div className="mt-[32px] gap-5 flex flex-col">
        <div className="flex gap-2">
          {MovieDetail.genres.map((genre: any) => (
            <Badge
              key={genre.id}
              className="bg-white text-foreground border dark:text-black border-border rounded-[9px] h-4 w-fit"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
        <div>
          <p className="text-foreground text-[16px]">{MovieDetail.overview}</p>
        </div>
        <div className="text-[16px] gap-5 flex flex-col">
          <div className="flex gap-14">
            <h1 className="w-16 font-bold">Director</h1>
            <p className="relative">
              {MovieDirector.crew
                .filter((person: TypeofPerson) => person.job === "Director")
                .map((person: TypeofPerson) => person.name)}
            </p>
          </div>
          <Separator></Separator>
          <div className="flex gap-14">
            <h1 className="w-16 font-bold">Writors</h1>
            <p className="relative">
              {MovieDirector.crew
                .filter((person: TypeofPerson) => person.job === "Writors")
                .map((person: TypeofPerson) => person.name)}
            </p>
          </div>
          <Separator></Separator>
          <div className="flex gap-14 ">
            <h1 className="w-16 font-bold">Stars</h1>
            <p className="relative">Jon M. Chu</p>
          </div>
          <Separator></Separator>
        </div>
      </div>
      <div className="flex justify-between mt-9">
        <h1 className="text-[24px] font-bold">More like this</h1>
        <button className="flex items-center px-[16px] py-[8px] pr-[0px]">
          <p>See more</p>
          <ArrowRight className="w-4 ml-2 mt-[2px]" />
        </button>
      </div>
      <div>
        <div className="flex justify-between w-[1280px] m-auto mt-[32px] flex-wrap gap-8 overflow-scroll">
          {similarMovies.results.slice(0, 5).map((movie) => (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SeeMore;
