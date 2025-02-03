import React from 'react'


const Hero = () => {
  return (
    <div>
         <div className="relative w-full h-[300px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/Café Aylanto.jpg")' }}></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text on Top */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-yellow-300 hover:text-purple-400 text-center">
        <h1 className='text-7xl font-serif font-semibold'>welcome to blogs by misbah</h1>
      </div>
    </div>

    </div>
  )
}

export default Hero