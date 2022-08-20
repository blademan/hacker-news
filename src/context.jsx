import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from './actions';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
 isLoading: true,
 hits: [],
 nbPages: 0,
 query: 'react',
 page: 0,
};

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState);

 const fetchStories = async (url) => {
  dispatch({ type: SET_LOADING });
  try {
   const response = await fetch(url);
   const data = await response.json();
   dispatch({
    type: SET_STORIES,
    payload: { hits: data.hits, nbPages: data.nbPages },
   });
  } catch (error) {
   console.log(error);
  }
 };

 const handlePage = (page) => {
  dispatch({ type: HANDLE_PAGE, payload: page });
 };

 const removeHits = (id) => {
  dispatch({ type: REMOVE_STORY, payload: id });
 };
 const handleSearch = (query) => {
  dispatch({ type: HANDLE_SEARCH, payload: query });
 };

 useEffect(() => {
  fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
 }, [state.query, state.page]);

 return (
  <AppContext.Provider value={{ ...state, removeHits, handlePage, handleSearch }}>
   {children}
  </AppContext.Provider>
 );
};

export const useGlobalContext = () => {
 return useContext(AppContext);
};
