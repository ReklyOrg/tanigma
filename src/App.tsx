import { useMemo } from 'react';

import ClassesAndServices from '@/components/classes-and-services';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
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
    <section className=''>
      <Header />

      <HeroSection />

      <WhoAreWe />

      <ClassesAndServices />

      <div className='h-100 bg-tanigma-bg-page'>Horários (Pode ser na descrição das atividades se for fixo)</div>
      <div className='h-100 bg-tanigma-bg-section'>Equipa???</div>

      <Footer />

      {/* TODO: remove */}
      <p className='text-red-400 bg-white text-center py-2'>Última atualização em: {buildDate}.</p>
    </section>
  );
};

export default App;
