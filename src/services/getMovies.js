export const getMovies = async () => {
  const defaultImageUrl = '../src/assets/clapperboard.png'
  return fetch('http://localhost:3000/entries')
    .then(res => res.json())
    .then(async data => {
      const allMovies = data.filter(entrie => entrie.programType === 'movie' && entrie.releaseYear >= 2010)
      const movies = allMovies.slice(0, 20)
      // Verificar si hay imágenes que devuelvan un error 404
      const checkImagePromises = movies.map(async movie => {
        const imageResponse = await fetch(movie.images['Poster Art'].url)
        return {
          movie,
          isImageOk: imageResponse.status !== 404
        }
      })

      const imageChecks = await Promise.all(checkImagePromises)

      // Agregar la URL de la imagen o la imagen por defecto a cada película
      return imageChecks.map(imageCheck => ({
        ...imageCheck.movie,
        imageUrl: imageCheck.isImageOk ? imageCheck.movie.images['Poster Art'].url : defaultImageUrl
      }))
    })
}
