import { Content } from "../../features/content/Content"
import { MoviesComponent } from "../../features/movies/MoviesComponent"
import { MovieModel } from "../../model/movie"


export const MovieList = () => {
    
    return <>
        <Content title='Movies'><MoviesComponent /></Content>
    </>
}