import { JSX } from "react";

export type MovieType = {
  crew: any;
  genres: {
    map(arg0: (genre: any) => JSX.Element): import("react").ReactNode;
    id: number;
    name: string;
  };
  vote_count: string;
  runtime: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};
