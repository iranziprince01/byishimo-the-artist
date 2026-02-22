import type { Track, Highlight, Testimonial, SocialLink, NavLink } from '../types'

/** Image paths use filenames as in public/images/ */
export const images = {
  headshot: '/images/01.jpeg',
  hero: '/images/02.jpeg',
  about: '/images/03.jpeg',
  gallery: ['/images/04.jpeg', '/images/05.jpeg', '/images/06.jpeg'] as const,
  /** Logo: 1.png for light backgrounds (header), 2.png for dark (footer) */
  logo: '/images/Logos/1.png',
  logoLight: '/images/Logos/2.png',
}

export const siteMeta = {
  artistName: 'Patrick Byishimo',
  tagline: 'Multilingual Worship Artist Bridging Cultures Through Music',
  mission: 'Leading worship across languages and cultures—from Rwanda to Canada—with excellence, authenticity, and a heart for the global Church.',
  /** Single hero summary (tagline + mission combined for a cleaner hero) */
  heroSummary: 'Multilingual worship artist bridging cultures through music—from Rwanda to Canada—with excellence, authenticity, and a heart for the global Church.',
  location: '7412 174 Avenue NW, Edmonton, Alberta, Canada',
  origin: 'Rwanda',
  languages: ['Kinyarwanda', 'English', 'French'],
  email: 'contact@byishimomusic.com',
  phone: '+1 (780) 200-9912',
  /** Registered business */
  businessName: 'Patrick Byishimo Music',
  businessType: 'Gospel Music production, publishing & entertainment services',
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Music', href: '#music' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Vision', href: '#vision' },
  { label: 'Press', href: '#press' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Booking', href: '#booking' },
]

export const tracks: Track[] = [
  {
    id: '1',
    title: 'Faithful God',
    description: 'A declaration of God’s faithfulness in worship, inviting hearts to trust and praise.',
    releaseDate: '2024',
    youtubeId: '27RYulXhJcY',
    streamingLinks: [
      { platform: 'Spotify', url: '#' },
      { platform: 'Apple Music', url: '#' },
      { platform: 'YouTube Music', url: '#' },
    ],
  },
  {
    id: '2',
    title: 'Umurunga',
    description: 'Worship in Kinyarwanda, honoring heritage and the heart of East African praise.',
    releaseDate: '2024',
    youtubeId: 'z3a3DZHming',
    streamingLinks: [
      { platform: 'Spotify', url: '#' },
      { platform: 'Apple Music', url: '#' },
    ],
  },
  {
    id: '3',
    title: 'Ndakwizeye',
    description: 'A song of faith and confidence in God, connecting language and culture through worship.',
    releaseDate: '2024',
    youtubeId: 'Gv9vo44oxPg',
    streamingLinks: [
      { platform: 'Spotify', url: '#' },
      { platform: 'YouTube Music', url: '#' },
    ],
  },
]

export const highlights: Highlight[] = [
  {
    id: '1',
    title: 'Worship Night — Edmonton',
    type: 'performance',
    date: '2025',
    location: 'Edmonton, AB',
    description: 'Evening of worship and testimony with local churches.',
  },
  {
    id: '2',
    title: 'Rwanda-Canada Worship Conference',
    type: 'conference',
    date: '2024',
    location: 'Edmonton',
    description: 'Featured artist and workshop leader on multilingual worship.',
  },
  {
    id: '3',
    title: 'Sunday Worship Lead',
    type: 'church',
    date: 'Ongoing',
    location: 'Local churches',
    description: 'Regular worship leading across Edmonton-area congregations.',
  },
  {
    id: '4',
    title: 'Online Live Worship',
    type: 'online',
    date: '2024',
    description: 'Monthly live streams connecting with audiences globally.',
  },
  {
    id: '5',
    title: 'Community Gospel Festival',
    type: 'festival',
    date: '2024',
    location: 'Alberta',
    description: 'Main stage performance at regional Gospel festival.',
  },
  {
    id: '6',
    title: 'Youth & Young Adult Events',
    type: 'community',
    date: 'Ongoing',
    description: 'Worship and ministry at youth gatherings and retreats.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Patrick brings a rare combination of authenticity and excellence. His multilingual worship creates a bridge that unites our congregation in a powerful way.',
    author: 'Pastor James M.',
    role: 'Senior Pastor',
    organization: 'Edmonton Community Church',
  },
  {
    id: '2',
    quote: 'Working with Patrick for our conference was seamless. He is professional, prepared, and his heart for worship is evident in every moment.',
    author: 'Sarah K.',
    role: 'Worship Director',
    organization: 'Prairie Worship Collective',
  },
  {
    id: '3',
    quote: 'His ability to lead in Kinyarwanda, English, and French in one service was transformative for our diverse community. Highly recommend.',
    author: 'Rev. David L.',
    role: 'Event Organizer',
    organization: 'Multicultural Ministry Network',
  },
]

export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/byishimopatrick1/', icon: 'instagram' },
  { platform: 'Facebook', url: 'https://www.facebook.com/byishimo.patrick.10', icon: 'facebook' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@patrickbyishimooffical', icon: 'youtube' },
  { platform: 'Spotify', url: '#', icon: 'spotify', comingSoon: true },
]

export const bioParagraphs = [
  'Patrick Byishimo is a Gospel artist, worship leader, and songwriter based in Edmonton, Canada. Born in Rwanda, his artistic roots are deeply connected to East African worship traditions while his ministry has expanded across North America.',
  'After settling in Canada, Patrick has dedicated his craft to multilingual worship—leading and writing in Kinyarwanda, English, and French. His music blends contemporary Gospel and worship with Afro-influenced sounds, creating a distinct voice that resonates across cultures.',
  'His artistic evolution reflects a commitment to professional standards: from local church ministry to conference stages, live streams, and recorded releases. Patrick is actively building a body of work that serves the global Church and positions him for international visibility.',
  'His vision centers on cultural bridge-building: uniting Rwandan and Canadian communities through worship, and scaling his music to reach Francophone and Anglophone audiences worldwide with excellence and integrity.',
]

export const visionPoints = [
  {
    title: 'Multilingual Worship',
    description: 'A steadfast commitment to leading and creating worship in Kinyarwanda, English, and French, so that diverse congregations can encounter God in their heart language.',
  },
  {
    title: 'Cultural Bridge',
    description: 'Intentional ministry that connects Rwanda and Canada—honoring heritage while serving the Church in both nations and the diaspora.',
  },
  {
    title: 'Community-Centered Ministry',
    description: 'Local church engagement, youth ministry, and community events remain at the core of his calling, with growth that stays rooted in relationship.',
  },
  {
    title: 'International Scale',
    description: 'A clear direction toward scaling music and ministry internationally—through releases, collaborations, and platforms that extend reach while maintaining artistic and spiritual integrity.',
  },
  {
    title: 'Excellence & Professional Standards',
    description: 'A passion for excellence in songwriting, production, and live delivery—so that Gospel music is presented at a level that honors the message and the audience.',
  },
  {
    title: 'Partnership & Collaboration',
    description: 'Building with churches, fellow artists, and ministries—collaboration that strengthens the body of Christ and amplifies Gospel witness across cultures and borders.',
  },
]

export const pressKit = {
  shortBio: 'Patrick Byishimo is a Rwanda-born, Edmonton-based Gospel artist, worship leader, and songwriter. He leads and creates worship in Kinyarwanda, English, and French, blending contemporary Gospel with Afro-influenced sounds.',
  genre: 'Gospel / Worship / Afro-influenced',
  businessName: 'Patrick Byishimo Music',
  businessType: 'Gospel Music production, publishing & entertainment services',
  location: '7412 174 Avenue NW, Edmonton, Alberta, Canada',
  contactEmail: 'contact@byishimomusic.com',
  phone: '+1 (780) 200-9912',
  techRiderNote: 'Technical rider available upon request.',
  stageRequirementsNote: 'Stage and production requirements provided with booking confirmation.',
}
