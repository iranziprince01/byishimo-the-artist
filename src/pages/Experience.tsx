import { RecentHighlights } from '../sections/RecentHighlights'
import { ArtisticVision } from '../sections/ArtisticVision'
import { MediaPressKit } from '../sections/MediaPressKit'
import { Gallery } from '../sections/Gallery'
import { Testimonials } from '../sections/Testimonials'
import { StayUpdated } from '../sections/StayUpdated'
import { FollowSection } from '../sections/FollowSection'

/** Combined page: Highlights, Vision, Press, Gallery, Testimonials */
export function Experience() {
  return (
    <>
      <RecentHighlights />
      <ArtisticVision />
      <MediaPressKit />
      <Gallery />
      <Testimonials />
      <StayUpdated />
      <FollowSection />
    </>
  )
}
