import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TanigmaButtonProps {
  label: string;
  className?: Element['className'];
  variant?: 'primary' | 'secondary' | 'accent';
}

const TanigmaButton = ({ className, label, variant = 'primary' }: TanigmaButtonProps) => {
  const variantClasses = useMemo(() => {
    switch (variant) {
      case 'accent': {
        return 'bg-tanigma-accent hover:bg-tanigma-accent-hover active:bg-tanigma-accent-hover text-tanigma-on-accent';
      }

      case 'primary': {
        return 'bg-tanigma-primary hover:bg-tanigma-primary-hover active:bg-tanigma-primary-hover text-tanigma-on-primary';
      }

      case 'secondary': {
        return 'bg-tanigma-secondary hover:bg-tanigma-secondary-hover active:bg-tanigma-secondary-hover text-tanigma-on-primary';
      }

      default: {
        return '';
      }
    }
  }, [variant]);

  return (
    <div>
      <button className={twMerge('cursor-pointer px-6 py-3 rounded-tanigma-sm', variantClasses, className)}>
        {label}
      </button>
    </div>
  );
};

export default TanigmaButton;
