import { Link } from 'react-router-dom'
import { footerNavLinks, socialLinks, siteMeta, images } from '../data/content'
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
    <footer className="bg-navy-900 text-cream py-10 sm:py-12 lg:py-14 pb-[max(2.5rem,env(safe-area-inset-bottom,0px)+0.5rem)]" role="contentinfo">
      <Container className="max-md:text-center">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-8 max-md:items-center">
          <div className="flex-none w-full max-w-sm max-md:flex max-md:flex-col max-md:items-center md:items-start">
            <img
              src={images.logoLight}
              alt="Patrick Byishimo"
              className="h-12 w-auto object-contain max-md:mx-auto"
            />
            <p className="text-cream/70 font-body text-sm mt-1.5 max-md:max-w-xs text-justify hyphens-auto break-words">
              Multilingual Folk & World Artist, Award-Winning Songwriter, and Energetic Performer
            </p>
            <div className="mt-3 font-body text-sm text-cream/80 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-4 sm:gap-y-1 sm:items-baseline max-md:items-center">
              <span>
                <span className="text-cream/50 text-xs font-medium uppercase tracking-wider block sm:inline sm:mr-1">Email:</span>
                <a href={`mailto:${siteMeta.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors break-all inline-block py-2 sm:py-0 -my-1 sm:my-0">
                  {siteMeta.email}
                </a>
              </span>
              <span>
                <span className="text-cream/50 text-xs font-medium uppercase tracking-wider block sm:inline sm:mr-1">Contact:</span>
                <a href={`tel:${siteMeta.phone.replace(/\s|\(|\)|-/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center py-2 sm:py-0 -my-1 sm:my-0">
                  {siteMeta.phone}
                </a>
              </span>
              <span className="min-w-0">
                <span className="text-cream/50 text-xs font-medium uppercase tracking-wider block sm:inline sm:mr-1">Address:</span>
                <span className="text-cream/80 break-words">{siteMeta.location}</span>
              </span>
            </div>
          </div>
          <nav aria-label="Footer navigation" className="md:pt-0 flex-1 min-w-0 w-full max-md:flex max-md:justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 w-full max-w-md md:max-w-none gap-x-8 gap-y-3 sm:gap-x-10 sm:gap-y-1 lg:gap-x-12 max-md:justify-items-center md:justify-items-start text-center md:text-left">
              {[
                [footerNavLinks[0], footerNavLinks[1], footerNavLinks[2]], // Home, About, Music
                [footerNavLinks[3], footerNavLinks[4]],                     // Experience, Booking
                [footerNavLinks[5], footerNavLinks[6]],                    // Concerts, Partnerships
              ].map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1 items-center md:items-start">
                  {column.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-cream/80 hover:text-white font-body text-sm transition-colors w-fit min-h-[40px] inline-flex items-center justify-center md:justify-start"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className="mt-8 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 max-md:items-center">
          <div className="flex gap-4 justify-center sm:justify-start">
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
