import type { Config } from "@react-router/dev/config";
import { getMovieIdList } from "./apis/movie";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender(args) {
    const movieIdList = await getMovieIdList();
    return [...movieIdList.map((movieIdElement) => `/movie/${movieIdElement}`)];
  },
} satisfies Config;
