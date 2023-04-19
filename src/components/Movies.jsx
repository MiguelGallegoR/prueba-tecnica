
function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
                movies.map(movie => (
                  <li className='movie' key={movie.title}>
                    <h3>{movie.title}</h3>
                    <p>{movie.releaseYear}</p>
                    <img src={movie.images['Poster Art'].url} alt={movie.title} width='300px' />
                  </li>
                ))
            }
    </ul>
  )
}

function NoMoviesResult () {
  return (
    <p>No se encontraron resultados para esta película</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />

  )
}
