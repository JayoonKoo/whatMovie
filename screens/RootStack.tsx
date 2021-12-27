import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MoviesScreen from './MoviesScreen';
import MovieScreen from './MovieScreen';
import {RootStackParamList} from './types';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen name="Main" component={MoviesScreen} />
      <Stack.Screen
        name="Movie"
        options={{title: 'Movie'}}
        component={MovieScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#192031',
  },
  headerTitleStyle: {
    color: 'white',
  },
});

export default RootStack;
