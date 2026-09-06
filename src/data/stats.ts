export interface StatItem {
  id: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  isTextOnly?: boolean;
  textValue?: string;
}

export const STATS: StatItem[] = [
  {
    id: 'transformations',
    numericValue: 10000,
    suffix: '+',
    label: 'Transformations',
    sublabel: 'Lives empowered to health',
  },
  {
    id: 'experience',
    numericValue: 12,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'Proven coaching excellence',
  },
  {
    id: 'guidance',
    numericValue: 100,
    suffix: '%',
    label: 'Personalized Guidance',
    sublabel: 'Tailored nutrition & fitness plans',
  },
  {
    id: 'location',
    numericValue: 0,
    suffix: '',
    label: 'Based Coaching',
    sublabel: 'Local And Global Coaching Both Coaching Available 95+ Countries',
    isTextOnly: true,
    textValue: 'Udaipur',
  },
];
