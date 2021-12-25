import React from 'react';
import {View, Text} from 'react-native';
import {MovieSearch} from '../api/types';

export interface MovieItemProps {
  movie: MovieSearch;
}

const MovieItem = ({movie}: MovieItemProps) => {
  return (
    <View>
      <Text>{movie.Title}</Text>
      <Text>{movie.Year}</Text>
    </View>
  );
};

export default MovieItem;
