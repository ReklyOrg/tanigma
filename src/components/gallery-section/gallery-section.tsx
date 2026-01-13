import { TanigmaSectionTitle } from '@/ui/tanigma-section-title';

export const GallerySection = () => (
  <section className='md:rounded-tanigma-sm bg-tanigma-bg-section flex flex-col gap-10 p-10 pb-4 sm:pb-10 md:shadow md:shadow-tanigma-border-light'>
    <div className='flex flex-row items-center justify-center'>
      <TanigmaSectionTitle
        className='text-center'
        label='Galeria'
      />
    </div>

    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='grid gap-4'>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
          />
        </div>
      </div>
      <div className='grid gap-4'>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
          />
        </div>
      </div>
      <div className='grid gap-4'>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
          />
        </div>
      </div>
      <div className='grid gap-4'>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            className='h-auto max-w-full rounded-tanigma-sm'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
          />
        </div>
      </div>
    </div>
  </section>
);
