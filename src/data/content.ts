import type { Track, Highlight, Testimonial, SocialLink, NavLink, Partnership } from '../types'

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
  tagline: 'Multilingual Folk & World Artist · Award-Winning Songwriter · Energetic Performer',
  mission: 'Multilingual folk and world music that brings people together through storytelling, cultural experience, and acoustic expression.',
  heroSummary: 'Patrick Byishimo is a multilingual folk and world music artist, award-winning songwriter, and energetic performer based in Edmonton, Canada. Originally from the Democratic Republic of Congo, Patrick\'s musical journey began in East Africa and continued in Canada, where he has developed a distinctive voice rooted in storytelling, cultural experience, and acoustic expression.',
  location: '7412 174 Avenue NW, Edmonton, Alberta, Canada',
  email: 'contact@byishimomusic.com',
  phone: '+1 (780) 200-9912',
  businessName: 'Patrick Byishimo Music',
  businessType: 'Folk & World Music production, publishing & entertainment services',
}

/** Main header nav: 5 items. Other pages linked from Home and footer. */
export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Music', href: '/music' },
  { label: 'Experience', href: '/experience' },
  { label: 'Booking', href: '/booking' },
]

/** Footer: main nav + Concerts, Partnerships (no longer in header) */
export const footerNavLinks: NavLink[] = [
  ...navLinks,
  { label: 'Concerts', href: '/concerts' },
  { label: 'Partnerships', href: '/partnerships' },
]

/** Replace with actual artist/song URLs when available. Only major platforms: YouTube, Spotify, Apple Music, Audiomack. */
const defaultStreamingLinks = [
  { platform: 'Spotify', url: 'https://open.spotify.com/artist/6urriaUMgoR9Z9VMZ7Ptbp' },
  { platform: 'Apple Music', url: 'https://music.apple.com/us/album/ndakwizeye-single/1881205558' },
  { platform: 'YouTube Music', url: 'https://www.youtube.com/@patrickbyishimooffical' },
  { platform: 'Audiomack', url: '#' },
]

export const tracks: Track[] = [
  {
    id: '1',
    title: 'Faithful God',
    description: 'A declaration of God’s faithfulness in worship, inviting hearts to trust and praise.',
    releaseDate: '2024',
    youtubeId: '27RYulXhJcY',
    streamingLinks: defaultStreamingLinks,
  },
  {
    id: '2',
    title: 'Umurunga',
    description: 'Multilingual worship honoring heritage and the heart of global praise.',
    releaseDate: '2024',
    youtubeId: 'z3a3DZHming',
    streamingLinks: defaultStreamingLinks,
  },
  {
    id: '3',
    title: 'Ndakwizeye',
    description: 'A song of faith and confidence in God, connecting language and culture through worship.',
    releaseDate: '2024',
    youtubeId: 'Gv9vo44oxPg',
    streamingLinks: defaultStreamingLinks,
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
    title: 'International Worship Conference',
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
    description: 'Regular worship leading across congregations.',
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
    quote: 'Patrick brings a rare combination of authenticity and excellence. His worship creates a bridge that unites our congregation in a powerful way.',
    author: 'Stephen London',
    role: 'Bishop',
    organization: 'Anglican Diocese of Edmonton',
  },
  {
    id: '2',
    quote: 'Working with Patrick for our conference was seamless. He is professional, prepared, and his heart for worship is evident in every moment.',
    author: 'Rev. Jonathan Crane',
    role: 'Archdeacon',
    organization: 'Anglican Diocese of Edmonton',
  },
  {
    id: '3',
    quote: 'His ability to lead across languages in one service was transformative for our diverse community. Highly recommend for international events.',
    author: 'Stevon Artis',
    role: 'Singer, Producer, Audio & Video Production Engineer',
    organization: undefined,
  },
]

export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/byishimopatrick1/', icon: 'instagram' },
  { platform: 'Facebook', url: 'https://www.facebook.com/byishimo.patrick.10', icon: 'facebook' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@patrickbyishimooffical', icon: 'youtube' },
  { platform: 'Spotify', url: 'https://open.spotify.com/artist/6urriaUMgoR9Z9VMZ7Ptbp', icon: 'spotify' },
]

export const bioParagraphs = [
  'Patrick Byishimo (pronounced Bee-YEE-shee-mo, meaning "happy") is a performing artist, songwriter, and instrumentalist from the Democratic Republic of Congo, now based in Edmonton, Alberta.',
  'His musical journey began in a refugee camp in Nairobi, Kenya, where he started singing at age ten and received a year of musical mentorship with support from the United Nations Refugee Agency and the Danish Refugee Council. There, he learned to play the piano, guitar, and percussion, while also developing his skills as a songwriter.',
  'After relocating to Canada, Patrick continued to develop his musical talents through performance, collaboration, and community involvement. His work incorporates folk, world, and community music traditions, expressed in multiple languages including Kinyarwanda, Swahili, French, and English.',
  'Patrick\'s songs reflect rich cultural narratives and personal experience, and his live performances blend heartfelt engagement with vibrant musicality. He has shared stages with artists from diverse backgrounds and continues to pursue opportunities that expand his artistic reach and audience connection.',
]

export const visionPoints = [
  {
    title: 'Global Gospel Reach',
    description: 'A steadfast commitment to taking Gospel music and worship to international audiences—concerts, festivals, conferences, and digital platforms.',
  },
  {
    title: 'Multilingual Worship',
    description: 'Leading and creating worship in multiple languages so that diverse congregations worldwide can encounter God in their heart language.',
  },
  {
    title: 'Professional Standards',
    description: 'Excellence in songwriting, production, and live delivery—Gospel music presented at a level that honors the message, the audience, and partners.',
  },
  {
    title: 'International Partnerships',
    description: 'Building with churches, labels, promoters, and ministries—collaboration that extends reach and amplifies Gospel witness across borders.',
  },
  {
    title: 'Business-Ready Ministry',
    description: 'Patrick Byishimo Music operates as a registered business—positioned for grants, ticketing, licensing, and sustainable international ministry.',
  },
  {
    title: 'Community & Church Engagement',
    description: 'Local and global church engagement, youth ministry, and events remain at the core, with growth that stays rooted in relationship and impact.',
  },
]

export const pressKit = {
  shortBio: 'Patrick Byishimo (pronounced Bee-YEE-shee-mo, meaning "happy") is a performing artist, songwriter, and instrumentalist from the Democratic Republic of Congo, now based in Edmonton, Alberta. His music blends folk, world, and community traditions with lyrical storytelling in multiple languages including Kinyarwanda, Swahili, French, and English.',
  genre: 'Folk / World / Community / Multilingual',
  businessName: 'Patrick Byishimo Music',
  businessType: 'Folk & World Music production, publishing & entertainment services',
  location: '7412 174 Avenue NW, Edmonton, Alberta, Canada',
  contactEmail: 'contact@byishimomusic.com',
  phone: '+1 (780) 200-9912',
  techRiderNote: 'Technical rider available upon request.',
  stageRequirementsNote: 'Stage and production requirements provided with booking confirmation.',
}

export const partnerships: Partnership[] = [
  {
    id: '1',
    name: 'Church & Ministry Touring',
    type: 'Touring & Events',
    description: 'Structured partnerships with churches and ministries for worship nights, conferences, and multi-date runs. Inquiries welcome.',
    status: 'incoming',
  },
  {
    id: '2',
    name: 'Festival & Concert Booking',
    type: 'Live Events',
    description: 'Partnerships with Gospel festivals and concert promoters for main-stage and featured artist slots.',
    status: 'incoming',
  },
  {
    id: '3',
    name: 'Label & Distribution',
    type: 'Music',
    description: 'Exploring label and distribution partnerships for future releases and catalog expansion.',
    status: 'incoming',
  },
  {
    id: '4',
    name: 'Grant & Funding Programs',
    type: 'Funding',
    description: 'Open to grant programs and funding partners supporting Gospel music and international ministry.',
    status: 'incoming',
  },
]
