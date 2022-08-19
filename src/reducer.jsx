import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from './actions';

export default function reducer(state, action) {
 switch (action.type) {
  case SET_LOADING:
   return { ...state, isLoading: true };
  case SET_STORIES:
   return {
    ...state,
    isLoading: false,
    hits: action.payload.hits,
    nbPages: action.payload.nbPages,
   };

  default:
   throw new Error(`no mathching "${action.type}" action type`);
 }
}