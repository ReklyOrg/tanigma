import studioImage from '@/assets/aerial-pilates-2.jpeg';
import WhoAreWeParagraph from '@/components/who-are-we/who-are-we-paragraph';
import AnimatedContent from '@/ui/animated-content';
import { TanigmaSectionTitle } from '@/ui/tanigma-section-title';

const WhoAreWe = () => (
  <AnimatedContent>
    <section className='md:rounded-tanigma-sm bg-tanigma-bg-soft md:bg-tanigma-bg-card md:shadow md:shadow-tanigma-border-light'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='p-10 flex flex-col'>
          <div className='flex flex-col justify-evenly h-full gap-10'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row items-center pb-10'>
                <TanigmaSectionTitle
                  className='text-center'
                  label='O estúdio'
                />
              </div>

              <WhoAreWeParagraph>
                Este estúdio nasce com a intenção de criar um espaço de leveza, equilíbrio e bem-estar para todas as
                idades. Um lugar onde o movimento consciente, o cuidado e a presença se encontram.
              </WhoAreWeParagraph>

              <WhoAreWeParagraph>
                Através do aerial yoga, aerial pilates, reiki entre outras aulas e sessões, convidamos cada pessoa a
                escutar o seu corpo, a respeitar o seu ritmo e a viver momentos de conexão, confiança e liberdade. Aqui,
                o exercício vai além do físico: é também uma prática de consciência e autocuidado.
              </WhoAreWeParagraph>

              <WhoAreWeParagraph>
                Cada aula é pensada para acolher diferentes corpos e necessidades, promovendo força, fluidez e
                equilíbrio.
              </WhoAreWeParagraph>

              <WhoAreWeParagraph>Um espaço para respirar, sentir e simplesmente estar.</WhoAreWeParagraph>
            </div>

            <div className='text-right'>
              <h2 className='font-tanigma-variation text-tanigma-text-secondary text-4xl md:text-6xl'>
                Eleva o corpo. Liberta a mente.
              </h2>
            </div>
          </div>
        </div>

        <div className='hidden md:block md:rounded-tanigma-sm overflow-hidden'>
          <img
            alt='Imagem do estúdio'
            className='h-full w-full object-cover max-lg:mask-t-from-60% lg:mask-l-from-60%'
            src={studioImage}
          />
        </div>
      </div>
    </section>
  </AnimatedContent>
);

export default WhoAreWe;
