export function Home ({ handlePageChange }) {
  const buttons = [
    {
      title: 'Movies'
    },
    {
      title: 'Series'
    }
  ]

  return (
    <main id='home'>
      {buttons.map(button =>
        <div key={button.title} className='home-buttons'>
          <button onClick={() => handlePageChange(button.title)} key={button.title}>{button.title}</button>
        </div>
      )}
    </main>
  )
}
