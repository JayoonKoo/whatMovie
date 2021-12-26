import React from 'react';
import {StyleSheet, Image, Pressable, Platform} from 'react-native';
import {MovieSearch} from '../api/types';
import NoPoster from './NoPoster';

export interface MovieItemProps {
  movie: MovieSearch;
}

const isPosterUrl = (url: string) => {
  return url !== 'N/A';
};

const MovieItem = ({movie}: MovieItemProps) => {
  const onPress = () => {};
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.block,
        pressed && Platform.OS === 'ios' && {opacity: 0.6},
      ]}
      android_ripple={{color: '#eeeeee'}}>
      {isPosterUrl(movie.Poster) ? (
        <Image
          source={{uri: movie.Poster}}
          style={styles.poster}
          resizeMethod="resize"
          resizeMode="cover"
        />
      ) : (
        <NoPoster title={movie.Title} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    margin: 6,
    width: '30.3333%',
    minHeight: 200,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
  },
  poster: {
    borderRadius: 10,
    flex: 1,
    height: 200,
  },
});

export default MovieItem;
