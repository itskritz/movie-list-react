import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { useState,useEffect} from "react";
import { searchMovies,getPopularMovies } from "../services/api";

function Home(){
const [searchquery,setsearchquery]=useState("")
const [movies,setMovies]=useState([]);
const [error,setError]=useState(null);
const [loading,setloading]=useState(true)

useEffect(()=>{
    const loadPopularMovies=async ()=>{
        try{
            const popularMovies=await getPopularMovies()
            setMovies(popularMovies)
        }catch(err){
            console.log(err)
            setError("failed to load the movies...")
        }finally{
            setloading(false)
        }
    }
    loadPopularMovies()


},[])

   
    const handleSearch=async(e)=>{
        e.preventDefault();
        if(!searchquery.trim())return
        if(loading)return
        setloading(true)
        try{
            const searchResults=await searchMovies(searchquery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search movies..")
        }finally{
            setloading(false)
        }
    };
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

            {loading?(<div className="loading">Loading..</div>
            ):(
                
            <div className="movies-grid">
                {movies.map((movie)=>movie.title.toLocaleLowerCase().startsWith(searchquery)&&(
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
            )}
        </div>
    );

}
export default Home