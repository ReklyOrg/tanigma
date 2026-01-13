import arialYogaKids from '@/assets/aerial-yoga-kids.jpg';

export interface ClassOrService {
  image: string;
  title: string;
  description: string;
}

export const CLASSES_AND_SERVICES: Array<ClassOrService> = [
  {
    description:
      'Aerial Yoga Kids é uma atividade divertida e segura que combina o yoga com o uso de tecido suspenso. De forma lúdica, as crianças desenvolvem coordenação, força, equilíbrio e flexibilidade, ao mesmo tempo que estimulam a concentração, a criatividade e a autoconfiança. As aulas respeitam o ritmo de cada criança e promovem o bem-estar físico e emocional através do movimento e da brincadeira.',
    image: arialYogaKids,
    title: 'Aerial Yoga Kids',
  },
  {
    description: '',
    image: '',
    title: 'Aerial Yoga Teens',
  },
  {
    description: '',
    image: '',
    title: 'Aerial Yoga',
  },
  {
    description: '',
    image: '',
    title: 'Aerial Yoga Family',
  },
  {
    description: '',
    image: '',
    title: 'Aerial Pilates',
  },
  {
    description: '',
    image: '',
    title: 'Pilates',
  },
  {
    description: '',
    image: '',
    title: 'Relaxamento no tecido',
  },
  {
    description: '',
    image: '',
    title: 'Reiki',
  },
  {
    description: '',
    image: '',
    title: 'Numerologia',
  },
] as const;
