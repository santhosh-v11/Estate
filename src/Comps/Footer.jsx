import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 ,d:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden ' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start '>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark}/>
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, corrupti! Earum eaque nam modi et tempore sed iusto sequi, vero voluptatibus. Iure doloremque quaerat veniam consequatur hic earum tempore culpa.</p>
            </div>
            <div className='w-full mb-8 md:mb-0 md:w-1/5'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href='#Header' className='hover:text-white text-gray-400'>Home</a>
                    <a href='#About' className='hover:text-white text-gray-400'>AboutUs</a>
                    <a href='#Contact' className='hover:text-white text-gray-400'>Contact Us</a>
                    <a href='#Header' className='hover:text-white text-gray-400'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>The Latest News, articles and resources are sent to your Inbox daily.</p>
                <div className='flex gap-2'>
                    <input className='p-2 rounded bg-gray-800 text-gray-300 border-gray-400 focus:outline-none w-full md:w-auto' type='email' placeholder=' Enter Your Email'/>
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'> Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 text-center text-gray-500 mt-10'>
            Copyright 2025 © Estate. All Right Reserved
        </div>
    </div>
  )
}

export default Footer