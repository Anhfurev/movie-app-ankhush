import { MovieCard } from "@/components/my";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { movieResponseType } from "@/type/MovieResponseType";
import React from "react";

type moreLikeThisProps = {
  searchParams: Promise<{ id: string; name: string; page: string }>;
};

const page = async ({ searchParams }: moreLikeThisProps) => {
  const Movietype = async (typeOfMovie: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${typeOfMovie}?language=en-US&page=${page}`,
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
  const params = await searchParams;
  const id = params.id;

  const page = params.page || "1";
  const PopularMovies: movieResponseType = await Movietype("top_rated");

  const url = `/topRatedMore?id=${id}`;

  return (
    <div className="sm:w-[1280px] w-auto flex justify-center flex-col m-auto">
      <h2 className="text-[24px] font-bold flex justify-start sm:mt-20 sm:ml-0 ml-5 mt-14">
        Top Rated
      </h2>
      <div className="flex  sm:w-[1280px] flex-wrap sm:justify-between justify-center m-auto sm:gap-[30px] gap-[18px] w-auto sm:ml-0 ml-5 sm:mr-0 mr-5 mt-3 sm:mt-0">
        {PopularMovies.results.map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
      <Pagination className="flex justify-center mt-[32px]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`${url}&page=${Number(page) - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              isActive={1 === Number(page)}
              href={`${url}&page=1`}
            >
              1
            </PaginationLink>
          </PaginationItem>
          {Number(page)! > 4 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <>
            {Array.from({ length: 100 })
              .map((_, i) => i + 1)
              .filter((p) => p >= Number(page) - 2 && p <= Number(page) + 2)
              .map(
                (p: number) =>
                  p !== 1 && (
                    <div key={p}>
                      <PaginationItem>
                        <PaginationLink
                          isActive={p === Number(page)}
                          href={`${url}&page=${p}`}
                        >
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    </div>
                  )
              )}
          </>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          {Number(page) !== 100 && (
            <PaginationItem>
              <PaginationLink href={`${url}&page=100`}>100</PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext href={`${url}&page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default page;
