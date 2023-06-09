import { useState } from 'react'
import { getSeries } from '../services/getSeries'

export function useSeries () {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const showSeries = async () => {
    try {
      setLoading(true)
      setError(null)
      const newSeries = await getSeries()
      setSeries(newSeries)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const sortedSeries = [...series].sort((a, b) => a.title.localeCompare(b.title))
  return { series: sortedSeries, showSeries, loading }
}
