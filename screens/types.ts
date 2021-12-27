import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Movie: {
    movieId: string;
  };
};

export type RootStackNavagationProp =
  NativeStackNavigationProp<RootStackParamList>;
