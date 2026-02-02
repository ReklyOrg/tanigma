import { useEffect } from 'react';

import ClassesAndSessions from '@/components/classes-and-sessions/classes-and-sessions';
import Footer from '@/components/footer';
import { GallerySection } from '@/components/gallery-section/gallery-section';
import Header from '@/components/header';
import HeroSection from '@/components/hero/hero-section';
import WhoAreWe from '@/components/who-are-we/who-are-we';

const App = () => {
  useEffect(() => {
    console.log(`Version >> ${APP_VERSION}`);
    console.log(`Build date >> ${APP_VERSION_DATE}`);
  }, []);

  return (
    <div>
      <Header />

      <HeroSection />

      <div className='flex flex-col md:gap-10 md:p-10 md:pb-2'>
        <WhoAreWe />

        <ClassesAndSessions />

        <GallerySection />

        <Footer />
      </div>

      {/* TODO: remove */}

      <div className='bg-tanigma-secondary md:bg-transparent text-center pb-2'>
        <p className='text-tanigma-text-primary md:text-tanigma-text-muted text-sm'>
          <a
            aria-label='Link para o github do desenvolvedor'
            className='hover:underline active:underline'
            href='https://github.com/ruiaraujo012'
            rel='noreferrer'
            target='_blank'
          >
            Desenvolvido por Rui Araújo.
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
