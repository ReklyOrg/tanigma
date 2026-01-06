import { Footer } from '@/components/footer';
import Header from '@/components/header';
import { MainSection } from '@/components/main-section';

const App = () => (
  <section className=''>
    {/* <section className='bg-tanigma-blush'> */}
    <Header />

    <MainSection />

    <div className='h-25'>Test</div>

    <Footer />
  </section>
);

export default App;
