import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { images } from '../data/content'

export function Gallery() {
  return (
    <SectionWrapper id="gallery" background="white" ariaLabel="Gallery">
      <AnimatedReveal className="flex flex-col gap-3 sm:gap-4">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 pb-1 sm:pb-2">
          Moments
        </h2>
        <p className="text-navy-600 font-body text-lg max-w-2xl max-md:mx-auto text-justify hyphens-auto break-words">
          From the stage to the studio — worship and ministry in focus.
        </p>
      </AnimatedReveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 md:gap-9">
        {images.gallery.map((src, i) => (
          <AnimatedReveal key={src} delay={i * 0.1}>
            <div className="rounded-xl overflow-hidden shadow-card aspect-[3/5] bg-navy-100">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
