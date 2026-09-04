export interface TeamMemberImage {
  id: string;
  title: string;
  role: string;
  image: string;
  description: string;
  badge: string;
}

export interface CoachPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const COACH_PILLARS: CoachPillar[] = [
  {
    number: '01',
    title: '1-on-1 Mentorship',
    subtitle: 'LEARN WITH COACH RANI PALIWAL',
    description:
      'Learn practical fitness, nutrition and wellness guidance through mentorship and experience.',
  },

  {
    number: '02',
    title: 'Nutrition & Wellness Guidance',
    subtitle: 'ASN CERTIFIED COACH',
    description:
      'Learn from the nutrition and wellness approach developed through Coach Rani Paliwal coaching experience.',
  },

  {
    number: '03',
    title: 'Practical Coaching Approach',
    subtitle: 'FITNESS & WELLNESS STRATEGIES',
    description:
      'Build practical skills for supporting clients with fitness, nutrition and healthy lifestyle goals.',
  },

  {
    number: '04',
    title: 'Team & Community',
    subtitle: 'GROW WITH THE COMMUNITY',
    description:
      'Connect with a fitness and wellness community focused on learning, support and shared growth.',
  },
];

export const TEAM_GALLERY: TeamMemberImage[] = [
  {
    id: 'team-1',
    title: 'Team Workshop & Mentorship',
    role: 'Coaching Mentorship',
    image: '/coach/coach1.jpg',
    description:
      'Team workshops and wellness training sessions with Coach Rani Paliwal.',
    badge: 'TEAM MENTORSHIP',
  },

  {
    id: 'team-2',
    title: 'Group Fitness Experience',
    role: 'Group Fitness',
    image: '/coach/coach2.jpg',
    description:
      'A glimpse of the team involved in group fitness sessions and wellness activities.',
    badge: 'GROUP FITNESS',
  },

  {
    id: 'team-3',
    title: 'Being Fit Community',
    role: 'Fitness & Wellness Community',
    image: '/coach/coach3.jpg',
    description:
      'A glimpse of the people connected with the Being Fit fitness and wellness community.',
    badge: 'FITNESS COMMUNITY',
  },

  {
    id: 'team-4',
    title: 'Wellness Coaching in Action',
    role: 'Coaching & Wellness',
    image: '/coach/coach4.jpg',
    description:
      'Connecting with clients and the Being Fit community through fitness, nutrition and wellness guidance.',
    badge: 'WELLNESS SUPPORT',
  },

  {
    id: 'team-5',
    title: 'Building Healthier Lifestyles',
    role: 'Lifestyle Coaching',
    image: '/coach/coach5.jpg',
    description:
      'Supporting individuals and the Being Fit community with practical wellness and healthy lifestyle guidance.',
    badge: 'LIFESTYLE WELLNESS',
  },

  {
    id: 'team-6',
    title: 'Fitness Journey Together',
    role: 'Fitness Coaching',
    image: '/coach/coach6.jpg',
    description:
      'Creating a supportive environment where fitness, wellness and personal growth come together.',
    badge: 'FITNESS JOURNEY',
  },

  {
    id: 'team-7',
    title: 'Growing Through Wellness',
    role: 'Wellness Community',
    image: '/coach/coach7.jpg',
    description:
      'A look at the community coming together to learn, stay active and grow through wellness.',
    badge: 'WELLNESS COMMUNITY',
  },

  {
    id: 'team-8',
    title: 'Empowering Healthy Choices',
    role: 'Health & Fitness',
    image: '/coach/coach8.jpg',
    description:
      'Encouraging healthier habits through fitness, nutrition awareness and a positive community.',
    badge: 'HEALTH & FITNESS',
  },

  {
    id: 'team-9',
    title: 'Stronger Together',
    role: 'Team Fitness',
    image: '/coach/coach9.jpg',
    description:
      'A community built around motivation, consistency and shared commitment to a healthier lifestyle.',
    badge: 'TEAM FITNESS',
  },

  {
    id: 'team-10',
    title: 'Wellness Beyond Training',
    role: 'Holistic Wellness',
    image: '/coach/coach10.jpg',
    description:
      'Bringing together fitness, nutrition and everyday wellness for a more balanced approach to health.',
    badge: 'HOLISTIC WELLNESS',
  },

  {
    id: 'team-11',
    title: 'Inspiring Healthy Transformation',
    role: 'Transformation Coaching',
    image: '/coach/coach11.jpg',
    description:
      'Supporting people on their journey toward healthier habits, greater confidence and consistent progress.',
    badge: 'HEALTH TRANSFORMATION',
  },

  {
    id: 'team-12',
    title: 'Together Towards Better Health',
    role: 'Community Wellness',
    image: '/coach/coach12.jpg',
    description:
      'Celebrating a community that values healthy living, continuous learning and positive lifestyle changes.',
    badge: 'BETTER HEALTH',
  },
];