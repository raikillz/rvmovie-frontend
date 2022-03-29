import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movieModalReducer from '../features/movieModal/movieModalSlice';
import moviesReducer from '../features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieModal: movieModalReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
