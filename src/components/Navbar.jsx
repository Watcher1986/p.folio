import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { wLogo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleActive = (e) => setActive(e.target.textContent);
  const handleToggle = () => setToggle(!toggle);

  useEffect(() => {}, []);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={wLogo}
            alt='logo'
            className='w-[50px] h-[50px] object-contain'
          />
          <p className='text-white font-bold text-[18px] cursor-pointer flex'>
            Denis &nbsp;
            <span className='sm:block hidden'>| ARTMinded</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              key={link?.id}
              onClick={handleActive}
            >
              <a href={`#${link?.id}`}>{link?.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 items-center justify-end'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={handleToggle}
          />
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10 shadow-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins hover:text-white text-[16px] font-medium cursor-pointer`}
                  key={link?.id}
                  onClick={(e) => {
                    handleActive(e);
                    handleToggle();
                  }}
                >
                  <a href={`#${link?.id}`}>{link?.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
