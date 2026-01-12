import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

import logo from '@/assets/black-logo.png';
import { TANIGMA_EMAIL, TANIGMA_PHONE_NUMBER } from '@/constants/constants';
import AtIcon from '@/icons/at-icon';
import LocationIcon from '@/icons/location-icon';
import PhoneIcon from '@/icons/phone-icon';
import { formatInTriplets } from '@/utils/utilities';

const Footer = () => (
  <div className='bg-tanigma-secondary min-h-60 h-full py-5 flex justify-center items-center'>
    <div className='flex flex-col lg:flex-row justify-evenly items-center gap-10 p-4 w-full max-w-7xl'>
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

            <p className='font-tanigma-text text-lg text-tanigma-on-secondary'>
              +{formatInTriplets(TANIGMA_PHONE_NUMBER)}
            </p>
          </div>

          <div className='flex gap-2'>
            <AtIcon className='text-tanigma-on-secondary mt-1.5' />

            <a
              className='font-tanigma-text text-lg text-tanigma-on-secondary hover:text-tanigma-secondary-hover'
              href={`mailto:${TANIGMA_EMAIL}`}
            >
              {TANIGMA_EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Social media */}
      <div className='flex flex-row gap-3 items-center'>
        <a
          href='https://www.instagram.com/tanigma.pt/'
          rel='noreferrer'
          target='_blank'
        >
          <FaInstagram
            className='text-tanigma-on-secondary hover:text-tanigma-secondary-hover'
            size={40}
          />
        </a>

        <a
          href='https://www.facebook.com/people/Tanigma/61579996661177/'
          rel='noreferrer'
          target='_blank'
        >
          <FaFacebookF
            className='text-tanigma-on-secondary hover:text-tanigma-secondary-hover'
            size={36}
          />
        </a>

        <a
          href={`https://wa.me/${TANIGMA_PHONE_NUMBER}`}
          rel='noreferrer'
          target='_blank'
        >
          <FaWhatsapp
            className='text-tanigma-on-secondary hover:text-tanigma-secondary-hover'
            size={40}
          />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
