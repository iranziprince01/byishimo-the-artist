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
            <div className="mt-3 font-body text-sm text-cream/80 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-4 sm:gap-y-1 sm:items-baseline">
              <span>
                <span className="text-cream/50 text-xs font-medium uppercase tracking-wider block sm:inline sm:mr-1">Email:</span>
                <a href={`mailto:${siteMeta.email}`} className="hover:text-white transition-colors break-all inline-block py-2 sm:py-0 -my-1 sm:my-0">
                  {siteMeta.email}
                </a>
              </span>
              <span className="hidden sm:inline text-cream/40">·</span>
              <span>
                <span className="text-cream/50 text-xs font-medium uppercase tracking-wider block sm:inline sm:mr-1">Contact:</span>
                <a href={`tel:${siteMeta.phone.replace(/\s|\(|\)|-/g, '')}`} className="hover:text-white transition-colors inline-flex items-center py-2 sm:py-0 -my-1 sm:my-0">
                  {siteMeta.phone}
                </a>
              </span>
              <span className="hidden sm:inline text-cream/40">·</span>
              <span className="min-w-0">
                <span className="text-cream/50 text-xs font-medium uppercase tracking-wider block sm:inline sm:mr-1">Address:</span>
                <span className="text-cream/80 break-words">{siteMeta.location}</span>
              </span>
            </div>
          </div>
          <nav aria-label="Footer navigation" className="md:pt-0 flex-1 min-w-0 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-x-4 gap-y-4 sm:gap-x-10 sm:gap-y-1 lg:gap-x-12">
              {[
                [footerNavLinks[0], footerNavLinks[1], footerNavLinks[2]], // Home, About, Music
                [footerNavLinks[3], footerNavLinks[4]],                     // Experience, Booking
                [footerNavLinks[5], footerNavLinks[6]],                    // Concerts, Partnerships
              ].map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1">
                  {column.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-cream/80 hover:text-white font-body text-sm transition-colors w-fit"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <p className="text-cream/50 font-body text-xs mt-2">
              {siteMeta.businessType}
            </p>
            <p className="text-cream/45 font-body text-xs mt-2">
              Coming soon: <Link to="/branding" className="text-cream/60 hover:text-cream transition-colors">Branding</Link>
              {' · '}
              <Link to="/merch" className="text-cream/60 hover:text-cream transition-colors">Merch</Link>
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
