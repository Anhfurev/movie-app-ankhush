import { MovieCard, SwitchPhoto } from "@/components/my";
import { MovieType } from "@/type/MovieType";
import { movieResponseType } from "@/type/MovieResponseType";

const GenreOfMovie = ({ move }: any) => {
  return (
    <div className="flex  sm:w-[1280px] flex-wrap sm:justify-between justify-center m-auto sm:gap-[30px] gap-[18px] w-auto sm:ml-0 ml-5 sm:mr-0 mr-5">
      {move.slice(0, 10).map((movie: any, i: number) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.poster_path}
          score={movie.vote_average}
          id={movie.id}
        ></MovieCard>
      ))}
    </div>
  );
};
export default GenreOfMovie;
