export default function Header () {
  return (
    <header>
      <div className='header-menu'>
        <h1>DEMO Streaming</h1>
        <div className='header-buttons'>
          <a href=''>Log in</a>
          <button>Start your free trial</button>
        </div>
      </div>
      <div id='popular-titles'>
        <h2 style={{ textAlign: 'left', fontSize: '2rem' }}>Popular titles</h2>
      </div>
    </header>
  )
}
