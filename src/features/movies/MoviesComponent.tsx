import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, XCircleIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { MovieModel } from '../../model/movie';
import { MovieModal } from '../movieModal/MovieModal';
import { openModal } from '../movieModal/movieModalSlice';
import { MovieListItem } from './MovieListItem';
import { fetchMovies, selectMovies } from './moviesSlice';

export function MoviesComponent() {
  const dispatch = useAppDispatch();
  const moviesState = useAppSelector(selectMovies);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    dispatch(fetchMovies());
  }, [])


  return (
    <>
    {
      moviesState.status === 'loading' &&
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    }
    <MovieModal />
    <div className='flex justify-end items-center p-4'>
      <div>Search: <input className='border rounded mx-2 p-1' onChange={(event)=>setSearchInput(event.target.value)} /></div>
      <div>
        <button className='flex items-center bg-blue-500 hover:bg-blue-300 text-white rounded px-2 py-1 mx-1'
                onClick={()=>dispatch(openModal(undefined))}>
          <XCircleIcon className='h-5 w-5 rotate-45 mr-1'/>Add Movie</button>
      </div>
    </div>
    {
      moviesState.value
        .filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()))
        .map(movie => <MovieListItem key={'movie'+movie.id} info={movie}/> )
    }
    </>
  );
}
