import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSectionVariant from '@/components/hero-section-variant';

// import HeroSection from '@/components/hero-section';

const App = () => (
  <section className=''>
    {/* <section className='bg-tanigma-blush'> */}
    <Header />

    {/* <HeroSection /> */}
    <HeroSectionVariant />

    <div className='h-100 bg-tanigma-bg-soft'>Descrição sobre o estúdio</div>
    <div className='h-100 bg-white'>Aulas e/ou atividades</div>
    <div className='h-100 bg-tanigma-bg-page'>Horários (Pode ser na descrição das atividades se for fixo)</div>
    <div className='h-100 bg-tanigma-bg-section'>Equipa???</div>

    <Footer />
  </section>
);

export default App;
