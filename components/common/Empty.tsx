import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface EmptyProps {
  text: string;
}

const Empty = ({text}: EmptyProps) => {
  return (
    <View style={styles.block}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Empty;
