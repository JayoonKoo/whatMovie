import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Movie} from '../api/types';
import {isPosterUrl} from '../utils/poster';

export interface MovieDetailProps {
  movie: Movie;
}

const MovieDetail = ({movie}: MovieDetailProps) => {
  console.log(JSON.stringify(movie, null, 2));

  return (
    <ScrollView style={styles.block}>
      <View style={styles.block}>
        <View style={styles.posterWrap}>
          {isPosterUrl(movie.Poster) ? (
            <Image
              source={{uri: movie.Poster}}
              style={styles.poster}
              resizeMethod="resize"
              resizeMode="cover"
            />
          ) : (
            <View style={styles.noPoster}>
              <Text style={{color: 'white'}}>No Image</Text>
            </View>
          )}
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0)',
              'rgba(268, 168, 75, 1)',
            ]}
            style={styles.gradation}
          />
        </View>
        <View style={styles.shortDecStyle}>
          <Text style={styles.title}>{movie.Title}</Text>
          <Text>({movie.Year})</Text>
          <Text>{movie.Runtime}</Text>
        </View>
        <Text style={styles.lognDecStyle}>{movie.Plot}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#F7A630',
  },
  posterWrap: {
    width: '100%',
    height: 350,
    position: 'relative',
  },
  poster: {
    flex: 1,
    marginHorizontal: 30,
  },
  noPoster: {
    flex: 1,
    marginHorizontal: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradation: {
    position: 'absolute',
    left: 30,
    right: 30,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginRight: 10,
  },
  shortDecStyle: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  lognDecStyle: {
    paddingHorizontal: 20,
  },
});

export default MovieDetail;
