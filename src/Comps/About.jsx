import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
const About = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1 , x:0}}
        viewport={{once:true}} 
    
    
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'> 
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate about Properties,Dedicated to your vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'> 10+</p>
                        <p className=''>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'> 100+</p>
                        <p className=''>Projects Complete</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'> 40+</p>
                        <p className=''>mn.Sq.Ft. Develivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'> 10+</p>
                        <p className=''>On going Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita doloremque asperiores modi ea dignissimos saepe dicta autem id laudantium porro et, soluta magnam reiciendis nulla, commodi beatae, enim fugit quae corrupti explicabo molestias eaque quisquam veritatis at. Esse architecto aliquam enim officiis aliquid veniam nostrum vero inventore fuga.</p>
                <button className='bg-blue-600 text-white rounded px-8 py-2'> Learn More</button> 
            </div>
        </div>
    </motion.div>
  )
}

export default About