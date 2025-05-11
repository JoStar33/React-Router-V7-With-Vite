import type { Route } from "./+types/movieDetail";
import { getMovieDetail } from "@/apis/movie";

export async function loader({ params }: Route.LoaderArgs) {
  const movieDetailInfo = await getMovieDetail(parseInt(params.movieId));
  return movieDetailInfo;
}

export default function MovieDetailPage({ loaderData }: Route.ComponentProps) {
  const { movie } = loaderData;
  return (
    <div>
      <img src={movie.large_cover_image} alt={movie.title} />
    </div>
  );
}
