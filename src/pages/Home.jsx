import MovieCard from "../components/MovieCard"
function Home(){
    const movies=[
        {id:1,title:"john wick",release_date:"2004"},
       
         {id:2,title:"barbie",release_date:"2025"},
    ];
    const handleSearch=()=>{

    }
    return(
        <div className="home">
            <form onSubmit={handleSearch}className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input"/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )

}
export default Home