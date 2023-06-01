/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '../../utils/motion';

export const ServiceCard = ({ service, idx }) => {
  const { title, icon } = service;

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * idx, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
