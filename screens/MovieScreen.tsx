import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import {getMovie} from '../api/movies';
import Empty from '../components/common/Empty';
import MovieDetail from '../components/MovieDetail';
import {RootStackParamList} from './types';

type MovieScreenRouteProp = RouteProp<RootStackParamList, 'Movie'>;

const MovieScreen = () => {
  const {
    params: {movieId},
  } = useRoute<MovieScreenRouteProp>();

  const {data, isLoading, error} = useQuery(['movie', movieId], () =>
    getMovie(movieId),
  );

  if (isLoading) {
    return (
      <ActivityIndicator style={styles.spinner} size="small" color="gray" />
    );
  }

  if (error) {
    return <Empty text={error as string} />;
  }

  return <>{data && <MovieDetail movie={data} />}</>;
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7A630',
  },
});

export default MovieScreen;
