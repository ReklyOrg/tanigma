import { TanigmaSectionTitle } from '@/ui/tanigma-section-title';

const IMAGES = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
];

export const GallerySection = () => (
  <section className='md:rounded-tanigma-sm bg-tanigma-bg-section flex flex-col gap-10 p-10 pb-4 sm:pb-10 md:shadow md:shadow-tanigma-border-light'>
    <div className='flex flex-row items-center justify-center'>
      <TanigmaSectionTitle
        className='text-center'
        label='Galeria'
      />
    </div>

    <div className='columns-2 lg:columns-3 xl:columns-4 gap-10 [column-fill:balance] box-border mx-auto before:box-inherit after:box-inherit'>
      {IMAGES.map((image) => (
        <div
          className='mb-10 break-inside-avoid'
          key={image}
        >
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src={image}
          />
        </div>
      ))}
    </div>
  </section>
);
