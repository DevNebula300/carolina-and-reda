// Opening & invitation background
export const HERO_IMAGE = '/images/Image%201.jpg'

// Page-specific backgrounds to keep the same feel but vary imagery
export const PROGRAM_BG = '/images/Image%202.jpg'
export const RSVP_BG = '/images/Image%203.jpg'
export const ACCOMMODATIONS_BG = '/images/Image%204.jpg'
export const DISCOVER_BG = '/images/Image%205.jpg'
export const REGISTRY_BG = 'registry.JPG'
export const DRESSCODE_BG = '/images/Image%207.jpg'

export const MAP_LINK = 'https://maps.google.com/?q=Jnane+Rumi+Marrakech' // placeholder
export const RSVP_LINK = 'https://partiful.com/e/OjcXJQAjaLlHmtFaceLU?'
export const ADD_TO_CALENDAR_LINK = '#'

export type AccommodationItem = { name: string; url?: string }

export type AccommodationGroup = { title: string; items: AccommodationItem[] }

export const ACCOMMODATION_GROUPS: AccommodationGroup[] = [
  {
    title: 'Hotels in La Palmeraie',
    items: [
      {
        name: 'Jnane Tamsna',
        url: 'https://www.google.com/search?q=Jnane+Tamsna+Marrakech',
      },
      {
        name: 'Palais Ronsard',
        url: 'https://www.google.com/search?q=Palais+Ronsard+Relais+%26+Ch%C3%A2teaux+Marrakech',
      },
      {
        name: 'Les Deux Tours',
        url: 'https://www.google.com/search?q=Les+Deux+Tours+Marrakech',
      },
      {
        name: 'Bliss Terra Janna',
        url: 'https://www.google.com/search?q=bliss+terra+janna',
      },
      {
        name: 'Palais Namaskar',
        url: 'https://www.google.com/search?q=palais+namaskar',
      },
      {
        name: 'Les Palmiers Boutique Hôtel & Spa',
        url: 'https://www.google.com/search?q=les+palmiers+boutique+hotel+and+spa',
      },
      {
        name: 'Hotel Pavillon du Golf Palmeraie',
        url: 'https://www.google.com/search?q=Hotel+Pavillon+du+Golf+Palmeraie',
      },
    ],
  },
  {
    title: 'Hotels in Marrakech',
    items: [
      { name: 'Hotel Selman', url: 'https://www.selman-marrakech.com/' },
      { name: 'Hotel Mamounia', url: 'https://mamounia.com/fr/' },
      { name: "Hotel L'hivernage", url: 'https://www.hivernage-hotel.com/' },
      { name: 'CR7 Pestana' },
    ],
  },
  {
    title: 'Riads in the Medina',
    items: [
      { name: 'El fen', url: 'https://el-fenn.com/' },
      { name: 'Yasmine', url: 'https://www.riad-yasmine.com/fr/' },
      { name: 'Jardin secret', url: 'https://www.riadjardinsecret.com/' },
    ],
  },
]

export const DISCOVER_SPOTS = [
  {
    name: 'Café Bacha',
    desc: 'For a brunch that is truly an experience.',
    url: 'https://www.google.com/search?q=Caf%C3%A9+Bacha+Marrakech',
  },
  {
    name: 'Jardin Majorelle',
    desc: 'A botanical and artist-inspired landscape garden.',
    url: 'https://www.jardinmajorelle.com/',
  },
  {
    name: 'YSL Museum',
    desc: 'Yves Saint Laurent Museum. Be inspired by the YSL years in Marrakech.',
    url: 'https://www.museeyslmarrakech.com/',
  },
  {
    name: 'MACAAL',
    desc: 'For contemporary African art.',
    url: 'https://www.macaal.org/',
  },
  {
    name: 'Selman Hotel',
    desc: 'For horse lovers and a unique Sunday brunch',
    url: 'https://www.selman-marrakech.com/',
  },
  {
    name: 'Royal Mansour',
    desc: 'For a touch of Marrakech magic, stop by for a drink or spa treatment.',
    url: 'https://www.royalmansour.com/',
  },
  {
    name: 'Kabana Rooftop',
    desc: 'For a lunch in the medina',
    url: 'https://www.kabana-marrakech.com/',
  },
  {
    name: 'Les Jardins du Lotus',
    desc: 'One of our favourite dinner spots',
    url: 'https://www.google.com/search?q=Les+Jardins+du+Lotus+Marrakech',
  },
  {
    name: 'Baromètre',
    desc: 'Mixology, cuisine & time travel. For chats and signature cocktails.',
    url: 'https://www.google.com/search?q=Barom%C3%A8tre+Marrakech',
  },
]

// export const MOODBOARD_IMAGES = [
//   '/pinterest/3fd71fe20739aba0d5ae81ae60763720.jpg',
//   '/pinterest/download.jfif',
//   '/pinterest/download%20(1).jfif',
//   '/pinterest/download%20(2).jfif',
//   '/pinterest/download%20(3).jfif',
//   '/pinterest/download%20(4).jfif',
//   '/pinterest/download%20(5).jfif',
//   '/pinterest/download%20(6).jfif',
//   '/pinterest/download%20(7).jfif',
//   '/pinterest/download%20(8).jfif',
//   '/pinterest/download%20(9).jfif',
//   '/pinterest/download%20(10).jfif',
//   '/pinterest/download%20(11).jfif',
//   '/pinterest/download%20(12).jfif',
//   '/pinterest/download%20(13).jfif',
//   '/pinterest/download%20(14).jfif',
//   '/pinterest/download%20(15).jfif',
//   '/pinterest/download%20(16).jfif',
//   '/pinterest/download%20(17).jfif',
//   '/pinterest/download%20(18).jfif',
// ]

