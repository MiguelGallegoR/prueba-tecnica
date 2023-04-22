export const getSeries = async () => {
  return fetch('http://localhost:3000/entries')
    .then(res => res.json())
    .then(data => {
      const allSeries = data.filter(entrie => entrie.programType === 'series' && entrie.releaseYear >= 2010)
      const series = allSeries.slice(0, 20)
      return series
    })
}
