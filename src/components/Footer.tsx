import { navLinks, socialLinks, siteMeta, images } from '../data/content'
import { Container } from '../ui/Container'
import { FaYoutube, FaSpotify, FaInstagram, FaFacebook } from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  youtube: <FaYoutube className="w-5 h-5" />,
  spotify: <FaSpotify className="w-5 h-5" />,
  instagram: <FaInstagram className="w-5 h-5" />,
  facebook: <FaFacebook className="w-5 h-5" />,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-cream py-8 sm:py-10" role="contentinfo">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
          <div className="flex-none w-auto max-w-sm">
            <img
              src={images.logoLight}
              alt="Patrick Byishimo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-cream/70 font-body text-sm mt-1.5">
              Gospel Artist · Worship Leader · Songwriter
            </p>
            <p className="text-cream/50 font-body text-xs mt-0.5">
              {siteMeta.businessName}
            </p>
            <p className="mt-3 font-body text-sm text-cream/80 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span>
                <span className="text-cream/50 text-xs font-medium uppercase tracking-wider mr-1">Email:</span>
                <a href={`mailto:${siteMeta.email}`} className="hover:text-white transition-colors">
                  {siteMeta.email}
                </a>
              </span>
              <span className="text-cream/40">·</span>
              <span>
                <span className="text-cream/50 text-xs font-medium uppercase tracking-wider mr-1">Contact:</span>
                <a href={`tel:${siteMeta.phone.replace(/\s|\(|\)|-/g, '')}`} className="hover:text-white transition-colors">
                  {siteMeta.phone}
                </a>
              </span>
              <span className="text-cream/40">·</span>
              <span>
                <span className="text-cream/50 text-xs font-medium uppercase tracking-wider mr-1">Address:</span>
                <span className="text-cream/80">{siteMeta.location}</span>
              </span>
            </p>
          </div>
          <nav aria-label="Footer navigation" className="md:pt-0 flex-1 min-w-0 w-full">
            <div className="grid grid-cols-3 w-full gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-1">
              {[
                [navLinks[0], navLinks[1], navLinks[6]],       // About, Music, Testimonials
                [navLinks[2], navLinks[3], navLinks[7]],       // Highlights, Vision, Booking
                [navLinks[4], navLinks[5], { label: 'Press Kit', href: '#press' }], // Press, Gallery, Press Kit
              ].map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1">
                  {column.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-cream/80 hover:text-white font-body text-sm transition-colors w-fit"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <p className="text-cream/50 font-body text-xs mt-2">
              {siteMeta.businessType}
            </p>
          </nav>
        </div>
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-4">
            {socialLinks.map((link) =>
              link.comingSoon ? (
                <span
                  key={link.platform}
                  className="text-cream/50 cursor-default"
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
                    className="text-cream/80 hover:text-white transition-colors"
                    aria-label={link.platform}
                >
                  {iconMap[link.icon as keyof typeof iconMap]}
                </a>
              )
            )}
          </div>
          <p className="text-cream/60 font-body text-sm">
            © {year} {siteMeta.businessName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
