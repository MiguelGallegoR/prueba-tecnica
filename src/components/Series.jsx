import { useState, useEffect } from 'react'
import { useSeries } from '../hooks/useSeries'

function ListOfSeries ({ series }) {
  const [selectedSerie, setSelectedSerie] = useState(null)

  const handleSelectSerie = (serie) => {
    setSelectedSerie(serie)
  }

  const handlePopupClose = () => {
    setSelectedSerie(null)
  }

  return (
    <ul className='series'>
      {
        series.map(serie =>
          <Serie serie={serie} key={serie.title} onSelectedSerie={() => handleSelectSerie(serie)} />
        )
      }
      {selectedSerie && <SerieInfo serieInfo={selectedSerie} handlePopupClose={handlePopupClose} />}

    </ul>
  )
}

function NoSeriesResult () {
  return (
    <p>No se encontraron resultados para esta película</p>
  )
}

export function Series () {
  const { series, loading, showSeries } = useSeries()

  const hasSeries = series?.length > 0

  useEffect(() => {
    showSeries()
  }, [])
  return (
    <>
      {loading && !hasSeries && <p>Loading...</p>}
      {hasSeries && <ListOfSeries series={series} />}
      {!hasSeries && !loading && <NoSeriesResult />}
    </>

  )
}

function Serie ({ serie, onSelectedSerie }) {
  return (
    <li className='serie' key={serie.title} onClick={onSelectedSerie}>
      <h3>{serie.title}</h3>
      <p>{serie.releaseYear}</p>
      <img src={serie.images['Poster Art'].url} alt={serie.title} width='300px' />
    </li>
  )
}

function SerieInfo ({ serieInfo, handlePopupClose }) {
  return (
    <div className='popup'>
      <div className='popup-content'>
        <button onClick={handlePopupClose}>Cerrar</button>
        <h2>{serieInfo.title}</h2>
        <p>{serieInfo.description}</p>
        <p>{serieInfo.releaseYear}</p>
        <img src={serieInfo.images['Poster Art'].url} alt={serieInfo.title} width='300px' />
      </div>

    </div>

  )
}
