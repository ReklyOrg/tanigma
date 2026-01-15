import { ClassOrSessionsCard } from '@/components/classes-and-sessions/class-or-session-card';
import { CLASSES_AND_SESSIONS } from '@/constants/classes-and-sessions';
import { TanigmaSectionTitle } from '@/ui/tanigma-section-title';

const ClassesAndSessions = () => (
  <section className='md:rounded-tanigma-sm bg-tanigma-bg-page md:shadow md:shadow-tanigma-border-light'>
    <div className='p-10 pb-4 sm:pb-10 flex flex-col gap-10'>
      <div className='flex flex-row items-center justify-center'>
        <TanigmaSectionTitle
          className='text-center'
          label='Aulas e sessões'
        />
      </div>

      {/* <div className='container mx-auto'> */}
      <div className='columns-1 lg:columns-2 xl:columns-3 gap-10 [column-fill:balance] box-border mx-auto before:box-inherit after:box-inherit'>
        {CLASSES_AND_SESSIONS.map((classOrSession) => (
          <ClassOrSessionsCard
            classOrSession={classOrSession}
            key={classOrSession.title}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  </section>
);

export default ClassesAndSessions;
