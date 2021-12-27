import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Image, Pressable, Platform} from 'react-native';
import {MovieSearch} from '../api/types';
import {RootStackNavagationProp} from '../screens/types';
import {isPosterUrl} from '../utils/poster';
import NoPoster from './NoPoster';

export interface MovieItemProps {
  movie: MovieSearch;
}

const MovieItem = ({movie}: MovieItemProps) => {
  const navagation = useNavigation<RootStackNavagationProp>();
  const onPress = () => {
    navagation.navigate('Movie', {movieId: movie.imdbID});
  };
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
