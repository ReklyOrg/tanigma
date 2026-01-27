import { twMerge } from 'tailwind-merge';

import image1 from '@/assets/gallery/1.jpeg';
import image2 from '@/assets/gallery/2.jpeg';
import image3 from '@/assets/gallery/3.jpeg';
import image4 from '@/assets/gallery/4.jpeg';
import image5 from '@/assets/gallery/5.jpeg';
import image6 from '@/assets/gallery/6.jpeg';
import image7 from '@/assets/gallery/7.jpeg';
import image8 from '@/assets/gallery/8.jpeg';
import AnimatedContent from '@/ui/animated-content';
import { TanigmaSectionTitle } from '@/ui/tanigma-section-title';

interface Images {
  src: string;
  className?: Element['className'];
}
const IMAGES2: Array<Array<Images>> = [
  [{ src: image1 }, { src: image2 }],
  [{ src: image3 }, { src: image4 }],
  [{ src: image5 }, { src: image6 }],
  [{ src: image7 }, { src: image8 }],
  // { className: 'h-full', src: image9 },
];

export const GallerySection = () => (
  <section className='md:rounded-tanigma-sm bg-tanigma-bg-section flex flex-col gap-10 p-10 pb-4 sm:pb-10 md:shadow md:shadow-tanigma-border-light'>
    <div className='flex flex-row items-center justify-center'>
      <TanigmaSectionTitle
        className='text-center'
        label='Galeria'
      />
    </div>

    <div className='grid grid-cols-2 2xl:grid-cols-4 gap-4'>
      {IMAGES2.map((group, groupIndex) => (
        <div
          className='grid gap-4 h-full min-h-0'
          key={groupIndex}
        >
          {group.map((image, imageIndex) => (
            <AnimatedContent key={`${groupIndex}-${imageIndex}`}>
              <img
                alt={`Imagem da galeria ${imageIndex + 1}`}
                className={twMerge('h-full w-full rounded-tanigma-sm object-cover', image.className)}
                loading='lazy'
                src={image.src}
              />
            </AnimatedContent>
          ))}
        </div>
      ))}
    </div>
  </section>
);
