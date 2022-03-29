import { Transition, Dialog } from "@headlessui/react"
import { useState, Fragment, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { saveMovie } from "../movies/movieService";
import { fetchMovies } from "../movies/moviesSlice";
import { closeModal, selectMovieModal } from "./movieModalSlice";

export const MovieModal = () => {
    const [title, setTitle] = useState<string>('');
    const [year, setYear] = useState<number>(2000);
    const [description, setDescription] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const dispatch = useAppDispatch();
    const movieModalState = useAppSelector(selectMovieModal);

    useEffect(()=>{
        if(movieModalState.movie){
            const {title, description, genre, year, image } = movieModalState.movie;
            setTitle(title)
            setDescription(description)
            setYear(year)
            setGenre(genre.join(','))
            setImage(image ? image : '')
        }
    }, [movieModalState.movie])

  function close() {
    setTitle('')
    setDescription('')
    setYear(2000)
    setGenre('')
    setImage('')
    dispatch(closeModal())
  }

  function onSave() {
      let tempMovie = {
          id: movieModalState.movie?.id,
          title,
          description,
          year,
          genre: genre.split(','),
          image: image
      }
      saveMovie(tempMovie);
      dispatch(fetchMovies());
    close()
  }
  return (
    <>
      <Transition appear show={movieModalState.open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={close}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900"
                >
                  Edit Movie Details
                </Dialog.Title>
                <div className="mt-2">
					<label className="uppercase text-sm font-bold opacity-70">Title</label>
					<input type="text" 
                        className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                        value={title}
                        onChange={(event)=>setTitle(event.target.value)} />
					
                    <label className="uppercase text-sm font-bold opacity-70">Year</label>
					<input type="number" 
                        className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded"
                        value={year}
                        onChange={(event)=>setYear(Number(event.target.value))} />
					
                    <label className="uppercase text-sm font-bold opacity-70">Description</label>
					<textarea className="w-full p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" 
                        value={description}
                        onChange={(event)=>setDescription(event.target.value)} />
					
                    <label className="uppercase text-sm font-bold opacity-70">Genre (Comma-separated)</label>
					<input type="text" 
                        className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" 
                        value={genre}
                        onChange={(event)=>setGenre(event.target.value)} />
                    
                    <label className="uppercase text-sm font-bold opacity-70">Image URL</label>
					<input type="text" 
                        className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" 
                        value={image}
                        onChange={(event)=>setImage(event.target.value)} />
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="py-3 px-6 my-2 bg-emerald-500 text-white font-medium rounded hover:bg-indigo-500 cursor-pointer ease-in-out duration-300"
                    onClick={onSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}