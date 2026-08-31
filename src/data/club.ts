export interface ClubFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ClubFacility {
  name: string;
  desc: string;
}

export const CLUB_INFO = {
  name: 'Being Fit',
  subtitle: 'Nutrition & Fitness Center',
  tagline: 'An environment designed by Rani Paliwal to help you train, stay consistent, and build a healthier lifestyle.',
  locationName: 'Being Fit Fitness 2.0 / Nutrition Center',
  address: 'Navratna Complex, near Shrinath Hospital, Bhuwana, Udaipur, Rajasthan 313001',
  phone: '+91 9982011555',
  whatsappUrl: 'https://wa.me/919982011555?text=Hello%20Being%20Fit%20Center,%20I%20want%20to%20inquire%20about%20fitness%20challenges%20and%20memberships.',
  mapDirectionsUrl: 'https://maps.google.com/?q=Being+Fit+Nutrition+Center+Navratna+Complex+Udaipur',
  timings: [
    { days: 'Monday – Saturday', hours: '5:30 AM – 10:30 PM' },
    { days: 'Sunday', hours: '8:00 AM – 12:00 PM' },
  ],
  offerings: [
    {
      title: 'Fitness & Strength Training',
      items: [
        'Strength Training',
        'Functional Fitness',
        'Personal Training',
        'Customized Workout Guidance',
      ],
    },
    {
      title: 'Weight Management',
      items: [
        'Weight Loss Consultation',
        'Nutrition Guidance',
        'Customized Meal Planning',
        'Progress Tracking',
      ],
    },

    {
      title: 'Yoga & Holistic Wellness',
      items: [
        'Hatha Yoga',
        'Vinyasa Yoga',
        'Restorative Yoga',
      ],
    },
  ],
  facilities: [
    { name: 'Modern Strength Equipment', desc: 'Premium equipment, free weights and machine-based training for strength and fitness.' },
    { name: 'Cardio & Fitness Training', desc: 'Cardio and conditioning workouts designed to support endurance and overall fitness.' },
    { name: 'Yoga Sessions', desc: 'Yoga sessions including Hatha, Vinyasa, Power and Restorative Yoga.' },
    { name: 'Personal Training', desc: 'Personalized training guidance with customized fitness plans and form correction.' },
    { name: 'Fitness Assessment', desc: 'Fitness assessment and consultation to help create a training plan around individual goals.' },
    { name: 'Comfort & Convenience', desc: 'Air conditioning, parking and Wi-Fi available at the center.' },
  ],
};
