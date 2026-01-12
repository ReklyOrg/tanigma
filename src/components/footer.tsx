import { useMemo } from 'react';

import logo from '@/assets/black-logo.png';
import AtIcon from '@/icons/at-icon';
import LocationIcon from '@/icons/location-icon';
import PhoneIcon from '@/icons/phone-icon';

const Footer = () => {
  const buildDate = useMemo(() => {
    try {
      return new Date(APP_VERSION_DATE).toLocaleString();
    } catch {
      return '';
    }
  }, []);

  return (
    <div className='bg-tanigma-secondary min-h-60 h-full py-5 flex justify-center items-center'>
      <div className='flex flex-col lg:flex-row justify-evenly items-center gap-4 p-4 w-full max-w-7xl'>
        {/* Logo */}
        <div className='flex flex-col items-center'>
          <img
            alt='Logo'
            className='w-32'
            src={logo}
          />

          <hr className='w-56 lg:w-full border rounded-xl border-tanigma-on-secondary' />

          <br />
          <p className='text-tanigma-on-secondary font-tanigma-variation text-4xl'>Leveza, força e entrega.</p>
        </div>

        {/* Contacts */}
        <div>
          <h2 className='font-tanigma-titles text-xl text-tanigma-on-secondary py-2'>Contactos</h2>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <LocationIcon className='text-tanigma-on-secondary mt-1.5' />

              <p className='font-tanigma-text text-lg text-tanigma-on-secondary'>
                Largo Conselheiro Arnaldo Norton de Matos, Nº41
                <br />
                Ponte de Lima, 4990-081
                <br />
                Portugal
              </p>
            </div>

            <div className='flex gap-2'>
              <PhoneIcon className='text-tanigma-on-secondary mt-1.5' />

              <p className='font-tanigma-text text-lg text-tanigma-on-secondary'>+351 911 928 526</p>
            </div>

            <div className='flex gap-2'>
              <AtIcon className='text-tanigma-on-secondary mt-1.5' />

              <a
                className='font-tanigma-text text-lg text-tanigma-on-secondary'
                href='mailto:tanigmaestudio@gmail.com'
              >
                tanigmaestudio@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social media */}
        <div>
          Redes sociais
          <p className='text-white'>Última atualização em: {buildDate}.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
