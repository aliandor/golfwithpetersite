const Icons = {
  group:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548271055/GolfWithPeter/noun_group_1187700.svg',
  golfer:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548271055/GolfWithPeter/noun_golfer_1946299.svg',
  clubs:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548271054/GolfWithPeter/noun_Golf_1642174.svg',
  timer:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548271054/GolfWithPeter/noun_timer_1642171.svg',
  cart:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548271053/GolfWithPeter/noun_Golf_Cart_999169.svg',
  club_ball:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548271053/GolfWithPeter/noun_Golf_1683855.svg',
  bag:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548271053/GolfWithPeter/noun_Golf_bag_1648559.svg',
  score:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548271051/GolfWithPeter/noun_golf_score_1627772.svg',
  cert:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548271051/GolfWithPeter/noun_golf_certificate_1022384.svg',
}

export const Individual = {
  img:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,w_auto/v1549322970/GolfWithPeter/F78C4A8B-BE0C-4A20-BB0E-5A9BC46477C9.jpg',
  price: '$55',
  type: 'Adult',
  desc:
    'This one-on-one session gives you coach Peter’s undivided attention to help you improve on the areas you want to work on.',
  icons: [
    {
      icon: Icons.golfer,
      text: 'One-on-one coaching',
    },
    {
      icon: Icons.timer,
      text: '30 min sessions',
    },
    {
      icon: Icons.club_ball,
      text: 'flightScope improvment',
    },
    {
      icon: Icons.score,
      text: 'improve your score',
    },
  ],
}

export const Junior = {
  img:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/w_auto,f_auto,q_auto:best/v1549961135/GolfWithPeter/3294.jpg',
  price: '$45',
  type: 'Junior',
  desc:
    'No matter the skill level of your junior golfer, coach Peter will design a framework to get you the results you desire.',
  icons: [
    {
      icon: Icons.golfer,
      text: 'One-on-one coaching',
    },
    {
      icon: Icons.timer,
      text: '30 min sessions',
    },
    {
      icon: Icons.club_ball,
      text: 'flightScope improvment',
    },
    {
      icon: Icons.clubs,
      text: 'all skill levels welcome',
    },
  ],
}

export const Group = {
  img:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto,w_auto/v1548745026/GolfWithPeter/activity-background-bags-424766.jpg',
  price: '$120',
  type: 'Group',
  desc:
    'This special group package lets you and your golf crew play and learn together with coach Peter.',
  icons: [
    {
      icon: Icons.group,
      text: '6 person max',
    },
    {
      icon: Icons.timer,
      text: '60 min sessions',
    },
    {
      icon: Icons.score,
      text: 'Improve your score',
    },
    {
      icon: Icons.bag,
      text: 'Learn together',
    },
  ],
}

export const BagMapping = {
  img:
    'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto,w_auto/v1558468279/GolfWithPeter/bag-mapping.jpg',
  price: '$95',
  type: 'Bag Mapping',
  desc:
    'This session allows you to figure out your actual carry distances: the most important number you need to know to play solid golf. No more guesswork; just numbers. ',
  icons: [
    {
      icon: Icons.golfer,
      text: 'One-on-one coaching',
    },
    {
      icon: Icons.timer,
      text: '75 min session',
    },
    {
      icon: Icons.score,
      text: 'Improve your score',
    },
    {
      icon: Icons.bag,
      text: 'Improve your game',
    },
  ],
}
