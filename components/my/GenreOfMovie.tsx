import { MovieCard, SwitchPhoto } from "@/components/my";
import { MovieType } from "@/type/MovieType";
import { movieResponseType } from "@/type/MovieResponseType";

const GenreOfMovie = ({ move }: any) => {
  return (
    <div className="flex  w-[1280px] flex-wrap justify-between m-auto gap-[30px] ">
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
