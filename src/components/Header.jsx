
export default function Header () {
  return (
    <>
      <header id='header'>
        <div className='header-menu'>
          <a href='/index' id='demo-streaming'>
            <h1>DEMO Streaming</h1>
          </a>
          <div className='header-buttons'>
            <a href=''>Log in</a>
            <button>Start your free trial</button>
          </div>
        </div>
        <div id='popular-titles'>
          <h2 style={{ textAlign: 'left', fontSize: '2rem' }}>Popular titles</h2>
        </div>
      </header>
    </>
  )
}
