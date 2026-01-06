import logo from '@/assets/black-logo.png';

const Header = () => (
  <div className='z-50 px-20 py-5'>
    <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-5 '>
      <img
        alt='Logo'
        className='w-50'
        src={logo}
      />

      <h2 className='hidden sm:flex font-tanigma-text text-tanigma-aqua font-bold text-5xl'>Header</h2>
    </div>
  </div>
);

export default Header;
