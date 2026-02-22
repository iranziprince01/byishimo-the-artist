import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { bioParagraphs, images } from '../data/content'

export function Biography() {
  return (
    <SectionWrapper id="about" background="cream" ariaLabel="Professional biography">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <AnimatedReveal className="order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-premium aspect-[3/5] max-w-md mx-auto lg:mx-0">
            <img
              src={images.about}
              alt="Patrick Byishimo"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </AnimatedReveal>
        <div className="order-1 lg:order-2">
          <AnimatedReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Professional Biography
            </h2>
            <p className="text-navy-600 font-body text-sm uppercase tracking-wider mb-10">
              Artistic roots · Ministry · Vision
            </p>
          </AnimatedReveal>
          <div className="grid gap-8 max-w-3xl">
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
