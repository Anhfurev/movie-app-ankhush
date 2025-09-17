import { MovieType } from "@/type/MovieType";
import { MovieCard } from "@/components/my/";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
};

export const MoviesContainer = ({ movies, title }: MoviesContainerProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex gap-4 flex-wrap">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
