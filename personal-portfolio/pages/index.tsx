import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Head from 'next/head';
import SecctionAboutMe from '@/components/SecctionAboutMe';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio CrisDev</title>
	      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css" integrity="sha512-+mK7mpu8cAOfre7c/51eKpX9/1jKfo1lw5+lMok5/vZb5K5Q5G1O28jKYZ+BClXoxOdi2cF6Ulu+6KoJp55lIQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Header/>
      <SecctionAboutMe/>
    </div>
  );
};
