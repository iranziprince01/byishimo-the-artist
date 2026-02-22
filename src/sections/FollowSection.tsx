import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { socialLinks } from '../data/content'
import { FaYoutube, FaSpotify, FaInstagram, FaFacebook } from 'react-icons/fa'
import { siteMeta } from '../data/content'

const iconMap: Record<string, React.ReactNode> = {
  youtube: <FaYoutube className="w-5 h-5" />,
  spotify: <FaSpotify className="w-5 h-5" />,
  instagram: <FaInstagram className="w-5 h-5" />,
  facebook: <FaFacebook className="w-5 h-5" />,
}

export function FollowSection() {
  return (
    <SectionWrapper background="white" ariaLabel="Follow on social">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedReveal>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-2">
            Follow {siteMeta.artistName}
          </h2>
          <p className="text-navy-600 font-body text-sm mb-8">
            New music, behind-the-scenes, and updates on Instagram, Facebook, YouTube, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) =>
              link.comingSoon ? (
                <span
                  key={link.platform}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-50 text-navy-500 font-body text-sm cursor-default"
                  title="Coming soon"
                >
                  {iconMap[link.icon as keyof typeof iconMap]}
                  {link.platform} (coming soon)
                </span>
              ) : (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-100 text-navy-700 hover:bg-navy-800 hover:text-cream font-body text-sm transition-colors"
                >
                  {iconMap[link.icon as keyof typeof iconMap]}
                  {link.platform}
                </a>
              )
            )}
          </div>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  )
}
