import React from 'react'

const YouTubeLogo = ({color}) => {
  return (
    <svg viewBox="0 0 67 60" fill={color}><path d="M63 14.87a7.885 7.885 0 00-5.56-5.56C52.54 8 32.88 8 32.88 8S13.23 8 8.32 9.31c-2.7.72-4.83 2.85-5.56 5.56C1.45 19.77 1.45 30 1.45 30s0 10.23 1.31 15.13c.72 2.7 2.85 4.83 5.56 5.56C13.23 52 32.88 52 32.88 52s19.66 0 24.56-1.31c2.7-.72 4.83-2.85 5.56-5.56C64.31 40.23 64.31 30 64.31 30s0-10.23-1.31-15.13z"></path><path fill={color==="#fff"?"#000":"#fff"} class="logo-arrow" d="M26.6 39.43L42.93 30 26.6 20.57z"></path></svg>
  )
}

export default YouTubeLogo
