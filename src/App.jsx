import './App.css'
import Header from './components/Header'
import { Movies } from './components/Movies'
import { Series } from './components/Series'
import { useState } from 'react'

function App () {
  const [pageLoaded, setPageLoaded] = useState('Home')

  const handlePageChange = (pageLoaded) => {
    setPageLoaded(pageLoaded)
  }

  return (
    <>
      <Header handlePageChange={handlePageChange} />
      <main>
        {pageLoaded === 'Movies' && <Movies />}
        {pageLoaded === 'Series' && <Series />}
      </main>
    </>
  )
}

export default App
