import "../css/Favourites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard"



function Favourites(){
const {favorites}=useMovieContext()
if(favorites){
    return (<div className="favorites">
        <h2>Your Favourites</h2>
        <div className="movies-grid">
            {favorites.map((movie) => (
  <MovieCard movie={movie} key={movie.id} />
))}
                {/* {favorites.map((movie)=>movie.title.toLocaleLowerCase().startsWith(searchquery)&&(
                    <MovieCard movie={movie} key={movie.id}/>
                ))} */}
            </div>
    </div>
    );
}

    // return <div className="favorites-empty">
    //     <h2>No favourite movies</h2>
    //     <p>start adding favourite movies</p>

    // </div>
    if (favorites.length === 0) {
  return <div className="favorites-empty">
    <h2>No favourite movies</h2>
    <p>Start adding favourite movies</p>
  </div>;
}
}
export default Favourites