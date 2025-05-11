import API from "../constants/path";
import instance from ".";
import type { MovieDetail, MovieList } from "../types/movie";

const getMovie = async ({ page }: { page: number }) => {
  const res = await instance.get(`${API.MOVIE}?page=${page}`);
  const { data }: { data: MovieList } = res.data;
  return data;
};

const getMovieDetail = async (id: number) => {
  const res = await instance.get(`${API.MOVIE_DETAIL}?movie_id=${id}`);
  const { data }: { data: MovieDetail } = res.data;
  return data;
};

const getMovieIdList = (): Promise<string[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "68878",
        "68879",
        "68880",
        "68881",
      ]);
    }, 500);
  });

export { getMovie, getMovieDetail, getMovieIdList };
