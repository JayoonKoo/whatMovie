import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {MovieSearch} from '../api/types';
import MovieItem from './MovieItem';

export interface MoviesProps {
  movies: MovieSearch[];
  isFetchingNextPage: boolean;
  fetchNextPage(): void;
}

const Movies = ({fetchNextPage, isFetchingNextPage, movies}: MoviesProps) => {
  return (
    <FlatList
      numColumns={3}
      data={movies}
      renderItem={({item}) => <MovieItem movie={item} />}
      keyExtractor={item => item.imdbID}
      style={styles.list}
      ListFooterComponent={() => (
        <>
          {isFetchingNextPage && (
            <ActivityIndicator
              size="small"
              color="black"
              style={styles.spinner}
            />
          )}
        </>
      )}
      onEndReachedThreshold={0.2}
      onEndReached={fetchNextPage}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#F7A630',
  },
  spinner: {
    paddingTop: 32,
    paddingBottom: 32,
  },
});

export default Movies;
