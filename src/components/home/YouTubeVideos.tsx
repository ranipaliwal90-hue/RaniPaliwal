'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

const VIDEOS = [
  {
    title: 'Listen this might help you or somebody in family.',
    url: 'https://www.youtube.com/watch?v=OEM9r2WFqz0',
  },
  {
    title: 'See the possibilities. Results are individual and not typical.',
    url: 'https://www.youtube.com/watch?v=MT4L3pDYNmQ',
  },
  {
    title: 'Those who want to start Herbalife but negative sun ke thoda aage peeche ho rahe hai',
    url: 'https://www.youtube.com/watch?v=h20AklrCu0U',
  },
  {
    title: 'DIETING FACTS AND MYTHS',
    url: 'https://www.youtube.com/watch?v=-1IQuNXwHNM',
  },
];

function getYoutubeThumbnail(url: string) {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
  );

  return match
    ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
    : '';
}

export default function YouTubeVideos() {
  return (
    <section className="relative overflow-hidden bg-[#FAFDFA] py-20 lg:py-28">
      <Container size="large">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <Badge
            variant="green"
            className="mb-3"
          >
            <span className="flex items-center gap-2">
              <Play className="h-4 w-4 fill-current" />
              Rani Paliwal on YouTube
            </span>
          </Badge>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F241A] sm:text-4xl lg:text-5xl">
            Watch, Learn &
            <span className="text-gradient-brand">
              {' '}Transform.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Explore fitness, nutrition and wellness guidance from
            Rani Paliwal.
          </p>

        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {VIDEOS.map((video, index) => {
            const thumbnail = getYoutubeThumbnail(video.url);

            return (
              <motion.a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group block overflow-hidden rounded-[24px] border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
              >

                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-[#0F241A]">

                  {thumbnail && (
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/30" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <motion.div
                      whileHover={{
                        scale: 1.12,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 group-hover:bg-[#0F5132]"
                    >
                      <Play
                        className="ml-1 h-6 w-6 fill-[#0F5132] text-[#0F5132] transition-colors duration-300 group-hover:fill-white group-hover:text-white"
                      />
                    </motion.div>

                  </div>

                  {/* YouTube Label */}
                  <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0F5132] shadow-md backdrop-blur-sm">
                    YouTube
                  </div>

                </div>

                {/* Video Content */}
                <div className="p-4">

                  <h3 className="line-clamp-2 text-base font-extrabold leading-snug text-[#0F241A] transition-colors duration-300 group-hover:text-[#0F5132]">
                    {video.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    Watch on YouTube
                  </div>

                </div>

              </motion.a>
            );
          })}

        </div>

        {/* Channel Button */}
        <div className="mt-10 text-center">

          <a
            href="https://www.youtube.com/@ranipaliwal3200"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0F5132] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B4329] hover:shadow-lg"
          >
            <Play className="h-5 w-5 fill-current" />
            Visit My YouTube Channel
          </a>

        </div>

      </Container>
    </section>
  );
}