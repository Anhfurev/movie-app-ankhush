import { MovieType } from "./MovieType";

export type movieResponseType = {
  total_pages: any;
  page: number;
  totalPages: number;
  results: MovieType[];
};
