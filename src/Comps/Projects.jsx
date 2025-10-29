import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";
const Projects = () => {
    const[currentIndex,setCurrentIndex] = useState(0);
    const[cardsToShow,setCardsToShow] = useState(1);

    const nextproject = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % projectsData.length )
    }
    const prevproject = ()=>{
        setCurrentIndex((prev) => prev === 0 ? projectsData.length - 1 : prev - 1)
    }
    useEffect(()=>{
        const updateCardstoShow = ()=>{
            if(window.innerWidth>=1024){
                setCardsToShow(projectsData.length);
            }
            else{
                setCardsToShow(1)
            }
        };
        updateCardstoShow();
        window.addEventListener('resize',updateCardstoShow)
        return ()=> window.addEventListener('resize' , updateCardstoShow)
    })
       // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                prevproject();
            } else if (event.key === 'ArrowRight') {
                nextproject();
            }
        };

        // Add event listener when component mounts
        window.addEventListener('keydown', handleKeyDown);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

  return (
    <motion.div
    initial={{opacity: 0, x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1 , x:0}}
        viewport={{once:true}}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2x1 sm: text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span
          className="underline underline-offset-4 decoration-1 under font-light"
        >
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 ax-w-80 mx-auto">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>
      {/* slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button className="p-3 bg-gray-200 rounded mr-2">
            <img onClick={prevproject} src={assets.left_arrow} alt="PREVIOS"/>
        </button>
        <button className="p-3 bg-gray-200 rounded mr-2">
            <img onClick={nextproject} src={assets.right_arrow} alt="NEXT Project"/>
        </button>
      </div>
      {/* project slider container from data js */}
      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${(currentIndex * 100) / cardsToShow}%)`}}> 
            {projectsData.map((proj,index)=>(
                <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                    <img src={proj.image} alt={proj.title} className="w-full h-auto mb-14"/>
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md text-center ">
                        <h2 className="text-xl font-semibold text-gray-800">
                            {proj.title}
                        </h2>
                        <p className="text-gray-500 text-sm mx-auto">
                            {proj.price}<span className="px-2">{proj.location}</span>
                        </p>


                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
