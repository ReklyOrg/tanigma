import aerialPilates from '@/assets/aerial-pilates.jpg';
import aerialYoga from '@/assets/aerial-yoga-2.jpg';
import aerialYogaFamily from '@/assets/aerial-yoga-family.jpg';
import aerialYogaKids from '@/assets/aerial-yoga-kids.jpg';
import aerialYogaTeens from '@/assets/aerial-yoga-teens.jpg';
import numerology from '@/assets/numerology.jpg';
import pilates from '@/assets/pilates.jpg';
import reiki from '@/assets/reiki.jpg';
import relaxSession from '@/assets/relax-session.jpg';

export interface ClassOrSessionSubPrice {
  name: string;
  value: number;
}

export interface ClassOrSessionPrice {
  name: string;
  value: number | Array<ClassOrSessionSubPrice>;
}

export interface ClassOrSessionSchedule {
  name: string;
  hour: string;
}

export interface ClassOrSession {
  image: string;
  title: string;
  description: Array<string>;
  individualPrices?: Array<ClassOrSessionPrice>;
  otherPrices?: Array<ClassOrSessionPrice>;
  groupPrices?: Array<ClassOrSessionPrice>;
  schedule?: Array<ClassOrSessionSchedule>;
  type: 'class' | 'session';
  imageClasseName?: string;
}

export const CLASSES_AND_SESSIONS: Array<ClassOrSession> = [
  {
    description: [
      'Aerial Yoga Kids é uma atividade divertida e segura que combina o yoga com o uso de tecido suspenso. De forma lúdica, as crianças desenvolvem coordenação, força, equilíbrio e flexibilidade, ao mesmo tempo que estimulam a concentração, a criatividade e a autoconfiança. As aulas respeitam o ritmo de cada criança e promovem o bem-estar físico e emocional através do movimento e da brincadeira.',
    ],
    groupPrices: [
      {
        name: 'Mensalidade',
        value: [
          {
            name: '1 vez por semana',
            value: 30,
          },
        ],
      },
      {
        name: 'Aula',
        value: 10,
      },
      {
        name: 'Pack de 4 aulas',
        value: 35,
      },
    ],
    image: aerialYogaKids,
    schedule: [
      {
        hour: '18:00',
        name: 'Quarta-feira',
      },
      {
        hour: '17:00',
        name: 'Sexta-feira',
      },
    ],
    title: 'Aerial Yoga (Crianças)',
    type: 'class',
  },
  {
    description: [
      'Aerial Yoga Teens é uma atividade dinâmica e segura, pensada especialmente para adolescentes, que combina o yoga com o uso do tecido suspenso. As aulas ajudam a desenvolver força, flexibilidade, equilíbrio e consciência corporal, ao mesmo tempo que melhoram a postura e a coordenação.',
      'Para além dos benefícios físicos, o Aerial Yoga Teens promove o foco, a autoconfiança e a gestão do stress, contribuindo para o bem-estar emocional nesta fase de crescimento. As práticas respeitam o ritmo de cada adolescente, num ambiente motivador, divertido e acolhedor.',
    ],
    groupPrices: [
      {
        name: 'Mensalidade',
        value: [
          {
            name: '1 vez por semana',
            value: 30,
          },
        ],
      },
      {
        name: 'Aula',
        value: 10,
      },
      {
        name: 'Pack de 4 aulas',
        value: 35,
      },
    ],
    image: aerialYogaTeens,
    imageClasseName: 'object-top',
    schedule: [
      {
        hour: '15:30',
        name: 'Sexta-feira',
      },
    ],
    title: 'Aerial Yoga (Adolescentes)',
    type: 'class',
  },
  {
    description: [
      'Aerial Yoga é uma prática completa que combina o yoga tradicional com o uso do tecido suspenso, permitindo explorar as posturas com mais leveza, apoio e profundidade. As aulas ajudam a melhorar a força, a flexibilidade, o equilíbrio e a mobilidade, ao mesmo tempo que aliviam tensões e melhoram a postura.',
      'Para além dos benefícios físicos, o Aerial Yoga promove o relaxamento, a redução do stress e uma maior consciência corporal, proporcionando uma experiência revitalizante para o corpo e a mente. A prática adapta-se a diferentes níveis, respeitando o ritmo e as necessidades de cada aluno.',
    ],
    groupPrices: [
      {
        name: 'Mensalidade',
        value: [
          {
            name: '1 vez por semana',
            value: 35,
          },
          {
            name: '2 vez por semana',
            value: 45,
          },
          {
            name: '3 vez por semana',
            value: 50,
          },
        ],
      },
      {
        name: 'Aula',
        value: 12.5,
      },
      {
        name: 'Pack de 4 aulas',
        value: 40,
      },
    ],
    image: aerialYoga,
    individualPrices: [
      {
        name: 'Aula',
        value: 20,
      },
      {
        name: 'Pack de 4 aulas',
        value: 60,
      },
    ],
    schedule: [
      {
        hour: '19:00',
        name: 'Terça-feira',
      },
      {
        hour: '19:00',
        name: 'Quinta-feira',
      },
      {
        hour: '10:00',
        name: 'Sábado',
      },
    ],
    title: 'Aerial Yoga (Adultos)',
    type: 'class',
  },
  {
    description: [
      'Aerial Yoga a Pares é uma prática divertida e envolvente que permite partilhar a experiência do yoga no tecido suspenso com outra pessoa. As aulas combinam movimentos sincronizados, posturas assistidas e momentos de apoio mútuo, promovendo confiança, comunicação e ligação.',
      'Esta modalidade ajuda a desenvolver força, equilíbrio, coordenação e consciência corporal, ao mesmo tempo que incentiva a cooperação e o espírito de equipa. Adaptadas ao nível de cada dupla, as aulas proporcionam uma experiência segura, leve e enriquecedora, ideal para amigos, familiares ou casais que desejam praticar juntos.',
    ],
    image: aerialYogaFamily,
    otherPrices: [
      {
        name: 'Par (2 pessoas)',
        value: 15,
      },
    ],
    title: 'Aerial Yoga Family',
    type: 'class',
  },
  {
    description: [
      'Aerial Pilates é uma prática inovadora que combina os princípios do Pilates com o uso do tecido suspenso, proporcionando maior apoio, controlo e fluidez nos movimentos. As aulas focam-se no fortalecimento do core, na melhoria da postura, da flexibilidade e da estabilidade, com menor impacto nas articulações.',
      'Esta modalidade promove consciência corporal, precisão e equilíbrio, ao mesmo tempo que ajuda a aliviar tensões e a aumentar a mobilidade. O Aerial Pilates adapta-se a diferentes níveis de prática, respeitando o ritmo e as necessidades de cada pessoa, numa abordagem segura e eficaz.',
    ],
    groupPrices: [
      {
        name: 'Mensalidade',
        value: [
          {
            name: '1 vez por semana',
            value: 35,
          },
          {
            name: '2 vez por semana',
            value: 45,
          },
          {
            name: '3 vez por semana',
            value: 50,
          },
        ],
      },
      {
        name: 'Aula',
        value: 12.5,
      },
      {
        name: 'Pack de 4 aulas',
        value: 40,
      },
    ],
    image: aerialPilates,
    individualPrices: [
      {
        name: 'Aula',
        value: 20,
      },
      {
        name: 'Pack de 4 aulas',
        value: 60,
      },
    ],
    schedule: [
      {
        hour: '18:20',
        name: 'Quinta-feira',
      },
    ],
    title: 'Aerial Pilates',
    type: 'class',
  },
  {
    description: [
      'Pilates é uma prática de exercício físico que se centra no fortalecimento do core, na melhoria da postura, da flexibilidade e da estabilidade corporal. Através de movimentos controlados e conscientes, as aulas ajudam a aumentar a força, a mobilidade e o alinhamento do corpo, com baixo impacto nas articulações.',
      'Para além dos benefícios físicos, o Pilates promove uma maior consciência corporal, equilíbrio e controlo da respiração, contribuindo para o bem-estar geral e para a prevenção de lesões. A prática adapta-se a diferentes níveis e necessidades, respeitando o ritmo de cada praticante.',
    ],
    image: pilates,
    otherPrices: [
      {
        name: 'Mensalidade',
        value: [
          {
            name: '1 vez por semana',
            value: 20,
          },
        ],
      },
      {
        name: 'Aula',
        value: 6,
      },
    ],
    schedule: [
      {
        hour: '20:00',
        name: 'Terça-feira',
      },
    ],
    title: 'Pilates',
    type: 'class',
  },
  {
    description: [
      'Uma sessão de relaxamento no tecido de Aerial Yoga é uma experiência profunda de descanso e bem-estar, totalmente adaptada a cada pessoa. Envolvido pelo tecido suspenso, o corpo é sustentado de forma confortável, permitindo libertar tensões físicas e mentais sem esforço.',
      'A sessão pode incluir momentos de meditação guiada, respiração consciente, utilização de óleos essenciais e massagens suaves, conforme as necessidades e preferências de cada participante. O balanço subtil do tecido ajuda a acalmar o sistema nervoso, promovendo relaxamento profundo, equilíbrio emocional e uma sensação de leveza e reconexão interior.',
    ],
    image: relaxSession,
    otherPrices: [
      {
        name: '30 minutos',
        value: 15,
      },
      {
        name: '45 minutos',
        value: 20,
      },
    ],
    title: 'Relaxamento no tecido',
    type: 'class',
  },
  {
    description: [
      'Reiki é uma terapia energética natural que promove equilíbrio, relaxamento e bem-estar físico, mental e emocional. Através da imposição suave das mãos, a energia vital é canalizada para apoiar o processo natural de harmonização do corpo e da mente.',
      'Cada sessão é adaptada às necessidades de cada pessoa, ajudando a aliviar o stress, reduzir tensões, promover clareza mental e um profundo estado de relaxamento. O Reiki proporciona um momento de pausa e autocuidado, favorecendo a reconexão interior e o equilíbrio energético.',
    ],
    image: reiki,
    otherPrices: [
      {
        name: 'Sessão',
        value: 30,
      },
    ],
    title: 'Reiki',
    type: 'session',
  },
  {
    description: [
      'Numerologia é uma ferramenta de autoconhecimento que utiliza os números associados à data de nascimento e ao nome para compreender padrões, tendências de vida, desafios, talentos e ciclos pessoais. Através da leitura do mapa numerológico, é possível obter maior clareza sobre o caminho pessoal, emocional e espiritual.',
      'Importa salientar que a numerologia não apresenta certezas absolutas, mas sim tendências e orientações, funcionando como um apoio à reflexão e à tomada de decisões mais conscientes. Cada sessão é personalizada e convida ao autoconhecimento, ao alinhamento interior e à compreensão das diferentes fases da vida.',
    ],
    image: numerology,
    otherPrices: [
      {
        name: 'Mapa numerológico',
        value: 40,
      },
      {
        name: 'Mapa numerológico + sessão',
        value: 70,
      },
    ],
    title: 'Numerologia',
    type: 'session',
  },
] as const;
