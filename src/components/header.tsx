import logo from '@/assets/black-logo.png';

const Header = () => {
  const a = 2;

  return (
    <div className='px-5 flex flex-row justify-between items-center gap-5'>
      <img
        alt='Logo'
        className='w-30'
        src={logo}
      />

      <h2 className='font-tanigma-text text-tanigma-aqua font-bold text-5xl'>Header</h2>
    </div>
  );
};

export default Header;
