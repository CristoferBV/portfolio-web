import React from 'react'
import Image from 'next/image'

function SecctionAboutMe() {
  return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About me</h2>
          <p className="mb-4">
            Hi there! My name is John Doe and Im a web developer based in
            San Francisco. I love building beautiful and functional websites
            using the latest technologies like React and Tailwind CSS.
          </p>
          <p>
            When Im not coding, you can usually find me hiking in the hills
            around the Bay Area or trying out new restaurants with friends.
          </p>
        </div>
        <div className="lg:w-1/2 lg:ml-auto">
          <Image src="/img/118080475.jpg" alt="Profile photo" width={250} height={200} className="rounded-lg shadow-md"/>
          <Image src="/img/118080475.jpg" alt="Profile photo" width={250} height={200} className="rounded-lg shadow-md"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SecctionAboutMe