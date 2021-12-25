import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MoviesScreen from './MoviesScreen';
import MovieScreen from './MovieScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: ''}}>
      <Stack.Screen name="Main" component={MoviesScreen} />
      <Stack.Screen
        name="Movie"
        options={{title: 'Movie'}}
        component={MovieScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
