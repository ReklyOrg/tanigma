import { useMemo } from 'react';

import ClassesAndServices from '@/components/classes-and-services/classes-and-services';
import Footer from '@/components/footer';
import { GallerySection } from '@/components/gallery-section/gallery-section';
import Header from '@/components/header';
import HeroSection from '@/components/hero/hero-section';
import WhoAreWe from '@/components/who-are-we';

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

      <div className='flex flex-col md:gap-10 md:p-10'>
        <WhoAreWe />

        <ClassesAndServices />

        <GallerySection />

        <Footer />
      </div>

      {/* TODO: remove */}
      <p className='text-red-400 bg-white text-center py-2'>Última atualização em: {buildDate}.</p>
    </div>
  );
};

export default App;
