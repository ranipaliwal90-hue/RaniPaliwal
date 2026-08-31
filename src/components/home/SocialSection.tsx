'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Share2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedInIcon, YouTubeIcon } from '@/components/ui/SocialIcons';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import { SOCIAL_PLATFORMS, SocialPlatform } from '@/data/social';

export default function SocialSection() {
  const getSocialIcon = (iconName: SocialPlatform['iconName']) => {
    switch (iconName) {
      case 'Instagram':
        return <InstagramIcon className="w-6 h-6 text-emerald-600 group-hover:text-[#0F5132]" />;
      case 'Facebook':
        return <FacebookIcon className="w-6 h-6 text-emerald-600 group-hover:text-[#0F5132]" />;
      case 'LinkedIn':
        return <LinkedInIcon className="w-6 h-6 text-emerald-600 group-hover:text-[#0F5132]" />;
      case 'YouTube':
        return <YouTubeIcon className="w-6 h-6 text-emerald-600 group-hover:text-[#0F5132]" />;
      default:
        return <Share2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Container size="large">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="green" icon={<Share2 className="w-3.5 h-3.5" />}>
            Official Channels
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F241A] tracking-tight mt-3">
            Follow Rani Paliwal
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3">
            Stay connected for fitness, nutrition, wellness tips and updates.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_PLATFORMS.map((platform) => (
            <StaggerItem key={platform.id}>
              <motion.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="block group bg-[#F6FBF7] rounded-[28px] p-7 border border-emerald-100/90 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-white text-[#0F5132] flex items-center justify-center shadow-xs border border-emerald-100 group-hover:bg-[#0F5132] group-hover:text-lime-400 transition-colors duration-300">
                      {getSocialIcon(platform.iconName)}
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200/50">
                      {platform.handle}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0F241A] mb-2 group-hover:text-[#0F5132] transition-colors">
                    {platform.name}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6 font-normal">
                    {platform.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-200/60 flex items-center justify-between text-xs font-extrabold text-[#0F5132] group-hover:text-emerald-700">
                  <span>{platform.badge}</span>
                  <div className="w-7 h-7 rounded-full bg-emerald-100/80 text-[#0F5132] flex items-center justify-center group-hover:bg-[#0F5132] group-hover:text-white transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
