import type { ClassOrService } from '@/constants/classes-and-services';

interface ClassOrServiceCardProps {
  classOrService: ClassOrService;
}

export const ClassOrServiceCard = ({ classOrService }: ClassOrServiceCardProps) => (
  <div className='bg-tanigma-bg-section rounded-tanigma-sm border border-tanigma-border-light overflow-hidden'>
    <div>
      <img
        alt={`Imagem de ${classOrService.title}`}
        className='h-60 w-full object-cover'
        src={classOrService.image}
      />
    </div>

    <div className='p-3 pt-4 flex flex-col gap-2'>
      <h2 className='font-tanigma-titles text-xl text-tanigma-text-primary'>{classOrService.title}</h2>

      <p className='font-tanigma-text text-tanigma-text-secondary'>{classOrService.description}</p>

      <h3 className='font-tanigma-titles text-lg text-tanigma-text-primary'>Valores das aulas em grupo:</h3>

      <ul>
        <li className='font-tanigma-text text-tanigma-text-secondary'>Mensalidade (1 vez por semana): 30€</li>
        <li className='font-tanigma-text text-tanigma-text-secondary'>Aula: 10€</li>
        <li className='font-tanigma-text text-tanigma-text-secondary'>Pack de 4 aulas: 35€</li>
      </ul>

      <h3 className='font-tanigma-titles text-lg text-tanigma-text-primary'>Horários:</h3>

      <ul>
        <li className='font-tanigma-text text-tanigma-text-secondary'>Quarta-feira: 18:00</li>
        <li className='font-tanigma-text text-tanigma-text-secondary'>Sexta-feira: 17:00</li>
      </ul>
    </div>
  </div>
);
