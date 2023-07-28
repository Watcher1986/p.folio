/* eslint-disable react-refresh/only-export-components */
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';
import ExperienceCard from './ExperienceCard';

import { textVariant } from '../../utils/motion';
import { experiences } from '../../constants';

import { styles } from '../../styles';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp) => (
            <ExperienceCard key={exp?.company_name} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
