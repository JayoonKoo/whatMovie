import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {getMovies} from '../api/movies';
import {MovieSearch} from '../api/types';
import Empty from '../components/common/Empty';
import Input from '../components/common/Input';
import Movies from '../components/Movies';
import {useSearchState} from '../context/SearchContex';
import {RootStackNavagationProp} from './types';

const MoviesScreen = () => {
  const [search] = useSearchState();
  const navigation = useNavigation<RootStackNavagationProp>();

  const {data, isFetchingNextPage, fetchNextPage} = useInfiniteQuery(
    ['movies', search],
    ({pageParam}) => getMovies({s: search, page: pageParam}),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage) return;
        return lastPage.Search.length === 10
          ? {page: allPages.length + 1}
          : undefined;
      },
    },
  );

  // header 설정
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={styles.headerTitleLeft}>
          Mo<Text style={styles.headerTitleRight}>vies</Text>
        </Text>
      ),
      headerStyle: styles.headerStyle,
    });
  });

  const movies = useMemo(() => {
    if (!data?.pages[0] || !data) {
      return null;
    }

    return ([] as MovieSearch[]).concat(
      ...data.pages.map(movieRes => movieRes!.Search),
    );
  }, [data]);

  return (
    <>
      <Input />
      {!movies ? (
        <Empty text="영화 컨텐츠가 없습니다." />
      ) : (
        <Movies
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          movies={movies}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#192031',
    color: 'white',
  },
  headerTitleLeft: {
    color: '#73A73D',
    fontSize: 24,
    fontWeight: '700',
  },
  headerTitleRight: {
    color: 'white',
  },
});

export default MoviesScreen;
