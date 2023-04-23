import './App.css'
import Header from './components/Header'
import { Home } from './components/Home'
import { Movies } from './components/Movies'
import { Series } from './components/Series'
import { useState } from 'react'
import { Footer } from './components/Footer'
function App () {
  const [pageLoaded, setPageLoaded] = useState('Home')

  const handlePageChange = (pageLoaded) => {
    setPageLoaded(pageLoaded)
  }

  return (
    <>
      <Header />
      <Home handlePageChange={handlePageChange} />

      <main style={{ width: '80%', margin: '0 auto' }}>
        {pageLoaded === 'Movies' && <Movies />}
        {pageLoaded === 'Series' && <Series />}
      </main>
      {pageLoaded === 'Home' && <Footer />}

    </>
  )
}

export default App
