export interface PhilosophyCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    number: '01',
    title: 'Personalized',
    subtitle: 'Tailored To Your Unique Needs',
    description:
      'Every individual has different goals, food preferences, daily routines, and fitness needs. Your nutrition and training approach is personalized around what works best for you.',
  },

  {
    number: '02',
    title: 'Sustainable',
    subtitle: 'Lifestyle Habits That Last A Lifetime',
    description:
      'Focus on realistic, balanced nutrition, home-cooked meals, and progressive fitness habits that can be followed consistently without extreme diets or unnecessary restrictions.',
  },

  {
    number: '03',
    title: 'Consistent',
    subtitle: 'Meaningful Progress Through Accountability',
    description:
      'Consistency helps create lasting change. Regular guidance, progress tracking, and ongoing support help you build healthier habits and stay committed to your goals.',
  },
];