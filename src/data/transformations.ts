export interface Transformation {
  id: string;
  category: 'Weight Loss' | 'Fitness' | 'Lifestyle';
  title: string;
  subtitle: string;
  duration: string;
  story: string;
  tags: string[];
  imageBefore: string;
  imageAfter: string;
  quote: string;
}

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 'trans-1',
    category: 'Weight Loss',
    title: 'Sustainable Weight Management',
    subtitle: '12-Week Nutrition & Strength Journey',
    duration: '12 Weeks',
    story:
      'Congratulations Manjeet sir our last week winner with 1.5 kg weight loss in one week',
    tags: [
      'Customized Meal Plan',
      'Strength Training',
      'Habit Tracking',
    ],
    imageBefore: '/manjeet.jpg',
    imageAfter: '/manjeet.jpg',
    quote: '',
  },

  {
    id: 'trans-2',
    category: 'Weight Loss',
    title: 'Healthy Lifestyle Transformation',
    subtitle: '1.2 kg weight lose in a week',
    duration: '16 Weeks',
    story:
      'Congratulations Surendra sir our last week winner 1.2 kg weight lose in a week Well done keep it up',
    tags: [
      'Personal Training',
      'Posture Rehab',
      'Nutrition Support',
    ],
    imageBefore: '/surendra.jpg',
    imageAfter: '/surendra.jpg',
    quote: '',
  },

  {
    id: 'trans-3',
    category: 'Weight Loss',
    title: 'Strength, Fitness & Wellness Journey',
    subtitle: 'Lost total of 15 kg weight',
    duration: '6 Months',
    story:
      'Congratulations Yogesh Sir this weeks winner 1.7 kg weight lose. By this you have now lost total of 15 kg weight Keep going journey to ideal weight..',
    tags: [
      'Wellness Coaching',
      'Group Fitness',
      'Sleep Optimization',
    ],
    imageBefore: '/yogesh.jpg',
    imageAfter: '/yogesh.jpg',
    quote: '',
  },

  {
    id: 'trans-4',
    category: 'Weight Loss',
    title: 'Sustainable Fat Loss & Fitness',
    subtitle: 'Almost 2.5 kg in two week',
    duration: '24 Weeks',
    story:
      'Many many congratulations our two weeks star Shubhangi mam almost 2.5 kg in two week...',
    tags: [
      'Online Coaching',
      'Metabolic Reset',
      'Weekly Audits',
    ],
    imageBefore: '/shubhangi.jpg',
    imageAfter: '/shubhangi.jpg',
    quote: '',
  },

  {
    id: 'trans-5',
    category: 'Weight Loss',
    title: 'Complete Health & Wellness Transformation',
    subtitle: '1 kg lost in 7 days.',
    duration: '10 Weeks',
    story:
      'Congratulations Yasmin ji again weekly winner again 1 kg lost in 7 days. #well done keep it up',
    tags: [
      'Group Fitness',
      'Core Conditioning',
      'Fat Burning',
    ],
    imageBefore: '/yasmin.jpg',
    imageAfter: '/yasmin.jpg',
    quote: '',
  },

  {
    id: 'trans-6',
    category: 'Weight Loss',
    title: 'Personalized Weight Loss Journey',
    subtitle: '14-Week Habit Reset',
    duration: '14 Weeks',
    story:
      'Congratulations Sakina ji our weekly winner 1.9 kg weight lose in one week Total 8 Kg till now You are doing amazing keep it up...',
    tags: [
      'Lifestyle Alignment',
      'Easy Meal Plans',
      'Mobility Work',
    ],
    imageBefore: '/sakina.jpg',
    imageAfter: '/sakina.jpg',
    quote: '',
  },
];