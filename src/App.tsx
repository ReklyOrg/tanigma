import { useMemo } from 'react';

import ClassesAndSessions from '@/components/classes-and-sessions/classes-and-sessions';
import Footer from '@/components/footer';
import { GallerySection } from '@/components/gallery-section/gallery-section';
import Header from '@/components/header';
import HeroSection from '@/components/hero/hero-section';
import WhoAreWe from '@/components/who-are-we/who-are-we';

const App = () => {
  const buildDate = useMemo(() => {
    try {
      return new Date(APP_VERSION_DATE).toLocaleString();
    } catch {
      return '';
    }
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

      <a
        aria-label='Link para o github do desenvolvedor'
        href='https://github.com/ruiaraujo012'
        rel='noreferrer'
        target='_blank'
      >
        <p className=' bg-tanigma-secondary md:bg-transparent text-tanigma-text-primary md:text-tanigma-text-muted  text-sm text-center py-2 hover:underline active:underline'>
          Desenvolvido por Rui Araújo.
        </p>
      </a>
      <p className='text-red-400 text-center py-2'>Última atualização em: {buildDate}.</p>
    </div>
  );
};

export default App;
