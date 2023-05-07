import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import githubLogo from "../public/assets/github2.jpg";
import Image from "next/image";

SwiperCore.use([Autoplay, Navigation, Pagination]);

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/CristoferBV/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: true,
    pagination: true,
  };

  const swiperContainerStyles = {
    maxWidth: "1200px",
    height: "700px",
    maxHeight: "calc(100vw - 40px)",
  };

  return (
    <section id="Projects">
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651a5]">
          Projects
        </p>
        <div className="py-4">
          <h2 className="text-4xl font-bold mb-4">What I`ve Built</h2>
        </div>
        <div className="m-auto py-12 shadow-xl rounded-xl">
          <Swiper {...swiperOptions} style={swiperContainerStyles}>
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="relative h-full">
                  <div className="absolute inset-0 z-10 p-4">
                    <div className="py-2">
                      <h2 className="text-black text-4xl font-bold">
                        {project.name}
                      </h2>
                    </div>
                    <div className="py-1">
                      <p className="text-black text-lg py-4 leading-loose font-semibold">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-full flex justify-center items-center">
                    <Image
                      src={githubLogo}
                      alt={project.name}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
