import { twMerge } from 'tailwind-merge';

import ClassOrSessionPriceSection from '@/components/classes-and-sessions/class-or-session-price-section';
import ClassOrSessionScheduleSection from '@/components/classes-and-sessions/class-or-session-schedule-section';
import ScheduleClassButton from '@/components/schedule-class-button';
import AnimatedContent from '@/ui/animated-content';

import type { ClassOrSession } from '@/constants/classes-and-sessions';

interface ClassOrSessionCardProps {
  classOrSession: ClassOrSession;
}

export const ClassOrSessionsCard = ({ classOrSession }: ClassOrSessionCardProps) => (
  <AnimatedContent>
    <div className='mb-10 break-inside-avoid bg-tanigma-bg-section rounded-tanigma-sm border border-tanigma-border-light overflow-hidden'>
      <div>
        <img
          alt={`Imagem de ${classOrSession.title}`}
          className={twMerge('h-full max-h-115 w-full object-cover mask-b-from-40%', classOrSession.imageClasseName)}
          loading='lazy'
          src={classOrSession.image}
        />
      </div>

      <div className='p-3 flex flex-col gap-3'>
        <div>
          <h2 className='font-tanigma-titles text-xl text-tanigma-text-primary pb-1'>{classOrSession.title}</h2>

          <div className='flex flex-col gap-1'>
            {classOrSession.description.map((paragraph, index) => (
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
          {classOrSession.groupPrices && (
            <ClassOrSessionPriceSection
              label='Aulas em grupo'
              prices={classOrSession.groupPrices}
            />
          )}

          {classOrSession.individualPrices && classOrSession.groupPrices && (
            <div className='max-md:hidden self-stretch rounded-tanigma-sm bg-tanigma-border-light p-0.5 mt-2' />
          )}

          {classOrSession.individualPrices && (
            <ClassOrSessionPriceSection
              label='Aulas individuais'
              prices={classOrSession.individualPrices}
            />
          )}

          {classOrSession.otherPrices && (
            <ClassOrSessionPriceSection
              label={classOrSession.type === 'class' ? 'Aulas' : 'Valores'}
              prices={classOrSession.otherPrices}
            />
          )}
        </div>

        {classOrSession.schedule && <ClassOrSessionScheduleSection schedules={classOrSession.schedule} />}

        <div className='flex flex-row justify-start'>
          <ScheduleClassButton
            context={classOrSession.type}
            label='Agendar'
            name={classOrSession.title}
          />
        </div>
      </div>
    </div>
  </AnimatedContent>
);
