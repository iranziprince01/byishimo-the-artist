export interface Track {
  id: string
  title: string
  description: string
  releaseDate: string
  youtubeId: string
  streamingLinks?: { platform: string; url: string }[]
}

export interface Highlight {
  id: string
  title: string
  type: 'performance' | 'conference' | 'church' | 'online' | 'festival' | 'community'
  date: string
  location?: string
  description?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  organization?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  comingSoon?: boolean
}

export interface NavLink {
  label: string
  href: string
}
