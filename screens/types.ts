import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Movie: {
    movieId?: number;
  };
};

export type RootStackNavagationProp =
  NativeStackNavigationProp<RootStackParamList>;
