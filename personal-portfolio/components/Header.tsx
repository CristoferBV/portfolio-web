import React from 'react'
import Image from 'next/image'

function Header() {
  return (
   <header className='bg-gray-900 text-white py-0'>
    <div className='container flex justify-between items-center'>
        <Image src="/img/logoPortfolio.png" width={800} height={0} alt="Imagen de cabecera" className='w-60 h-auto order-1'></Image>
        <nav className='flex items-center justify-center space-x-4 order-2'>
            <a href="#" className='hover:text-gray-300 px-4'>Home</a>
            <a href="#" className='hover:text-gray-300 px-4'>About me</a>
            <a href="#" className='hover:text-gray-300 px-4'>Projects</a>
            <a href="#" className='hover:text-gray-300 px-4'>Contacts</a>
		</nav>
    </div>
   </header>
  )
}

export default Header;