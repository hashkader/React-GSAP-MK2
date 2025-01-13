import React, { useEffect } from 'react'
import gsap from 'gsap';

function NavBar() {
  const tl = gsap.timeline()

  useEffect(()=>{
    console.log("hello")
  })
  return (
    <div className='h-20 bg-transparent flex items-center justify-between px-10'>
      <div className="logo">
        logo
      </div>
      <div className="cta flex gap-10">
        <button className="about-button">About</button>
        <button className="projects-button">Projects</button>
      </div>
    </div>
  )
}

export default NavBar