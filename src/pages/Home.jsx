import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { useState } from "react";

function Home(){
const [searchquery,setsearchquery]=useState("")

    const movies=[
        {id:1,title:"john wick",release_date:"2004"},
         {id:2,title:"barbie",release_date:"2025"},
         {id:3,title:"krittika",release_date:"2016"},
         {id:4,title:"miho",release_date:"2030"},
    ];
    const handleSearch=(e)=>{
        alert(searchquery)
        setsearchquery("-------")


    }
    return(
        <div className="home">
            <form onSubmit={handleSearch}className="search-form">
                <input type="text"
                 placeholder="Search for movies..." 
                className="search-input" 
                value={searchquery} 
                onChange={(e)=>setsearchquery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie)=>movie.title.toLocaleLowerCase().startsWith(searchquery)&&(
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )

}
export default Home