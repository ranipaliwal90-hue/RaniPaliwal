export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  quote: string;
  rating: number;
  location: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Priya Sharma',
    role: 'Member & Fitness Enthusiast',
    program: 'Weight Loss & Nutrition Coaching',
    quote:
      'Coach Rani Paliwal’s personal guidance transformed not just my diet, but my entire perspective on health. The customized meal plans were easy to follow and incredibly effective.',
    rating: 5,
    location: 'Udaipur',
    initials: 'PS',
  },
  {
    id: 'test-2',
    name: 'Vikram Mehta',
    role: 'Club Member',
    program: 'Personal Training',
    quote:
      'Being Fit offers an environment unlike any other in Udaipur. The focus on form, posture, and progressive strength training kept me motivated and injury-free.',
    rating: 5,
    location: 'Udaipur',
    initials: 'VM',
  },
  {
    id: 'test-3',
    name: 'Sneha Jain',
    role: 'Online Coaching Client',
    program: 'Online Coaching',
    quote:
      'Even though I live outside Udaipur, Rani Coach provided constant daily accountability and virtual check-ins. I achieved my target fitness goals seamlessly.',
    rating: 5,
    location: 'Jaipur',
    initials: 'SJ',
  },
]