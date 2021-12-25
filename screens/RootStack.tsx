import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MovieScreen from './MovieScreen';
import MoviesScreen from './MoviesScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        options={{headerShown: false}}
        component={MoviesScreen}
      />
      <Stack.Screen
        name="Movie"
        options={{title: 'Movie'}}
        component={MovieScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
