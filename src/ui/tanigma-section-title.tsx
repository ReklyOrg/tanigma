import { twMerge } from 'tailwind-merge';

interface TanigmaSectionTitleProps {
  label: string;
  className?: Element['className'];
}

export const TanigmaSectionTitle = ({ className, label }: TanigmaSectionTitleProps) => (
  <h1
    className={twMerge(
      'text-3xl font-tanigma-titles text-tanigma-text-secondary  px-2 border-b-2 border-tanigma-border-default rounded-tanigma-sm',
      className,
    )}
  >
    {label}
  </h1>
);
