import type { ClassOrServiceSchedule } from '@/constants/classes-and-services';

interface ClassOrServiceScheduleSectionProps {
  schedules: Array<ClassOrServiceSchedule>;
}

const ClassOrServiceScheduleSection = ({ schedules }: ClassOrServiceScheduleSectionProps) => (
  <div>
    <h3 className='font-tanigma-titles text-lg text-tanigma-text-primary pb-1'>Horários:</h3>

    <ul className='list-disc pl-5 marker:text-tanigma-text-muted'>
      {schedules.map((price) => (
        <li
          className='font-tanigma-text text-tanigma-text-secondary'
          key={price.name}
        >
          {price.name}: <span className='font-medium'>{price.hour}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ClassOrServiceScheduleSection;
