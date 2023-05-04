import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>\\I am a student of carrer Ingeniering in Systems of Information</p>
                <p className='py-2 text-gray-600'>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. A unde quas qui? Dolore, laudantium eaque velit explicabo, sunt culpa delectus iste labore qui corporis, vel officia aperiam natus asperiores beatae?
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam mollitia tenetur tempore iste quasi reprehenderit velit sit rerum soluta, nam porro asperiores iusto, deserunt blanditiis cumque provident, ad veritatis veniam?
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center py-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About