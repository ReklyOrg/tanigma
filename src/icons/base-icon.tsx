import { twMerge } from 'tailwind-merge';

import type { PropsWithChildren, SVGProps } from 'react';

export interface BaseIconProps<T extends SVGSVGElement> extends SVGProps<T>, PropsWithChildren {}

const BaseIcon = <T extends SVGSVGElement>({ children, className, ...rest }: BaseIconProps<T>) => (
  <svg
    className={twMerge('size-5', className)}
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    {children}
  </svg>
);

export default BaseIcon;
