import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface NoPosterProps {
  title: string;
}

const NoPoster = ({title}: NoPosterProps) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>No Poster Image</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#192031',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    top: 30,
    color: 'white',
    fontSize: 10,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default NoPoster;
