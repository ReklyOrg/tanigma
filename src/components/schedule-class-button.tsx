import { useMemo } from 'react';

import { TANIGMA_WHATSAPP_MESSAGE } from '@/constants/constants';
import TanigmaButton from '@/ui/tanigma-button';

interface ScheduleClassButtonProps {
  className?: Element['className'];
}

const ScheduleClassButton = ({ className }: ScheduleClassButtonProps) => {
  const encodedMessage = useMemo(() => encodeURIComponent(TANIGMA_WHATSAPP_MESSAGE), []);

  return (
    <a
      href={`https://wa.me/351911928526?text=${encodedMessage}`}
      rel='noreferrer'
      target='_blank'
    >
      <TanigmaButton
        className={className}
        label='Agendar uma aula'
        variant='accent'
      />
    </a>
  );
};

export default ScheduleClassButton;
