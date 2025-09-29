import { MovieType } from "./MovieType";

export type movieResponseType = {
  title: any;
  total_pages: any;
  page: number;
  totalPages: number;
  results: MovieType[];
};
