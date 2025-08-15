import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-700 text-white flex justify-between px-2 py-2'>
      <h1 className='font-semibold font-mono'>Mini Ride</h1>
      <nav>
        <ul className='flex gap-3 '>
            <li className='hover:text-cyan-300'><a href="#">Home</a></li>
            <li className='hover:text-cyan-300'><a href="#">About</a></li>
            <li className='hover:text-cyan-300'><a href="#">Contact</a></li>
            <li className='hover:text-cyan-300'><a href="#">Blog</a></li>
            <li className='hover:text-cyan-300'><a href="#">Portfolio</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
