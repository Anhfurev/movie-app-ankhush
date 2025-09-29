import { Badge, MovieCard } from "@/components/my";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { movieResponseType } from "@/type/MovieResponseType";
import { getMovieSearchMore } from "@/utils/getData";
import React from "react";

type moreLikeThisProps = {
  searchParams: Promise<{
    id: string;
    name: string;
    page: string;
    search: string;
  }>;
};

const page = async ({ searchParams }: moreLikeThisProps) => {
  const data = await getMovieGenres();
  const genres = data;
  const params = await searchParams;
  const id = params.id;
  const search = params.search;
  const page = params.page || "1";
  const PopularMovies: movieResponseType = await getMovieSearchMore(
    search,
    page
  );
  const url = `/searchMore?search=${search}`;

  return (
    <div className="w-[1280px] flex justify-center flex-col m-auto">
      <h2 className="text-[24px] font-bold flex justify-start mt-20">
        "{search}" Results
      </h2>
      <div className="flex gap-5">
        <div className="flex justify-between w-[1280px] m-auto mt-[32px] flex-wrap gap-8 overflow-scroll border-r pr-8">
          {PopularMovies.results
            ? PopularMovies.results
                .slice(0, 9)
                .map((movie) => (
                  <MovieCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    score={movie.vote_average}
                    image={movie.poster_path}
                  />
                ))
            : ""}
          {PopularMovies.results.length < 1 && (
            <h1 className="font-bold text-[30px] text-center justify-center">
              No results
            </h1>
          )}
        </div>

        <div className="w-[577px] h-fit bg-background p-5 rounded-md flex">
          <div>
            <h1 className="font-bold text-[24px] mt-0">Search by genre</h1>
            <p className="text-[16px]">See lists of movies by genre</p>
            <Separator className="mt-[20px] w-full" />
            <div className="mt-[20px]">
              <Badge genres={genres}></Badge>
            </div>
          </div>
        </div>
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
function getMovieGenres() {
  throw new Error("Function not implemented.");
}
