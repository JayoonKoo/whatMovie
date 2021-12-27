import client from './client';
import {Movie, MoviesResponse} from './types';

const API_KEY = '7035c60c';

export async function getMovies({
  s,
  page = 1,
}: {
  s: string | null;
  page?: number;
}) {
  if (!s) return null;

  const {data} = await client.get<MoviesResponse>('', {
    params: {
      apikey: API_KEY,
      s,
      page,
    },
  });

  const dupMovieIds = data.Search.map(movie => movie.imdbID);
  data.Search = data.Search.filter((movie, i) => {
    return dupMovieIds.indexOf(movie.imdbID) === i;
  });

  return data;
}

export async function getMovie(movieId: string) {
  const {data} = await client.get<Movie>('', {
    params: {
      apikey: API_KEY,
      i: movieId,
      plot: 'full',
    },
  });

  return data;
}
