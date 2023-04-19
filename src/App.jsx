import './App.css'
import Header from './components/Header'
import programs from './data/sample.json'

import { Movies } from './components/Movies'
import { Series } from './components/Series'

function App () {
  const allMovies = programs.entries.filter(program => program.programType === 'movie' && program.releaseYear >= 2010)
  const movies = allMovies.slice(0, 20)

  const allSeries = programs.entries.filter(program => program.programType === 'series' && program.releaseYear >= 2010)
  const series = allSeries.slice(0, 20)

  return (
    <>
      <Header />

      <main>
        <Movies movies={movies} />
        <Series series={series} />
      </main>
    </>
  )
}

export default App
