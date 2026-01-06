import aerialYogaMobile from '@/assets/aerial-yoga-mobile.png';
import aerialYoga from '@/assets/aerial-yoga.png';

export const MainSection = () => {
  const foo = 1;

  return (
    <div
      // 100vh - header height
      className='h-[calc(100vh-240px)] max-md:min-h-250 w-full'
    >
      <div className='relative min-h-full w-full'>
        <div>
          {/* Larger screens */}
          <img
            alt='mulher praticando aerial yoga'
            className='max-lg:hidden absolute h-full w-full object-cover object-right overflow-hidden mask-b-from-50% mask-b-to-100% mask-t-from-90% mask-t-to-100% z-0'
            src={aerialYoga}
          />

          {/* Small screens */}
          <img
            alt='mulher praticando aerial yoga'
            className='lg:hidden absolute h-full w-full object-cover object-center overflow-hidden mask-b-from-50% mask-b-to-100% mask-t-from-90% mask-t-to-100% z-0'
            src={aerialYogaMobile}
          />
        </div>

        <div className='absolute top-1/5 sm:top-3/8 left-0 lg:left-[1vw] xl:left-[10vw] p-10 pt-20'>
          {/* <div className='bg-tanigma-sky/70 rounded-lg p-2'> */}
          <h1 className='max-w-5xl font-tanigma-variation font-bold text-5xl sm:text-9xl text-tanigma-aqua text-center'>
            Encontra o teu equilíbrio e voa com leveza
          </h1>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
