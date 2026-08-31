export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName:
    | 'Scale'
    | 'Utensils'
    | 'Dumbbell'
    | 'Globe'
    | 'Users'
    | 'HeartPulse';
  badge: string;
  features: string[];
  idealFor: string;
  pricingText: string;
  image: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'weight-management',
    title: 'Weight Management',
    tagline: 'Sustainable & Health-Focused Weight Management',
    description:
      'Build healthier lifestyle habits and work toward your weight-management goals with personalized nutrition, activity guidance, and ongoing support.',
    iconName: 'Scale',
    badge: 'Weight & Wellness',
    features: [
      'Personalized Nutrition Guidance',
      'Customized Meal Planning',
      'Progress Tracking',
      'Lifestyle & Habit Support',
    ],
    idealFor:
      'Individuals looking for sustainable weight management through healthy nutrition and lifestyle habits.',
    pricingText: 'Contact for pricing',
    image:
      '/weightmanag.jpg',
  },

  {
    id: 'nutrition-coaching',
    title: 'Nutrition Coaching',
    tagline: 'Fuel Your Body with Purpose',
    description:
      'Personalized nutrition guidance built around your food preferences, daily routine, lifestyle, and wellness goals.',
    iconName: 'Utensils',
    badge: 'Nutrition & Wellness',
    features: [
      'Personalized Nutrition Guidance',
      'Customized Home-Cooked Meal Planning',
      'Healthy Eating & Lifestyle Support',
      'Regular Progress Check-ins',
    ],
    idealFor:
      'Anyone who wants to develop healthier eating habits and a more balanced approach to everyday nutrition.',
    pricingText: 'Contact for pricing',
    image:
      '/nutrition.jpg',
  },

  {
    id: 'personal-training',
    title: 'Personal Training',
    tagline: '1-on-1 Fitness Guidance',
    description:
      'Individualized fitness guidance focused on strength, functional movement, exercise technique, mobility, and consistent progress.',
    iconName: 'Dumbbell',
    badge: '1-on-1 Training',
    features: [
      'Personalized Workout Guidance',
      'Strength & Functional Training',
      'Form & Exercise Guidance',
      'Progress Tracking',
    ],
    idealFor:
      'Men and women looking for personalized workout guidance and focused 1-on-1 fitness support.',
    pricingText: 'Contact for pricing',
    image:
      '/personaltra.jpg',
  },

  {
    id: 'online-coaching',
    title: 'Online Coaching',
    tagline: 'Expert Guidance from Anywhere',
    description:
      'Receive fitness, nutrition, and lifestyle guidance remotely with personalized support and regular progress tracking.',
    iconName: 'Globe',
    badge: 'Remote Coaching',
    features: [
      'Personalized Fitness Guidance',
      'Nutrition & Lifestyle Support',
      'Customized Workout Guidance',
      'Progress & Goal Tracking',
      'Ongoing Coaching Support',
    ],
    idealFor:
      'Busy professionals, parents, and clients outside Udaipur who prefer remote coaching and flexible guidance.',
    pricingText: 'Contact for pricing',
    image:
      '/online.jpg',
  },

  {
    id: 'wellness-coaching',
    title: 'Lifestyle & Wellness Coaching',
    tagline: 'Build Healthier Everyday Habits',
    description:
      'Develop healthier daily routines with practical guidance around lifestyle habits, recovery, stress management, and long-term wellbeing.',
    iconName: 'HeartPulse',
    badge: 'Wellness Support',
    features: [
      'Healthy Lifestyle Guidance',
      'Daily Habit Support',
      'Sleep & Recovery Guidance',
      'Stress Management Support',
      'Long-Term Wellness Planning',
    ],
    idealFor:
      'Individuals who want to improve their everyday lifestyle, habits, wellbeing, and overall health.',
    pricingText: 'Contact for pricing',
    image:
      '/lifestyle.jpg',
  },
];