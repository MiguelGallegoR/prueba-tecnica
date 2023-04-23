import { useState } from 'react'
import { getMovies } from '../services/getMovies'

export function useMovies () {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const showMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      const newMovies = await getMovies()
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title))

  return { movies: sortedMovies, showMovies, loading }
}
