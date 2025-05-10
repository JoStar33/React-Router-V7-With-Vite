import type { Movie } from "@/types/movie";
import {
  movieCardBaseStyle,
  movieCardImageStyle,
  movieCardInfoWrapperStyle,
} from "./movieCard.css";
import { Link, PrefetchPageLinks } from "react-router";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      prefetch="intent"
      className={movieCardBaseStyle}
    >
      <img
        width={300}
        height={300}
        src={movie.background_image_original}
        alt="영화 이미지"
        className={movieCardImageStyle}
      />
      <div className={movieCardInfoWrapperStyle}>
        <h4>{movie.title}</h4>
      </div>
    </Link>
  );
}
