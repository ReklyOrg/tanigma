import { useMemo } from 'react';

const Footer = () => {
  const buildDate = useMemo(() => {
    try {
      return new Date(APP_VERSION_DATE).toLocaleString();
    } catch {
      return '';
    }
  }, []);

  return (
    <div className='bg-tanigma-mauve min-h-60 flex flex-col justify-between'>
      <h2 className='text-tanigma-text-inverse font-bold text-xl'>Rodapé</h2>

      <p className='text-center text-white'>Última atualização em: {buildDate}.</p>
    </div>
  );
};

export default Footer;
