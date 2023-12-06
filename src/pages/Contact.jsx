import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_bbjjp5n', 'template_xf6og4h', {
      from_name: form.name,
      to_name: 'Ganapathy',
      from_email: form.email,
      to_email: 'rganapathykarthikeyan8@gmail.com',
      message: form.message
    }, 'YoBgJzH92XwaPMK_-').then(() => {
      setLoading(false)
      alert("Thank You. I will get back to you as soon as possible");
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert("Something went wrong");
    })
  }

  return (
    <div className='h-screen flex flex-col items-center justify-start p-8'>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div className='font-Abril text-4xl text-white sm:text-6xl'>CONTACT</div>
      </motion.div>
      <div className='w-screen flex flex-col-reverse lg:flex-row p-3 sm:p-8 '>
        <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          className='rounded-lg bg-[#1e293ba8] p-1 sm:p-5 sm:w-1/2'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label className='flex flex-col p-1 sm:p-2'>
              <span className='font-IBM text-l sm:text-xl'>Name</span>
              <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="Your Name" className='border-none bg-[#1e293bea] p-1 sm:p-2 rounded-md placeholder:font-Raleway text-white font-Raleway' />
            </label>
            <label className='flex flex-col p-1 sm:p-2'>
              <span className='font-IBM text-l sm:text-xl'>Email</span>
              <input type='text' name='email' value={form.email} onChange={handleChange} placeholder='Your Email' className='border-none bg-[#1e293bea] p-1 sm:p-2 rounded-md placeholder:font-Raleway text-white font-Raleway' />
            </label>
            <label className='flex flex-col p-1 sm:p-2'>
              <span className='font-IBM text-l sm:text-xl'>Message</span>
              <textarea rows={4} type='text' name='message' value={form.message} onChange={handleChange} placeholder='Please enter your message' className='border-none bg-[#1e293bea] p-1 sm:p-2 rounded-md placeholder:font-Raleway text-white font-Raleway' />
            </label>
            <button type='submit' className='border-white font-IBM m-1'>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          className=' rounded-lg bg-transparent flex flex-col justify-center items-start p-2 sm:ml-5 sm:w-1/2'>
          <div className='font-Merri text-4xl text-[#85e6fe] sm:text-6xl'>Let's work together</div>
          <div className='sm:p-3'>
            <div className='p-2 sm:p-3'>
              <div className='font-Merri text-xl'>Mail</div>
              <div className='font-Raleway'>rganapathykarthikeyan8@gmail.com</div>
            </div>
            <div className='p-2 sm:p-3'>
              <div className='font-Merri text-xl'>Address</div>
              <div className='font-Raleway'>13, Agilandapuram Street, Tirunelveli Town</div>
              <div className='font-Raleway'>Tirunelveli, India - 627006</div>
            </div>
            <div className='p-2 sm:p-3'>
              <div className='font-Merri text-xl'>Phone</div>
              <div className='font-Raleway'>+91 8667269854</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact