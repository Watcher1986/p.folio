import { BrowserRouter } from 'react-router-dom';

import {
  Contact,
  // Contact,
  Hero,
  Navbar,
  StarsCanvas,
  // Works,
  // StartsCanvas,
} from './components';
import { About } from './views/about';
import { Experience } from './views/experience';
import { Tech } from './views/tech';
import { Works } from './views/works';
import { Feedbacks } from './views/feedback';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
