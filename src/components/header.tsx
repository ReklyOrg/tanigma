import logo from '@/assets/black-logo.png';
import TanigmaButton from '@/ui/tanigma-button';

const Header = () => (
  <div className='z-50 px-20 py-5'>
    <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-5 '>
      <img
        alt='Logo'
        className='w-50'
        src={logo}
      />

      <div className='hidden lg:flex'>
        <TanigmaButton
          label='Marcar aula'
          variant='accent'
        />
      </div>
    </div>
  </div>
);

export default Header;
