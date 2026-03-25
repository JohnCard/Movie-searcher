import { useState } from "react"

const apiKey = import.meta.env.VITE_MOVIE_SEARCH
const urlBase = `https://api.themoviedb.org/3/search/movie?query=`
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
}

export const MovieSearch = () => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const fetchMovies = async () => {
        try{
            const response = await fetch(`${urlBase}${search}&api_key=${apiKey}`, options)
            const data = await response.json()
            setMovies(data.results)
        }catch(error){
            console.log(`Something went wrong - ${error}`)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies()
    }
  return (
    <>
        <div className="container">
            <h1 className="title">Movie searcher</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type a movie"
                    value={search}
                    onChange={handleInputChange}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}