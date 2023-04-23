export const getSeries = async () => {
  const defaultImageUrl = '../src/assets/clapperboard.png'
  return fetch('http://localhost:3000/entries')
    .then(res => res.json())
    .then(async data => {
      const allSeries = data.filter(entrie => entrie.programType === 'series' && entrie.releaseYear >= 2010)
      const series = allSeries.slice(0, 20)
      const checkImagePromises = series.map(async serie => {
        const imageResponse = await fetch(serie.images['Poster Art'].url)
        return {
          serie,
          isImageOk: imageResponse.status !== 404
        }
      })

      const imageChecks = await Promise.all(checkImagePromises)

      // Agregar la URL de la imagen o la imagen por defecto a cada película
      return imageChecks.map(imageCheck => ({
        ...imageCheck.serie,
        imageUrl: imageCheck.isImageOk ? imageCheck.serie.images['Poster Art'].url : defaultImageUrl
      }))
    })
}
