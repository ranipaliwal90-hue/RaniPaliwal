export interface SocialPlatform {
  id: string;
  name: string;
  handle: string;
  description: string;
  url: string;
  iconName: 'Instagram' | 'Facebook' | 'LinkedIn' | 'YouTube';
  badge: string;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@rani_paliwal',
    description: 'Daily fitness motivation, nutrition tips, recipe ideas, and coaching highlights.',
    url: 'https://instagram.com/rani_paliwal?r=nametag',
    iconName: 'Instagram',
    badge: 'Follow on Instagram',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Beingfit.asia',
    description: 'Community updates, wellness challenges, live sessions, and health guidance.',
    url: 'https://www.facebook.com/beingfit.asia',
    iconName: 'Facebook',
    badge: 'Visit Facebook Page',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Rani Paliwal',
    description: 'Professional credentials, health consulting insights, and wellness leadership.',
    url: 'https://www.linkedin.com/in/rani-paliwal-4164b670/',
    iconName: 'LinkedIn',
    badge: 'Connect on LinkedIn',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@ranipaliwal3200',
    description: 'Workout tutorials, nutrition deep-dives, wellness Q&As, and coaching videos.',
    url: 'https://www.youtube.com/@ranipaliwal3200',
    iconName: 'YouTube',
    badge: 'Subscribe on YouTube',
  },
];
