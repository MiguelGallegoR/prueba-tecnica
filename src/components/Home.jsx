export function Home ({ handlePageChange }) {
  const buttons = [
    {
      title: 'Movies'
    },
    {
      title: 'Tvshows'
    }
  ]

  return (
    <main>
      {buttons.map(button =>
        <button onClick={() => handlePageChange(button.title)} key={button.title}>{button.title}</button>
      )}
    </main>
  )
}
