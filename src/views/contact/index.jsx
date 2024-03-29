/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

import { EarthCanvas } from '../../components';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';

import { styles } from '../../styles';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const isFormValid = Object.values(form).every((field) => !!field);
    if (!isFormValid) {
      setLoading(false);
      alert('Please fill in all the fields.');
      return;
    }

    emailjs
      .send(
        'service_ptvlxzk',
        'template_5rjn9mk',
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          to_email: 'deniss2007@gmail.com',
          to_name: 'Denis',
        },
        'p8Ys2x7B8PxZ1r6ZE'
      )
      .then(
        () => {
          setLoading(false);
          alert(
            'Thank you for your message. I will get back to you as soon as possible.'
          );

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error.text);

          alert('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div className='relative xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-transparent rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-[#20194f] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-[#20194f] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-[#20194f] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#20194f] hover:bg-secondary transition-all duration-300 ease-in-out w-fit text-white font-bold shadow-md  py-3 px-8 outline-none shadow-primary rounded-xl mb-5'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

          <div className='bottom-1 inset-x-1/2 flex flex-row justify-center align-middle gap-4 text-white text-4xl'>
            <div
              className='text-white/80 hover:text-white'
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/denis-sokolenko-098686145/',
                  '_blank'
                )
              }
            >
              <FaLinkedin />
            </div>
            <div
              className='text-white/80 hover:text-white'
              onClick={() =>
                window.open('https://github.com/Watcher1986', '_blank')
              }
            >
              <FaGithub />
            </div>
            <div
              className='text-white/80 hover:text-white'
              onClick={() =>
                window.open('https://twitter.com/SokolenkoDenis', '_blank')
              }
            >
              <FaTwitter />
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
