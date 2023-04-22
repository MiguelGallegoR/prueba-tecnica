import { useEffect, useState } from 'react'
import { useMovies } from '../hooks/useMovies'

function ListOfMovies ({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie)
  }

  const handlePopupClose = () => {
    setSelectedMovie(null)
  }

  return (
    <ul className='movies'>
      {
        movies.map(movie =>
          <Movie movie={movie} key={movie.title} onSelectedMovie={() => handleSelectMovie(movie)} />
        )

      }

      {selectedMovie && <MovieInfo movieInfo={selectedMovie} handlePopupClose={handlePopupClose} />}

    </ul>
  )
}

function NoMoviesResult () {
  return (
    <p>No se encontraron resultados para esta película</p>
  )
}

export function Movies () {
  const { movies, loading, showMovies } = useMovies()

  const hasMovies = movies?.length > 0

  useEffect(() => {
    showMovies()
  }, [])
  return (
    <>
      {loading && !hasMovies && <p>Loading...</p>}
      {hasMovies && <ListOfMovies movies={movies} />}
      {!hasMovies && !loading && <NoMoviesResult />}
    </>

  )
}

function Movie ({ movie, onSelectedMovie }) {
  return (
    <li className='movie' key={movie.title} onClick={onSelectedMovie}>
      <h3>{movie.title}</h3>
      <p>{movie.releaseYear}</p>
      <img src={movie.images['Poster Art'].url} alt={movie.title} width='300px' />
    </li>
  )
}

function MovieInfo ({ movieInfo, handlePopupClose }) {
  return (
    <div className='popup'>
      <div className='popup-content'>
        <button onClick={handlePopupClose}>Cerrar</button>
        <h2>{movieInfo.title}</h2>
        <p>{movieInfo.description}</p>
        <p>{movieInfo.releaseYear}</p>
        <img src={movieInfo.images['Poster Art'].url} alt={movieInfo.title} width='300px' />
      </div>

    </div>

  )
}
