
function ListOfSeries ({ series }) {
  return (
    <ul className='series'>
      {
                series.map(serie => (
                  <li className='serie' key={serie.title}>
                    <h3>{serie.title}</h3>
                    <p>{serie.releaseYear}</p>
                    <img src={serie.images['Poster Art'].url} alt={serie.title} width='300px' />
                  </li>
                ))
            }
    </ul>
  )
}

function NoSeriesResult () {
  return (
    <p>No se encontraron resultados para esta película</p>
  )
}

export function Series ({ series }) {
  const hasSeries = series?.length > 0
  return (
    hasSeries
      ? <ListOfSeries series={series} />
      : <NoSeriesResult />

  )
}
