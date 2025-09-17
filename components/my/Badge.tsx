import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { getMovieGenres } from "@/utils/getData";

export const Badge = async () => {
  const data = await getMovieGenres();
  const genres = data.genres;

  return (
    <div className="w-fit flex flex-wrap gap-[16px]">
      {genres.map((genre: any) => (
        <Link href={`/genre?id=${genre.id}&name=${genre.name}`} key={genre.id}>
          <button className="rounded-xl border border-stone-300 gap-[4px} flex px-[10px] hover:bg-accent">
            <div className="font-semibold">{genre.name}</div>
            <div className="ml-[10px] font-semibold">
              <ChevronRight />
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
};
