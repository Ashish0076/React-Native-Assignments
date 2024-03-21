const DATA = [
  {
    id: '1',
    title: 'First post',
    profilePicture: 'https://avatars.githubusercontent.com/u/115460278?v=4',
    image:
      'https://media.licdn.com/dms/image/D5622AQFiFziEQWDoyw/feedshare-shrink_800/0/1710562474875?e=1713398400&v=beta&t=e0Y3rFvPLBSliQcao9zse7UyxGd_EyI0PB4c_eE_tB8',
    text: 'Urgently #hiring Frontend Engineers for Internship!!! Building prospecta with AI. We are looking for someone into VueJS, CSS, HTML, JS. Please share it with someone who may need it. Comment or DM me.',
  },
  {
    id: '2',
    title: 'Second post',
    profilePicture: 'https://avatars.githubusercontent.com/u/119392323?v=4',
    image:
      'https://media.licdn.com/dms/image/D5622AQHaZ8l-MIuK7Q/feedshare-shrink_800/0/1711009680966?e=1714003200&v=beta&t=SSCQaAAvBbjx0kVJTxcO8jIpwh-4xBqRUJ1pok6W6GI',
    text: 'Cheers to Microsoft for being named in the Unstop E-School Dream Companies 2024 at rank 2nd - Your vision and commitment have made you a dream employer for many E-School Students!',
  },
  {
    id: '3',
    title: 'Third post',
    profilePicture: 'https://avatars.githubusercontent.com/u/119392709?v=4',
    image:
      'https://media.licdn.com/dms/image/D5622AQG3yDE8AoOu2w/feedshare-shrink_800/0/1710861662396?e=1714003200&v=beta&t=S7OfDreIUVq-PX-tc1HE0f4PU_gUySXXcMrNtsWe4Sc',
    text: `If you've grown up reading books, it's highly unlikely that you would need an introduction to this wonderful man! To me, Ruskin Bond is my childhood hero, inspiration, and also a grandpa figure.`,
  },
  {
    id: '4',
    title: 'fourth post',
    profilePicture: 'https://avatars.githubusercontent.com/u/112796706?v=4',
    image:
      'https://media.licdn.com/dms/image/D4D22AQEfaznSsDP7OQ/feedshare-shrink_800/0/1710493739475?e=1714003200&v=beta&t=dPBd-Q_7k25PE4UA1DclZBs8iyupk8_gbzuTjccaKZE',
    text: `It's been a pleasure to connect with so many Oracle users and partners at #CloudWorldLondon! Learn more about why Opkey is the number 1️⃣ rated app in the Oracle Cloud Marketplace.`,
  },
  {
    id: '5',
    title: 'Fivth post',
    profilePicture: 'https://avatars.githubusercontent.com/u/115461280?v=4',
    image:
      'https://media.licdn.com/dms/image/D5622AQFPoQMw0Cz9Xw/feedshare-shrink_800/0/1710719739121?e=1714003200&v=beta&t=RWouh_Xo1Bg-h0mLKk653EKFlNKCTsHOpFpqjrdgvLQ',
    text: 'Removing unused code is like pruning a tree, it promotes growth and prevents the codebase from becoming overgrown and unwieldy ',
  },
  {
    id: '1',
    title: 'First post',
    profilePicture: 'https://avatars.githubusercontent.com/u/115460278?v=4',
    image:
      'https://media.licdn.com/dms/image/D5622AQFiFziEQWDoyw/feedshare-shrink_800/0/1710562474875?e=1713398400&v=beta&t=e0Y3rFvPLBSliQcao9zse7UyxGd_EyI0PB4c_eE_tB8',
    text: 'Urgently #hiring Frontend Engineers for Internship!!! Building prospecta with AI. We are looking for someone into VueJS, CSS, HTML, JS. Please share it with someone who may need it. Comment or DM me.',
  },
  {
    id: '2',
    title: 'Second post',
    profilePicture: 'https://avatars.githubusercontent.com/u/119392323?v=4',
    image:
      'https://media.licdn.com/dms/image/D5622AQHaZ8l-MIuK7Q/feedshare-shrink_800/0/1711009680966?e=1714003200&v=beta&t=SSCQaAAvBbjx0kVJTxcO8jIpwh-4xBqRUJ1pok6W6GI',
    text: 'Cheers to Microsoft for being named in the Unstop E-School Dream Companies 2024 at rank 2nd - Your vision and commitment have made you a dream employer for many E-School Students!',
  },
  {
    id: '3',
    title: 'Third post',
    profilePicture: 'https://avatars.githubusercontent.com/u/119392709?v=4',
    image:
      'https://media.licdn.com/dms/image/D5622AQG3yDE8AoOu2w/feedshare-shrink_800/0/1710861662396?e=1714003200&v=beta&t=S7OfDreIUVq-PX-tc1HE0f4PU_gUySXXcMrNtsWe4Sc',
    text: `If you've grown up reading books, it's highly unlikely that you would need an introduction to this wonderful man! To me, Ruskin Bond is my childhood hero, inspiration, and also a grandpa figure.`,
  },
  {
    id: '4',
    title: 'fourth post',
    profilePicture: 'https://avatars.githubusercontent.com/u/112796706?v=4',
    image:
      'https://media.licdn.com/dms/image/D4D22AQEfaznSsDP7OQ/feedshare-shrink_800/0/1710493739475?e=1714003200&v=beta&t=dPBd-Q_7k25PE4UA1DclZBs8iyupk8_gbzuTjccaKZE',
    text: `It's been a pleasure to connect with so many Oracle users and partners at #CloudWorldLondon! Learn more about why Opkey is the number 1️⃣ rated app in the Oracle Cloud Marketplace.`,
  },
  {
    id: '5',
    title: 'Fivth post',
    profilePicture: 'https://avatars.githubusercontent.com/u/115461280?v=4',
    image:
      'https://media.licdn.com/dms/image/D5622AQFPoQMw0Cz9Xw/feedshare-shrink_800/0/1710719739121?e=1714003200&v=beta&t=RWouh_Xo1Bg-h0mLKk653EKFlNKCTsHOpFpqjrdgvLQ',
    text: 'Removing unused code is like pruning a tree, it promotes growth and prevents the codebase from becoming overgrown and unwieldy ',
  },
];

export default DATA;
