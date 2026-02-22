import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { bioParagraphs, images } from '../data/content'

export function Biography() {
  return (
    <SectionWrapper id="about" background="cream" ariaLabel="Professional biography" attachHeader>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimatedReveal className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="rounded-2xl overflow-hidden shadow-premium aspect-[3/5] max-w-md w-full">
            <img
              src={images.about}
              alt="Patrick Byishimo"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </AnimatedReveal>
        <div className="order-1 lg:order-2">
          <AnimatedReveal className="flex flex-col gap-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 pb-4">
              Professional Biography
            </h2>
            <p className="text-navy-600 font-body text-sm uppercase tracking-wider">
              Artistic roots · Ministry · Vision
            </p>
          </AnimatedReveal>
          <div className="grid gap-10 max-w-3xl pt-6">
            {bioParagraphs.map((paragraph, i) => (
              <AnimatedReveal key={i} delay={i * 0.1}>
                <p className="font-body text-navy-700 text-lg leading-relaxed text-justify">
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
