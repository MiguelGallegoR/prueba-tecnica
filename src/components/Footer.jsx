export function Footer () {
  return (
    <footer style={{ bottom: 0, width: '100%' }} id='footer'>
      <div className='footer-menu'>
        <p>Home |</p>
        <p> Terms and Conditions |</p>
        <p> Privacy Policy |</p>
        <p> Collection Statement |</p>
        <p> Help | </p>
        <p> Manage Account |</p>

      </div>
      <div id='copyright'>
        <p> Copyrirght © 2016 DEMO Streaming. All rights reserved</p>
      </div>
      <div className='footer-icons'>
        <div className='footer-socials'>
          <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-facebook' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
          </svg>
          <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-twitter-filled' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z' stroke-width='0' fill='currentColor' />
          </svg>
          <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-instagram' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
            <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
            <path d='M16.5 7.5l0 .01' />
          </svg>
        </div>
        <div className='footer-stores'>
          <img src='src/assets/apple.png' alt='App store icon' />
          <img src='src/assets/google.png' alt='Play store icon' />
          <img src='src/assets/microsoft.png' alt='Windows store icon' />
        </div>

      </div>

    </footer>

  )
}
