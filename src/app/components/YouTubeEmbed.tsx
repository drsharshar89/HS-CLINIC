import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  /** If true, show as a standalone card with title/description. */
  description?: string;
  /** Aspect ratio class — defaults to 16:9. */
  aspectRatio?: string;
}

/**
 * Privacy-enhanced, lazy-loading YouTube embed.
 * Renders a thumbnail placeholder until the user clicks Play,
 * then swaps in the iframe. This avoids loading YouTube's
 * tracking scripts until explicitly requested.
 */
export function YouTubeEmbed({
  videoId,
  title,
  description,
  aspectRatio = 'aspect-video',
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for lazy loading the thumbnail
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-dark-900/50 hover:border-gold-400/20 overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300"
    >
      {/* Video area */}
      <div className={`relative ${aspectRatio} w-full overflow-hidden`}>
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title ?? 'YouTube Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex cursor-pointer items-center justify-center"
            aria-label={`Play video: ${title ?? videoId}`}
          >
            {isVisible && (
              <img
                src={thumbnailUrl}
                alt={title ?? 'Video thumbnail'}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            )}
            <div className="from-dark-950/60 absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="bg-gold-400 relative z-10 flex h-16 w-16 items-center justify-center rounded-full shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-transform duration-300 group-hover:scale-110">
              <Play className="text-dark-950 ml-1 h-7 w-7" />
            </div>
          </button>
        )}
      </div>

      {/* Title & description */}
      {(title || description) && (
        <div className="p-5">
          {title && (
            <h4 className="group-hover:text-gold-300 mb-1 font-serif text-lg text-white transition-colors">
              {title}
            </h4>
          )}
          {description && <p className="text-sm leading-relaxed text-gray-400">{description}</p>}
        </div>
      )}
    </motion.div>
  );
}

/* ── Section wrapper to render multiple videos ── */
interface VideoSectionProps {
  videos: Array<{ videoId: string; title?: string; description?: string }>;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export function VideoSection({ videos, sectionTitle, sectionSubtitle }: VideoSectionProps) {
  if (!videos.length) return null;

  return (
    <section className="border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {(sectionTitle || sectionSubtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-14 text-center"
          >
            {sectionSubtitle && (
              <p className="text-gold-400 mb-3 font-mono text-sm tracking-[0.3em] uppercase">
                {sectionSubtitle}
              </p>
            )}
            {sectionTitle && (
              <h3 className="font-serif text-4xl text-white md:text-5xl">{sectionTitle}</h3>
            )}
          </motion.div>
        )}
        <div
          className={`grid gap-8 ${videos.length === 1 ? 'mx-auto max-w-2xl' : 'md:grid-cols-2'}`}
        >
          {videos.map((v, i) => (
            <YouTubeEmbed key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
