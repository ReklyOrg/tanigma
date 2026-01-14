// import { classOrServiceCard } from '@/components/classes-and-services/class-or-service-card';
// import { CLASSES_AND_SERVICES } from '@/constants/classes-and-services';
import { ClassOrServiceCard } from '@/components/classes-and-services/class-or-service-card';
import { CLASSES_AND_SERVICES } from '@/constants/classes-and-services';
import { TanigmaSectionTitle } from '@/ui/tanigma-section-title';

const classesAndServices = () => (
  <section className='md:rounded-tanigma-sm bg-tanigma-bg-page md:shadow md:shadow-tanigma-border-light'>
    <div className='p-10 pb-4 sm:pb-10 flex flex-col gap-10'>
      <div className='flex flex-row items-center justify-center'>
        <TanigmaSectionTitle
          className='text-center'
          label='Aulas e serviços'
        />
      </div>

      {/* <div className='container mx-auto'> */}
      <div className='columns-1 lg:columns-2 xl:columns-3 gap-10 [column-fill:balance] box-border mx-auto before:box-inherit after:box-inherit'>
        {CLASSES_AND_SERVICES.map((classOrService) => (
          <ClassOrServiceCard
            classOrService={classOrService}
            key={classOrService.title}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  </section>
);

export default classesAndServices;
