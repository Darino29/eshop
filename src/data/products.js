export const products = [
  {
    id: 'clutch',
    eyebrow: 'Signature',
    name: 'La Clutch Rotin',
    category: 'Clutch',
    shortDesc: 'Cuir cognac & rotin tressé, poignée découpée. Élégance naturelle.',
    description:
      "Une alliance audacieuse du cuir tanné à la main et du rotin tressé traditionnel. La découpe rectangulaire en guise de poignée révèle un savoir-faire unique, entre modernité et héritage artisanal.",
    specs: [
      { label: 'Matière',   value: 'Cuir pleine fleur & rotin naturel' },
      { label: 'Coloris',   value: 'Cognac / Naturel' },
      { label: 'Fermeture', value: 'Aimant dissimulé' },
      { label: 'Format',    value: 'Clutch / Pochette' },
    ],
    images: {
      main:   '/images/sac1.png',
      thumb1: '/images/sac2.png',
      thumb2: '/images/sac3.png',
    },
    theme: 'dark',
    placeholderTheme: 'brown',
  },
  {
    id: 'box',
    eyebrow: 'Iconique',
    name: 'La Box Bag',
    category: 'Sac à main',
    shortDesc: 'Structure boîte en cuir crème, rotin & hardware doré. Jour comme soir.',
    description:
      "Structure architecturale, élégance naturelle. Ce sac boîte marie le cuir lisse crème au rotin tressé, avec une quincaillerie dorée qui sublime chaque détail. Polyvalent : anse courte ou bandoulière amovible pour tous les styles.",
    specs: [
      { label: 'Matière',   value: 'Cuir pleine fleur & rotin naturel' },
      { label: 'Coloris',   value: 'Crème / Naturel' },
      { label: 'Fermeture', value: 'Tourniquets dorés' },
      { label: 'Anses',     value: 'Anse courte + bandoulière amovible' },
    ],
    images: {
      main:   '/images/sac4.png',
      thumb1: '/images/sac5.png',
      thumb2: '/images/sac1.png',
    },
    theme: 'light',
    placeholderTheme: 'cream',
  },
]
