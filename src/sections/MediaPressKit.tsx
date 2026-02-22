import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Button } from '../ui/Button'
import { pressKit, images } from '../data/content'
import { HiArrowDownTray, HiDocumentText, HiCog } from 'react-icons/hi2'
import { downloadPressKitPdf } from '../utils/generatePressKitPdf'

export function MediaPressKit() {
  return (
    <SectionWrapper id="press" background="white" ariaLabel="Media and press kit">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
        <AnimatedReveal className="flex flex-col gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 pb-4">
            Media & Press Kit
          </h2>
          <p className="text-navy-600 font-body pb-10">
            Professional assets for media, events, and partnerships. Technical rider and stage requirements available upon request.
          </p>
          <div className="aspect-[3/5] max-w-sm rounded-2xl overflow-hidden bg-navy-100 shadow-premium">
            <img
              src={images.headshot}
              alt="Patrick Byishimo — Professional headshot"
              className="w-full h-full object-cover object-top"
              fetchPriority="high"
            />
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-cream border border-navy-100">
              <h3 className="font-display text-lg font-semibold text-navy-900 pb-2">
                Short bio
              </h3>
              <p className="font-body text-navy-600 text-sm leading-relaxed">
                {pressKit.shortBio}
              </p>
            </div>
            <dl className="grid gap-3">
              <div className="flex flex-wrap gap-2 items-baseline">
                <dt className="font-body font-semibold text-navy-800">Company:</dt>
                <dd className="text-navy-600 font-body">{pressKit.businessName}</dd>
              </div>
              <div className="flex flex-wrap gap-2 items-baseline">
                <dt className="font-body font-semibold text-navy-800">Genre:</dt>
                <dd className="text-navy-600 font-body">{pressKit.genre}</dd>
              </div>
              <div className="flex flex-wrap gap-2 items-baseline">
                <dt className="font-body font-semibold text-navy-800">Location:</dt>
                <dd className="text-navy-600 font-body">{pressKit.location}</dd>
              </div>
              <div className="flex flex-wrap gap-2 items-baseline">
                <dt className="font-body font-semibold text-navy-800">Contact:</dt>
                <dd className="font-body">
                  <a href={`mailto:${pressKit.contactEmail}`} className="text-navy-600 hover:underline">
                    {pressKit.contactEmail}
                  </a>
                  {' · '}
                  <a href={`tel:${pressKit.phone.replace(/\s|\(|\)|-/g, '')}`} className="text-navy-600 hover:underline">
                    {pressKit.phone}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                as="button"
                type="button"
                variant="primary"
                className="inline-flex items-center gap-2"
                onClick={downloadPressKitPdf}
              >
                <HiArrowDownTray className="w-5 h-5" aria-hidden />
                Download Press Kit
              </Button>
            </div>
            <div className="pt-6 border-t border-navy-100 space-y-3">
              <div className="flex items-start gap-3">
                <HiDocumentText className="w-5 h-5 text-navy-600 flex-shrink-0 pt-0.5" aria-hidden />
                <p className="font-body text-navy-600 text-sm">{pressKit.techRiderNote}</p>
              </div>
              <div className="flex items-start gap-3">
                <HiCog className="w-5 h-5 text-navy-600 flex-shrink-0 pt-0.5" aria-hidden />
                <p className="font-body text-navy-600 text-sm">{pressKit.stageRequirementsNote}</p>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  )
}
