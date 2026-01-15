import { formatToEuro } from '@/utils/utilities';

import type { ClassOrServicePrice } from '@/constants/classes-and-services';

interface ClassOrServicePriceSectionProps {
  label: string;
  prices: Array<ClassOrServicePrice>;
}

const ClassOrServicePriceSection = ({ label, prices }: ClassOrServicePriceSectionProps) => (
  <div>
    <h3 className='font-tanigma-titles text-lg text-tanigma-text-primary pb-1'>{label}:</h3>

    <ul className='list-disc pl-5 marker:text-tanigma-text-muted'>
      {prices.map((price) => (
        <li
          className='font-tanigma-text text-tanigma-text-secondary'
          key={price.name}
        >
          {Array.isArray(price.value) ? (
            <>
              {price.name}:
              <ul className='list-[circle] pl-5 marker:text-tanigma-text-muted'>
                {price.value.map((subPrice) => (
                  <li
                    className='font-tanigma-text text-tanigma-text-secondary'
                    key={subPrice.name}
                  >
                    {subPrice.name}: <span className='font-medium'>{formatToEuro(subPrice.value)}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              {price.name}: <span className='font-medium'>{formatToEuro(price.value)}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ClassOrServicePriceSection;
