import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {MovieSearch} from '../api/types';
import MovieItem from './MovieItem';

export interface MoviesProps {
  movies: MovieSearch[];
  isFetchingNextPage: boolean;
  fetchNextPage(): void;
}

const Movies = ({fetchNextPage, isFetchingNextPage, movies}: MoviesProps) => {
  console.log(movies);

  return (
    <FlatList
      data={movies}
      renderItem={({item}) => <MovieItem movie={item} />}
      keyExtractor={item => item.imdbID}
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => (
        <>
          {movies.length > 0 ? <View style={styles.separator} /> : null}
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
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
  spinner: {
    backgroundColor: 'white',
    paddingTop: 32,
    paddingBottom: 32,
  },
});

export default Movies;
