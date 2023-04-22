export const getMovies = async () => {
  return fetch('http://localhost:3000/entries')
    .then(res => res.json())
    .then(data => {
      const allMovies = data.filter(entrie => entrie.programType === 'movie' && entrie.releaseYear >= 2010)
      console.log(allMovies)
      const movies = allMovies.slice(0, 20)
      return movies
    })
}
