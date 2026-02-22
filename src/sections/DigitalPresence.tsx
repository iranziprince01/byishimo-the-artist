import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Button } from '../ui/Button'
import { socialLinks } from '../data/content'
import { FaYoutube, FaSpotify, FaInstagram, FaFacebook } from 'react-icons/fa'
import { HiEnvelope } from 'react-icons/hi2'
import { useState } from 'react'

const iconMap: Record<string, React.ReactNode> = {
  youtube: <FaYoutube className="w-6 h-6" />,
  spotify: <FaSpotify className="w-6 h-6" />,
  instagram: <FaInstagram className="w-6 h-6" />,
  facebook: <FaFacebook className="w-6 h-6" />,
}

export function DigitalPresence() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Placeholder: would send to backend or mailing service
      setEmail('')
    }
  }

  return (
    <SectionWrapper id="digital" background="navy" ariaLabel="Digital presence">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimatedReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Connect & Listen
          </h2>
          <p className="text-cream/90 font-body text-lg mb-8">
            Stream on Spotify, watch on YouTube, and follow on social media. Join the mailing list for new releases and updates.
          </p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) =>
              link.comingSoon ? (
                <span
                  key={link.platform}
                  className="w-12 h-12 rounded-full bg-white/10 text-cream/50 flex items-center justify-center cursor-default border border-white/10"
                  title="Coming soon"
                  aria-label={`${link.platform} (coming soon)`}
                >
                  {iconMap[link.icon as keyof typeof iconMap]}
                </span>
              ) : (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/15 text-cream border border-white/20 flex items-center justify-center hover:bg-goldLight hover:text-navy-900 shadow-md transition-all"
                  aria-label={link.platform}
                >
                  {iconMap[link.icon as keyof typeof iconMap]}
                </a>
              )
            )}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="aspect-video rounded-lg overflow-hidden bg-navy-800 mb-6">
              <iframe
                title="Faithful God — Patrick Byishimo"
                src="https://www.youtube.com/embed/27RYulXhJcY?rel=0"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <p className="text-cream/80 font-body text-sm mb-4">
              <a href="https://www.youtube.com/@patrickbyishimooffical" target="_blank" rel="noopener noreferrer" className="text-goldLight hover:text-white underline">Subscribe on YouTube</a> for live worship sessions and new music videos.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email for newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-goldLight"
                aria-label="Email address"
              />
              <Button
                as="button"
                type="submit"
                variant="primaryOnDark"
              >
                <HiEnvelope className="w-5 h-5" aria-hidden />
                Join mailing list
              </Button>
            </form>
          </div>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  )
}
