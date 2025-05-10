import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("movie", "routes/movie/index.tsx"),
  route("movie/:movieId", "routes/movie/movieDetail.tsx"),
] satisfies RouteConfig;
