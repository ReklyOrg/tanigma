import logo from '@/assets/black-logo.png';
import ScheduleClassButton from '@/components/schedule-class-button';

const Header = () => (
  <div className='sticky px-20 py-5 z-50'>
    <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-5'>
      <img
        alt='Logo'
        className='w-32 lg:w-50'
        src={logo}
      />

      <div className='hidden lg:flex'>
        <ScheduleClassButton />
      </div>
    </div>
  </div>
);

export default Header;
