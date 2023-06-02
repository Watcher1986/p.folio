/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='w-full h-full flex justify-center items-center'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='bg-white w-full h-full rounded-[50%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((exp, idx) => (
          <li
            key={`experience-point-${idx}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {exp}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
