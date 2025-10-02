import React from 'react'
import { Navbar } from './Navbar'

export const Header = () =>  {
  return (
    <>
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden" style={{backgroundImage: "url('/header_img.png')"}} id='Header'></div>
        <Navbar/>
    </>
  )
}

export default Header