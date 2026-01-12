import BaseIcon from '@/icons/base-icon';

import type { BaseIconProps } from '@/icons/base-icon';

const LocationIcon = <T extends SVGSVGElement>(props: BaseIconProps<T>) => (
  <BaseIcon {...props}>
    <path
      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </BaseIcon>
);

export default LocationIcon;
