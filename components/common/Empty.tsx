import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface EmptyProps {
  text: string;
  background?: string;
}

const Empty = ({text, background = '#F7A630'}: EmptyProps) => {
  return (
    <View style={[styles.block, {backgroundColor: background}]}>
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
