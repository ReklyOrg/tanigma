import type { PropsWithChildren } from 'react';

const WhoAreWeParagraph = ({ children }: PropsWithChildren) => (
  <p className='font-tanigma-text text-tanigma-text-secondary text-xl 2xl:text-2xl'>{children}</p>
);

export default WhoAreWeParagraph;
