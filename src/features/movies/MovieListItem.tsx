import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { useAppDispatch } from "../../app/hooks";
import { MovieModel } from "../../model/movie"
import { MovieModal } from "../movieModal/MovieModal"
import { openModal } from "../movieModal/movieModalSlice";
import { deleteMovieById } from "./moviesSlice";

export const MovieListItem = ({info}:{info:MovieModel}) => {
    const dispatch = useAppDispatch();
    return <>
        <div className="w-full p-4">
            <div className="w-full border p-3 mx-auto bg-white rounded-2xl flex">
                {
                    info.image ?
                    <img
                        className="h-48 w-48 rounded-full p-2 flex-shrink-0"
                        src={info.image}
                        alt={`MovieImage: `+info.title}
                    />
                    :
                    <div className="h-48 w-48 rounded-full p-2 bg-gray-300 flex-shrink-0">
                    </div>
                }
                
                <div className="flex flex-col p-2 w-full">
                    <div className='flex justify-between items-center'>
                        <div className="font-bold text-lg capitalize">{info.title}</div>
                        <div className="flex">
                            <button className="flex items-center bg-blue-500 hover:bg-blue-300 text-white rounded px-2 mx-1"
                                    onClick={()=>dispatch(openModal(info))}>
                                    <PencilAltIcon className={'h-4 w-4 mr-1'} />Edit</button>
                            <button className="flex items-center bg-red-500 hover:bg-red-300 text-white rounded px-2 mx-1"
                                    onClick={()=>dispatch(deleteMovieById(info.id))}>
                                    <TrashIcon className={'h-4 w-4 mr-1'} />Delete</button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="my-2">{info.year}</div>
                        <div className="my-2">{info.description}</div>
                        <div className="my-2">
                        {
                            info.genre.map((genre,index) => 
                                <span key={genre+index} className="inline-block rounded-full text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3 capitalize">{genre}</span>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
