import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { MovieModel } from '../../model/movie';
import { getAllMovies } from './movieService';

type Status = 'idle' | 'loading' | 'failed';
export interface MoviesState {
  value: MovieModel[];
  status: Status;
}

const initialState: MoviesState = {
  value: [],
  status: 'idle',
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    startLoading: (state) => {
      state.status = 'loading';
    },
    stopLoading: (state) => {
      state.status = 'idle';
    },
    failedLoading: (state) => {
      state.status = 'failed';
    },
    setMovies: (state, action: PayloadAction<MovieModel[]>) => {
      state.value = action.payload;
    },
    deleteMovieById: (state, action: PayloadAction<number|undefined>) => {
      state.value = state.value.filter(movie => movie.id !==action.payload);
      //backend request delete by id
    }
  }
});

export const { startLoading, stopLoading, failedLoading, setMovies, deleteMovieById } = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies;

export const fetchMovies = (): AppThunk => (dispatch,getState) => {
  const moviesState = selectMovies(getState());
  dispatch(startLoading())
  getAllMovies().then(data => {
    dispatch(setMovies([...data]))
    dispatch(stopLoading())
  }).catch(() => {
    dispatch(failedLoading())
  })
};

export default moviesSlice.reducer;
