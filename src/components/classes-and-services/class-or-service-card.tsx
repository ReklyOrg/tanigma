import { twMerge } from 'tailwind-merge';

import ClassOrServicePriceSection from '@/components/classes-and-services/class-or-service-price-section';
import ClassOrServiceScheduleSection from '@/components/classes-and-services/class-or-service-schedule-section';
import ScheduleClassButton from '@/components/schedule-class-button';

import type { ClassOrService } from '@/constants/classes-and-services';

interface ClassOrServiceCardProps {
  classOrService: ClassOrService;
}

export const ClassOrServiceCard = ({ classOrService }: ClassOrServiceCardProps) => (
  <div className='mb-10 break-inside-avoid bg-tanigma-bg-section rounded-tanigma-sm border border-tanigma-border-light overflow-hidden'>
    <div>
      <img
        alt={`Imagem de ${classOrService.title}`}
        className={twMerge('h-full max-h-115 w-full object-cover mask-b-from-40%', classOrService.imageClasseName)}
        loading='lazy'
        src={classOrService.image}
      />
    </div>

    <div className='p-3 flex flex-col gap-3'>
      <div>
        <h2 className='font-tanigma-titles text-xl text-tanigma-text-primary pb-1'>{classOrService.title}</h2>

        <div className='flex flex-col gap-1'>
          {classOrService.description.map((paragraph, index) => (
            <p
              className='font-tanigma-text text-tanigma-text-secondary'
              key={index}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className='w-full h-full flex flex-col md:flex-row justify-start gap-4'>
        {classOrService.groupPrices && (
          <ClassOrServicePriceSection
            label='Aulas em grupo'
            prices={classOrService.groupPrices}
          />
        )}

        {classOrService.individualPrices && classOrService.groupPrices && (
          <div className='max-md:hidden self-stretch rounded-tanigma-sm bg-tanigma-border-light p-0.5 mt-2' />
        )}

        {classOrService.individualPrices && (
          <ClassOrServicePriceSection
            label='Aulas individuais'
            prices={classOrService.individualPrices}
          />
        )}

        {classOrService.otherPrices && (
          <ClassOrServicePriceSection
            label={classOrService.type === 'class' ? 'Aulas' : 'Valores'}
            prices={classOrService.otherPrices}
          />
        )}
      </div>

      {classOrService.schedule && <ClassOrServiceScheduleSection schedules={classOrService.schedule} />}

      <div className='flex flex-row justify-start'>
        <ScheduleClassButton
          context={classOrService.type}
          label='Agendar'
          name={classOrService.title}
        />
      </div>
    </div>
  </div>
);
