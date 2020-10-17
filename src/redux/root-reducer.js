import { combineReducers } from 'redux';

import booksReducer from './books.reducer';
import cartReducer from './cart.reducer';
import moviesReducer from './movies.reducer';

export default combineReducers({
  books: booksReducer,
  cart: cartReducer,
  movies: moviesReducer,
});
