import About from '@/components/About';
import Contact from '@/components/Contact';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Cris | Front-End Portfolio</title>
	      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css" integrity="sha512-+mK7mpu8cAOfre7c/51eKpX9/1jKfo1lw5+lMok5/vZb5K5Q5G1O28jKYZ+BClXoxOdi2cF6Ulu+6KoJp55lIQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
    <Navbar/>
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}
