import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Card } from '../ui/Card'
import { testimonials } from '../data/content'
import { MdFormatQuote } from 'react-icons/md'

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" background="cream" ariaLabel="Testimonials">
      <AnimatedReveal className="flex flex-col gap-1">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 pb-4">
          Testimonials
        </h2>
        <p className="text-navy-600 font-body text-lg max-w-2xl">
          Words from pastors, worship leaders, and event organizers.
        </p>
      </AnimatedReveal>

      <div className="pt-10 sm:pt-14 md:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {testimonials.map((t, i) => (
          <AnimatedReveal key={t.id} delay={i * 0.1}>
            <Card className="p-4 sm:p-6 h-full flex flex-col gap-4">
              <MdFormatQuote className="w-10 h-10 text-navy-400 pb-4" aria-hidden />
              <blockquote className="font-body text-navy-700 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="pt-6 border-t border-navy-100">
                <p className="font-display font-semibold text-navy-900">{t.author}</p>
                <p className="text-navy-600 text-sm">{t.role}</p>
                {t.organization && (
                  <p className="text-navy-500 text-sm">{t.organization}</p>
                )}
              </footer>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
