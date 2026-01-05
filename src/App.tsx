import logo from '@/assets/white-logo.png';

const App = () => (
  <>
    <div className='h-screen w-screen bg-linear-to-br from-tanigma-rose to-60% to-tanigma-sky'>
      <div className='flex h-screen justify-center items-center'>
        <img
          alt='Logo'
          className='text-center w-[50%]'
          src={logo}
        />
      </div>

      <h1 className='text-tanigma-rose'>Tanigma</h1>
    </div>
  </>
);

export default App;
