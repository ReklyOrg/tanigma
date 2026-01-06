import { Footer } from '@/components/footer';
import Header from '@/components/header';
import { HeroSection } from '@/components/hero-section';

const App = () => (
  <section className=''>
    {/* <section className='bg-tanigma-blush'> */}
    <Header />

    <HeroSection />

    <div className='h-100 bg-tanigma-bg-page'>Descrição sobre o estúdio</div>
    <div className='h-100 bg-tanigma-bg-section'>Aulas e/ou atividades</div>
    <div className='h-100 bg-white'>Horários (Pode ser na descrição das atividades se for fixo)</div>
    <div className='h-100 bg-tanigma-bg-soft'>Equipa???</div>

    <Footer />
  </section>
);

export default App;
