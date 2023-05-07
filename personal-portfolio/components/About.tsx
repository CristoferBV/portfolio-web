import Image from "next/image";
import React from "react";
import imageMe from '../public/assets/me.jpg'

const About = () => {
  return (
    <section id="About">
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">
              I am a student of carrer Ingeniering in Systems of Information
            </p>
            <p className="py-2 text-gray-600">
            I have been studying systems engineering for almost 3 years, I have several projects created from different courses that demonstrate my skills as a programmer as well as an information systems engineer.
            </p>
            <p className="py-2 text-gray-600">
            I really like programming, but what I am most passionate about is creating functional and beautiful designs for different projects that have some impact, I am also good at socializing with people, I like teamwork because it makes work easier and I like to be in constant learning.
            </p>
            <p className="py-2 text-gray-600 underline cursor-pointer font-semibold">
              <a href="https://www.linkedin.com/in/cristofer-barrios-valverde-326762275/">Look at my linkedin profile.</a>
            </p>
          </div>
          <div className="w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center py-4 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={imageMe}
              alt="/"
              height={300}
              width={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
