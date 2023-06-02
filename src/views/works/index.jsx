/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import ProjectCard from './ProjectCard';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are a few projects I&apos;ve worked on.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, idx) => (
          <ProjectCard key={`project-${idx}`} project={project} index={idx} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
