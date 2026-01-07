import aerialYoga from '@/assets/close-fabrics.jpeg';
import ScheduleClassButton from '@/components/schedule-class-button';

const HeroSectionVariant = () => (
  <div className='h-[calc(100vh-168px)] lg:h-[calc(100vh-240px)] w-full'>
    <div
      className='absolute inset-0 bg-no-repeat bg-cover overflow-hidden bg-center z-0 mask-b-from-50% mask-b-to-100%  max-lg:mask-t-from-70% max-lg:mask-t-to-100%'
      style={{
        backgroundImage: `url(${aerialYoga})`,
      }}
    />

    <div className='absolute top-6/10 lg:top-1/2 left-1/2 -translate-1/2'>
      <div className='flex flex-col gap-14 items-center'>
        <h1 className='w-screen m-0 lg:max-w-5xl font-tanigma-variation font-bold text-5xl md:text-7xl lg:text-9xl text-tanigma-bg-card text-center drop-shadow-sm'>
          Encontra o teu equilíbrio e voa com leveza
        </h1>

        <ScheduleClassButton />
      </div>
    </div>
  </div>
);

export default HeroSectionVariant;
