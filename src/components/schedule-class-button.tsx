import TanigmaButton from '@/ui/tanigma-button';

interface ScheduleClassButtonProps {
  className?: Element['className'];
}

const ScheduleClassButton = ({ className }: ScheduleClassButtonProps) => (
  <TanigmaButton
    className={className}
    label='Agendar uma aula'
    variant='accent'
  />
);

export default ScheduleClassButton;
