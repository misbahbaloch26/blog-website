import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font bg-yellow-100">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="ml-3 text-xl  font-serif text-purple-800">BLOGS BY MISBAH</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
    <a href='/'  className="mr-5 text-purple-700 hover:text-gray-900">Home</a>
    <a href='/About-us'  className="mr-5 text-purple-700 hover:text-gray-900">About us</a>
    <a href='/contact-us'  className="mr-5 text-purple-700 hover:text-gray-900">Contact</a>
      
    </nav>
   
  </div>
</header>

    </div>
  )
}

export default Navbar