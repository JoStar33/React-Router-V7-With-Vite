import { getMovie } from "@/apis/movie";
import { useState } from "react";
import MovieCard from "@/app/movie/MovieCard";
import {
  movieButtonBaseStyle,
  movieButtonWrapperStyle,
} from "@/app/movie/movie.css";
import type { Route } from "./+types";

export async function loader({ params }: Route.LoaderArgs) {
  const movie = await getMovie({ page: 1 });
  return movie;
}

export default function MoviePage({ loaderData }: Route.ComponentProps) {
  const { movies } = loaderData;

  const [counter, setCounter] = useState(0);

  const onClickCounter = (isPlus: boolean) => {
    setCounter((prev) => (isPlus ? prev + 1 : prev - 1));
  };

  return (
    <div>
      <div className={movieButtonWrapperStyle}>
        <button
          className={movieButtonBaseStyle}
          onClick={() => onClickCounter(true)}
        >
          +
        </button>
        <h2>{counter}</h2>
        <button
          className={movieButtonBaseStyle}
          onClick={() => onClickCounter(false)}
        >
          -
        </button>
      </div>
      {movies.map((movieElement) => (
        <MovieCard key={movieElement.id} movie={movieElement} />
      ))}
    </div>
  );
}
