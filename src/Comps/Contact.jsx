import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'motion/react';
const Contact = () => {
const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "795ae65b-9f0c-43a2-839e-913ca79915d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Message Submitted")
      event.target.reset();
    } else {
        toast.error(data.message)
      setResult("Error");
    }
  };

  return (
    <motion.div
      initial={{opacity: 0, x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1 , x:0}}
        viewport={{once:true}}  
    
    
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
    id='Contact'>
        <h1 className="text-2xl sm:text-4x1 font-bold mb-2 text-center">
          Contact<span className="underline underline-offset-4 decoration-1 under font-light" > WithUs </span>
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto" >
          Real Stories from Those Who Found Home with Us
        </p>
        <form className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={ onSubmit}>
            <div className='flex flex-wrap'> 
                <div className='w-full md:w-1/2 text-left'>
                Your Name 
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text' name='Name' placeholder='Your Name' required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email 
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='email' name='Email' placeholder='Your Name' required/>
                </div>
            </div>
            <div className='my-6 text-left'>
                Meassage
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name='Message' placeholder=' Message' required />
            </div>
            <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
                {result ? result : "SendMessage"}
            </button>
        </form>
        
    </motion.div>
  )
}

export default Contact