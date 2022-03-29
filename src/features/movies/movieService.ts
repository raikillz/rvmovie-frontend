import { MovieModel } from "../../model/movie";

const SAMPLE_MOVIES:MovieModel[] = [
  {
    id: 1,
    title:'Iron Man', 
    year: 2008, 
    description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    genre:['action', 'adventure', 'sci-fi'],
    image: 'https://images.moviesanywhere.com/45589cb573be13bb984b078ed3e1cf9e/a0652686-b625-4b41-bdf1-f32c3d9471a6.jpg'
  },
  {
    id: 2,
    title:'The Incredible Hulk', 
    year: 2008, 
    description: 'Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.',
    genre:['action', 'adventure', 'sci-fi'],
    image: ''
  },
  {
    id: 3,
    title:'Thor', 
    year: 2011, 
    description: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
    genre:['action', 'adventure', 'fantasy']
  },
]

export function getAllMovies() {
  return new Promise<MovieModel[]>((resolve) =>
    setTimeout(() => resolve(SAMPLE_MOVIES), 3000)
  );
}

export function saveMovie(movie: MovieModel) {
  SAMPLE_MOVIES.push(movie)
}