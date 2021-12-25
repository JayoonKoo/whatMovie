import React, {createContext, useContext, useState} from 'react';

type SearchContextState = [string | null, (search: string | null) => void];

const SearchContext = createContext<SearchContextState | null>(null);

export function SearchContexProvider({children}: {children: React.ReactNode}) {
  const searchState = useState<string | null>(null);
  return (
    <SearchContext.Provider value={searchState}>
      {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;

export function useSearchState() {
  const searchState = useContext(SearchContext);
  if (!searchState) {
    throw new Error('SearchContext is not used');
  }
  return searchState;
}
