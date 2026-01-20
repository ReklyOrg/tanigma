import { useMemo } from 'react';

import {
  TANIGMA_BOOK_CLASS_WHATSAPP_MESSAGE,
  TANIGMA_BOOK_SESSION_WHATSAPP_MESSAGE,
  TANIGMA_PHONE_NUMBER,
  TANIGMA_WHATSAPP_MESSAGE,
} from '@/constants/constants';
import TanigmaButton from '@/ui/tanigma-button';

import type { TanigmaButtonProps } from '@/ui/tanigma-button';

type ScheduleClassButtonBaseProps = Partial<TanigmaButtonProps>;

type GenericContext = { context: 'generic' };
type ClassContext = { context: 'class'; name: string };
type SessionContext = { context: 'session'; name: string };

type ScheduleClassButtonProps =
  | (ScheduleClassButtonBaseProps & GenericContext)
  | (ScheduleClassButtonBaseProps & ClassContext)
  | (ScheduleClassButtonBaseProps & SessionContext);

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

      case 'session': {
        message = `${TANIGMA_BOOK_SESSION_WHATSAPP_MESSAGE} ${rest.name.toLocaleLowerCase()}.`;
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
      aria-label='Link para o whatsapp do estúdio'
      href={`https://wa.me/${TANIGMA_PHONE_NUMBER}?text=${encodedMessage}`}
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
