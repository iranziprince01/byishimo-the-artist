import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { bioParagraphs, images } from '../data/content'

export function Biography() {
  return (
    <SectionWrapper id="about" background="cream" ariaLabel="Professional biography" attachHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center min-w-0 max-md:justify-items-center">
        <AnimatedReveal className="order-2 lg:order-1 flex justify-center lg:justify-start w-full">
          <div className="rounded-2xl overflow-hidden shadow-premium aspect-[3/5] max-w-md w-full">
            <img
              src={images.about}
              alt="Patrick Byishimo"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </AnimatedReveal>
        <div className="order-1 lg:order-2 w-full max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
          <AnimatedReveal className="flex flex-col gap-6 max-md:items-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 pb-4 max-md:text-balance">
              Professional Biography
            </h2>
            <p className="text-navy-600 font-body text-sm tracking-wider max-md:max-w-sm">
              Voice, Story &amp; Strings, and Across Languages and Cultures
            </p>
          </AnimatedReveal>
          <div className="grid gap-10 sm:gap-12 max-w-3xl pt-8 sm:pt-10 w-full max-md:max-w-prose max-md:mx-auto">
            {bioParagraphs.map((paragraph, i) => (
              <AnimatedReveal key={i} delay={i * 0.1}>
                <p className="font-body text-navy-700 text-base sm:text-lg leading-relaxed text-justify hyphens-auto break-words">
                  {paragraph}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
