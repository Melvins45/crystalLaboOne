const rdv = '/rdv'
const results = '/results'
const innov = '/innovation_of_crystal_labo'

export const header_pages = [
  {
    name: 'specialities',
    title: 'Nos spécialités',
    sub: 0,
    separate: false,
    slug: '/'
  },
  {
    name: 'parisotology',
    title: 'Parisotologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/parisotology'
  },
  {
    name: 'bacteriology',
    title: 'Bactériologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/bacteriology'
  },
  {
    name: 'biochemistry',
    title: 'Biochimie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/biochemistry'
  },
  {
    name: 'immuno-serology',
    title: 'Immuno-sérologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/immuno-serology'
  },
  {
    name: 'hematology',
    title: 'Hématologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/hematology'
  },
  {
    name: 'hormonology',
    title: 'Hormonologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/hormonology'
  },
  {
    name: 'anatomopathology',
    title: 'Anatomopathologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/anatomopathology'
  },
  {
    name: 'medical_imaging',
    title: 'Imagerie médicale',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/medical_imaging'
  },
  {
    name: 'know_us',
    title: 'Nous connaître',
    sub: 0,
    separate: false,
    slug: '/'
  },
  {
    name: 'who_are_us',
    title: 'Qui sommes nous ?',
    sub: 1,
    separate: false,
    parent: 'know_us',
    slug: '/who_are_us'
  },
  {
    name: 'innovation_crystal_labo',
    title: "L'innovation de Crystal Labo",
    sub: 1,
    separate: false,
    parent: 'know_us',
    slug: innov
  },
  {
    name: 'quality_engagement',
    title: 'Nos engagements qualité',
    sub: 1,
    separate: false,
    parent: 'know_us',
    slug: '/quality_engagement'
  },
  {
    name: 'join_us',
    title: 'Nous rejoindre',
    sub: 1,
    separate: true,
    parent: 'know_us',
    slug: '/join_us'
  },
  {
    name: 'services',
    title: 'Nos services',
    sub: 0,
    separate: false,
    slug: '/'
  },
  {
    name: 'rdv_online',
    title: 'Votre prise de RDV en ligne',
    sub: 1,
    separate: false,
    parent: 'services',
    slug: rdv
  },
  {
    name: 'results',
    title: "Vos résultats d'examen en ligne",
    sub: 1,
    separate: false,
    parent: 'services',
    slug: results
  },
  {
    name: 'my_labo',
    title: "Mon laboratoire 24h24 - 7j7",
    sub: 1,
    separate: false,
    parent: 'services',
    slug: '/my_labo'
  },
  {
    name: 'take_rdv',
    title: 'Prendre un rendez-vous',
    sub: 0,
    separate: false,
    slug: '/services'+rdv
  },
  {
    name: 'contact_us',
    title: 'Nous contacter',
    sub: 0,
    separate: false,
    slug: '/contact_us'
  }
]

export const footer_pages = [
  {
    name: 'specialities',
    title: 'Nos spécialités',
    sub: 0,
    separate: false,
    slug: '/'
  },
  {
    name: 'parisotology',
    title: 'Parisotologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/parisotology'
  },
  {
    name: 'bacteriology',
    title: 'Bactériologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/bacteriology'
  },
  {
    name: 'biochemistry',
    title: 'Biochimie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/biochemistry'
  },
  {
    name: 'immuno-serology',
    title: 'Immuno-sérologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/immuno-serology'
  },
  {
    name: 'hematology',
    title: 'Hématologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/hematology'
  },
  {
    name: 'hormonology',
    title: 'Hormonologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/hormonology'
  },
  {
    name: 'anatomopathology',
    title: 'Anatomopathologie',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/anatomopathology'
  },
  {
    name: 'medical_imaging',
    title: 'Imagerie médicale',
    sub: 1,
    separate: false,
    parent: 'specialities',
    slug: '/medical_imaging'
  },
  {
    name: 'services',
    title: 'Nos services',
    sub: 0,
    separate: false,
    slug: '/'
  },
  {
    name: 'rdv_online',
    title: 'Rendez-vous en ligne',
    sub: 1,
    separate: false,
    parent: 'services',
    slug: rdv
  },
  {
    name: 'rdv_at_house',
    title: 'Rendez-vous à domicile',
    sub: 1,
    separate: false,
    parent: 'services',
    slug: rdv+'#rdv_at_house'
  },
  {
    name: 'urgences',
    title: 'Urgences 24h24',
    sub: 1,
    separate: false,
    parent: 'services',
    slug: '/urgences'
  },
  {
    name: 'results',
    title: 'Résultats en ligne',
    sub: 1,
    separate: false,
    parent: 'services',
    slug: results
  },
  {
    name: 'my_labo_online',
    title: 'Mon laboratoire en ligne',
    sub: 1,
    separate: false,
    parent: 'services',
    slug: '/my_labo'
  },
  {
    name: 'faq',
    title: 'FAQ',
    sub: 0,
    separate: false,
    slug: '/'
  },
  {
    name: 'before_exam',
    title: "Avant l'examen",
    sub: 1,
    separate: false,
    parent: 'faq',
    slug: '#before_exam'
  },
  {
    name: 'between_exam',
    title: "Déroulement de l'examen",
    sub: 1,
    separate: false,
    parent: 'faq',
    slug: '#between_exam'
  },
  {
    name: 'retrieve_results',
    title: "Récupérer vos résultats",
    sub: 1,
    separate: false,
    parent: 'faq',
    slug: '#retrieve_results'
  },
  {
    name: 'take_rdv_at_house',
    title: "Prise de rendez-vous à domicile",
    sub: 1,
    separate: false,
    parent: 'faq',
    slug: '#take_rdv_at_house'
  },
  {
    name: 'facturation',
    title: "Facturation",
    sub: 1,
    separate: false,
    parent: 'faq',
    slug: '#facturation'
  },
  {
    name: 'know_us',
    title: "À propos de nous",
    sub: 0,
    separate: false,
    slug: '/'
  },
  {
    name: 'who_are_us',
    title: 'Qui sommes nous ?',
    sub: 1,
    separate: false,
    parent: 'know_us',
    slug: '/who_are_us'
  },
  {
    name: 'innovation_crystal_labo',
    title: "L'innovation de Crystal Labo",
    sub: 1,
    separate: false,
    parent: 'know_us',
    slug: innov
  },
  {
    name: 'quality_engagement',
    title: 'Nos engagements qualité',
    sub: 1,
    separate: false,
    parent: 'know_us',
    slug: '/quality_engagement'
  }
]
