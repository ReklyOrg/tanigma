import { useMemo } from 'react';

import {
  TANIGMA_BOOK_CLASS_WHATSAPP_MESSAGE,
  TANIGMA_BOOK_SERVICE_WHATSAPP_MESSAGE,
  TANIGMA_WHATSAPP_MESSAGE,
} from '@/constants/constants';
import TanigmaButton from '@/ui/tanigma-button';

import type { TanigmaButtonProps } from '@/ui/tanigma-button';

type ScheduleClassButtonBaseProps = Partial<TanigmaButtonProps>;

type GenericContext = { context: 'generic' };
type ClassContext = { context: 'class'; name: string };
type ServiceContext = { context: 'service'; name: string };

type ScheduleClassButtonProps =
  | (ScheduleClassButtonBaseProps & GenericContext)
  | (ScheduleClassButtonBaseProps & ClassContext)
  | (ScheduleClassButtonBaseProps & ServiceContext);

const ScheduleClassButton = ({
  className,
  variant = 'accent',
  label = 'Agendar uma aula',
  ...rest
}: ScheduleClassButtonProps) => {
  const encodedMessage = useMemo(() => {
    let message = '';

    switch (rest.context) {
      case 'class': {
        message = `${TANIGMA_BOOK_CLASS_WHATSAPP_MESSAGE} ${rest.name.toLocaleLowerCase()}.`;
        break;
      }

      case 'generic': {
        message = TANIGMA_WHATSAPP_MESSAGE;
        break;
      }

      case 'service': {
        message = `${TANIGMA_BOOK_SERVICE_WHATSAPP_MESSAGE} ${rest.name.toLocaleLowerCase()}.`;
        break;
      }

      default: {
        message = TANIGMA_WHATSAPP_MESSAGE;
        break;
      }
    }

    return encodeURIComponent(message);
  }, [rest]);

  return (
    <a
      href={`https://wa.me/351911928526?text=${encodedMessage}`}
      rel='noreferrer'
      target='_blank'
    >
      <TanigmaButton
        className={className}
        label={label}
        variant={variant}
      />
    </a>
  );
};

export default ScheduleClassButton;
