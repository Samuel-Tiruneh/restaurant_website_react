import images from './images';

const wines = [
  {
    title: 'Budweiser',
    price: '$56',
    tags: '1000 ml',
  },
  {
    title: 'Tsingtao',
    price: '$59',
    tags: '850 ml',
  },
  {
    title: 'Heinkenen',
    price: '$44',
    tags: '750 ml',
  },
  {
    title: 'Bud Light',
    price: '$31',
    tags: '750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: '750 ml',
  },
];

const Meals = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Special',
    
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Special',
    
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Special',

  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Special',
    
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Special',
   
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Quality Service',
    subtitle: 'Services Matter',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Level-3 Restaurants Compitation',
  },
  {
    imgUrl: images.award05,
    title: 'Good Hospitality',
    subtitle: 'Given by customer vote',
  },
  {
    imgUrl: images.award03,
    title: 'Number one Chef',
    subtitle: '2022 Chef Award',
  },
];

export default { wines, Meals, awards };
