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
  title: 'Group Fitness',
  role: 'Group Fitness',
  image: '/coach/coach2.jpg',
  description:
    'A glimpse of the team involved in group fitness sessions and wellness activities.',
  badge: 'GROUP FITNESS',
},

{
  id: 'team-3',
  title: 'Fitness & Wellness Team',
  role: 'Fitness & Wellness Community',
  image: '/coach/coach3.jpg',
  description:
    'A glimpse of the people connected with the Being Fit fitness and wellness community.',
  badge: 'FITNESS COMMUNITY',
},

{
  id: 'team-4',
  title: 'Coaching & Wellness Support',
  role: 'Coaching & Wellness',
  image: '/coach/coach4.jpg',
  description:
    'Connecting with clients and the Being Fit community through fitness, nutrition and wellness guidance.',
  badge: 'WELLNESS SUPPORT',
},
];
