/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  getMovieDetail,
  getMovieDirector,
  getMoviesBySame,
  getMovieVideo,
} from "@/utils/getData";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Play } from "lucide-react";
import { MovieCard } from "./Moviecard";
import { movieResponseType } from "@/type/MovieResponseType";
import { MovieType } from "@/type/MovieType";
import Link from "next/link";

type DetailDynamicPageProps = {
  id: string;
};
type TypeofPerson = {
  department: string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  job: string;
};
type TypeOfCast = {
  id: number;
  name: string;
};
type TrailerType = {
  name: string;
  key: string;
};

const SeeMore = async ({ id }: DetailDynamicPageProps) => {
  const similarMovies: movieResponseType = await getMoviesBySame(id);
  const MovieDetail: MovieType = await getMovieDetail(id);
  const MovieDirector = await getMovieDirector(id);
  const Trailer = await getMovieVideo(id);

  const officialTrailer = Trailer.results.find((trail: TrailerType) =>
    trail.name.includes("Official Trailer")
  );
  const anyTrailer = Trailer.results.length > 0 ? Trailer.results[0] : null;
  const trailerToPlay = officialTrailer || anyTrailer;

  return (
    <div className="mt-14 sm:max-w-[1280px] w-auto m-auto">
      <div className="flex justify-between sm:items-center items-end">
        <div className="ml-5 sm:ml-0">
          <h1 className="text-foreground sm:text-[36px] text-[24px] sm:font-extrabold font-bold sm:leading-14 leading-9">
            {MovieDetail.title}
          </h1>
          <p className="text-foreground sm:text-[18px] text-[14px]">
            {MovieDetail.release_date}· PG · {MovieDetail.runtime} min
          </p>
        </div>
        <div className="sm:mr-0 mr-5 ">
          <div className="sm:block hidden">
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
      <div className="flex flex-col sm:flex-row gap-6 mt-6">
        <div className="sm:w-[27.5%] w-full rounded-lg overflow-hidden">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={
              MovieDetail.poster_path
                ? `https://image.tmdb.org/t/p/original${MovieDetail.poster_path}`
                : "https://images.squarespace-cdn.com/content/v1/61b7a2c705855c798750b051/1639699939145-AJZ5O6AOME163WJ32ILA/p_800x1200_emptymanthe_en_121520.jpg"
            }
            alt=""
          />
        </div>
        <div className="sm:w-[908px] w-full rounded-lg relative">
          <Dialog>
            <DialogTrigger>
              <div className="relative w-full h-0 pb-[56.25%] cursor-pointer rounded-lg overflow-hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={
                    MovieDetail.backdrop_path
                      ? `https://image.tmdb.org/t/p/original${MovieDetail.backdrop_path}`
                      : "https://images.squarespace-cdn.com/content/v1/61b7a2c705855c798750b051/1639699939145-AJZ5O6AOME163WJ32ILA/p_800x1200_emptymanthe_en_121520.jpg"
                  }
                  alt=""
                />
                <div className="absolute bottom-5 left-4 flex items-center gap-3 bg-black bg-opacity-50 rounded-full px-3 py-1 text-white">
                  <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                    <Play className="w-5 text-black" />
                  </div>
                  <h1>Play trailer</h1>
                  <h1>
                    <span>2</span>:<span>35</span>
                  </h1>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 sm:max-w-[1080px] max-w-full max-h-[600px] border-0 mr-5 overflow-auto">
              <DialogTitle className="hidden"></DialogTitle>
              {trailerToPlay ? (
                <iframe
                  className="w-full h-[340px] sm:h-[480px]"
                  src={`https://www.youtube.com/embed/${trailerToPlay.key}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-[340px] sm:h-[480px] flex items-center justify-center bg-black text-white">
                  No trailer available.
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mt-[32px] gap-5 flex flex-col">
        <div className="sm:hidden flex gap-4 items-start ml-5 mr-5">
          <img
            className="block flex-shrink-0 w-[100px] h-[148px] rounded-md"
            src={
              MovieDetail.poster_path
                ? `https://image.tmdb.org/t/p/original/${MovieDetail.poster_path}`
                : "https://images.squarespace-cdn.com/content/v1/61b7a2c705855c798750b051/1639699939145-AJZ5O6AOME163WJ32ILA/p_800x1200_emptymanthe_en_121520.jpg"
            }
            alt=""
          />

          <div className="flex flex-col gap-2 min-w-0">
            <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2">
              {MovieDetail?.genres.map((genre: any) => (
                <Badge
                  key={genre.id}
                  className="bg-white text-foreground border dark:text-black border-border rounded-[9px] h-4 w-fit flex-shrink-0"
                >
                  {genre.name}
                </Badge>
              ))}
            </div>

            <div className="sm:hidden flex">
              <p className="text-foreground text-[16px]">
                {MovieDetail.overview}
              </p>
            </div>
          </div>
        </div>
        <div className="sm:flex hidden sm:gap-0 gap-4 items-start">
          <div className="flex flex-col gap-2 h-fit">
            <div className="flex flex-wrap gap-2 ml-3">
              {MovieDetail?.genres.map((genre: any) => (
                <Badge
                  key={genre.id}
                  className="bg-white text-foreground border dark:text-black border-border rounded-[9px] h-4 w-fit"
                >
                  {genre.name}
                </Badge>
              ))}
            </div>

            <div className="sm:block hidden ml-4 mr-4">
              <p className="text-foreground text-[16px]">
                {MovieDetail.overview}
              </p>
            </div>
          </div>
        </div>

        <div className="text-[16px] gap-5 flex flex-col sm:ml-0 ml-5 mr-5 sm:mr-0">
          <div className="flex gap-14">
            <h1 className="w-16 font-bold">Director</h1>
            <p className="relative">
              {MovieDirector.crew
                .filter((person: TypeofPerson) => person.job === "Director")
                .map((person: TypeofPerson) => person.name)
                .join(", ") || "N/A"}
            </p>
          </div>
          <Separator></Separator>
          <div className="flex gap-14">
            <h1 className="w-16 font-bold">Writors</h1>
            <p className="relative">
              {MovieDirector.crew
                .filter(
                  (person: TypeofPerson) =>
                    person.department === "Writing" && person.job === "Writer"
                )
                .map((person: TypeofPerson) => person.name)
                .join(", ") || "N/A"}
            </p>
          </div>
          <Separator></Separator>
          <div className="flex gap-14 ">
            <h1 className="w-16 font-bold">Stars</h1>
            <p className="relative">
              {MovieDirector.cast
                .slice(0, 5)
                .map((person: TypeOfCast) => person.name)
                .join(", ") || "N/A"}
            </p>
          </div>
          <Separator></Separator>
        </div>
      </div>
      <Link href={`/moreLikeThis?id=${id}`}>
        <div className="flex justify-between mt-9 sm:ml-0 sm:mr-0 ml-5 mr-5">
          <h1 className="text-[24px] font-bold">More like this</h1>
          <button className="flex items-center px-[16px] py-[8px] pr-[0px]">
            <p>See more</p>
            <ArrowRight className="w-4 ml-2 mt-[2px]" />
          </button>
        </div>
      </Link>

      <div>
        <div className="hidden sm:flex justify-between sm:w-[1280px] w-fit m-auto sm:mt-[32px] mt-0 flex-nowrap gap-8 overflow-x-auto">
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
        <div className="flex sm:hidden justify-between w-full m-auto mt-6 flex-nowrap gap-4 overflow-x-auto px-5">
          {similarMovies.results.slice(0, 2).map((movie) => (
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
