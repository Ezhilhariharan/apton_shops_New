import { ICONS } from '../../../assets/icons';

export const dashboardBrand = [
  {
    id: 1,
    title: 'Let’s setup brand',
    description: 'Setup a brand for your account and kick-start your growth journey.',
    active: true,
    paragraphLeft: '15px',
  },
  {
    id: 2,
    title: 'Connect your channels',
    description: 'Establish connection with your social channels suitable to grow your business.',
    active: false,
    paragraphLeft: '18px',
  },
  {
    id: 3,
    title: 'Let’s create your fav post.',
    description: 'See how your content looks and sounds to your audience.',
    active: false,
    paragraphLeft: '18px',
  },
  {
    id: 4,
    title: 'Be a part of our growth community.',
    description: 'Join & get access to one of the biggest growth community of Industry experts.',
    active: false,
    paragraphLeft: '15px',
  },
];

export const dashboardBrandStep1Card = [
  {
    id: 1,
    title: 'Yes',
    content: 'I have an existing brand',
    image: ICONS.smileyHappyIcon,
    selected: false,
  },
  {
    id: 2,
    title: 'No',
    content: 'I would like to create a new one',
    image: ICONS.smileyHappyPlusIcon,
    selected: false,
  },
];

export const channels = [
  {
    id: 1,
    icon: ICONS.circleFacebook,
    channelName: 'Facebook',
    category: 'Page',
  },
  {
    id: 2,
    icon: ICONS.circleInstagram,
    channelName: 'Instagram',
    category: 'Business',
  },
  {
    id: 3,
    icon: ICONS.circleLinkdin,
    channelName: 'Linkdin',
    category: 'Page',
  },
  {
    id: 8,
    icon: ICONS.circleLinkdin,
    channelName: 'Linkdin Profile',
    category: 'Profile',
  },
  {
    id: 4,
    icon: ICONS.circleYoutube,
    channelName: 'Youtube',
    category: 'Page',
  },
  {
    id: 5,
    icon: ICONS.circleTwitterX,
    channelName: 'Twitter',
    category: 'Page',
  },
  {
    id: 6,
    icon: ICONS.circlePinterest,
    channelName: 'Pinterest',
    category: 'Page',
  },
  {
    id: 7,
    icon: ICONS.circleTiktok,
    channelName: 'Tiktok',
    category: 'Page',
  },
];

export const Step2Channel = [
  {
    id: 1,
    title: 'Facebook',
    content: 'Page',
    image: ICONS.facebookSquareIcon,
  },
  {
    id: 2,
    title: 'Instagram',
    content: 'Business',
    image: ICONS.instagramSquareIcon,
  },
  {
    id: 3,
    title: 'Youtube',
    content: 'Profile',
    image: ICONS.yotubeSquareIcon,
  },
  {
    id: 4,
    title: 'Linkedin',
    content: 'Page',
    image: ICONS.linkedinSquareIcon,
  },
  {
    id: 5,
    title: 'Twitter',
    content: 'Profile',
    image: ICONS.twitterSquareIcon,
  },
  {
    id: 6,
    title: 'Tik Tok',
    content: 'Profile',
    image: ICONS.tiktokIcon,
  },
  {
    id: 7,
    title: 'Pinterest',
    content: 'Board',
    image: ICONS.pinterestSquareIcon,
  },
];

export const brandCategory = [
  {
    id: 1,
    icon: ICONS?.BillingMedicalIcon,
    value: 'Pharmacy & Medical Care',
    selected: false,
  },
  {
    id: 2,
    icon: ICONS?.BillingStoreIcon,
    value: 'Retail Industry',
    selected: false,
  },
  {
    id: 3,
    icon: ICONS?.BillingCartIcon,
    value: 'E-Commerce',
    selected: false,
  },
  {
    id: 4,
    icon: ICONS?.BillingCreatorIcon,
    value: 'Digital Agencies',
    selected: false,
  },
  {
    id: 5,
    icon: ICONS?.BillingCreatorIcon,
    value: 'Creator / Influencers',
    selected: false,
  },
  {
    id: 6,
    icon: ICONS?.BillingVideoIcon,
    value: 'Media Production',
    selected: false,
  },
  {
    id: 7,
    icon: ICONS?.BillingOtherIcon,
    value: 'Other',
    selected: false,
  },
];

export const postPerformance = [
  {
    id: 1,
    name: 'Image Quality',
    icon: ICONS?.imageQuality,
    color: '#25C277',
    percentage: 95,
    activeReaction: 'Good',
    status: [
      {
        id: 1,
        statusIcon: ICONS?.smileyHappy,
        reaction: 'Good',
        statusColor: '#25C277',
      },
      {
        id: 2,
        statusIcon: ICONS?.smileyNeutral,
        reaction: ' Average',
        statusColor: '#F6A723',
      },
      {
        id: 3,
        statusIcon: ICONS?.smileySad,
        reaction: 'Poor',
        statusColor: '#F96056',
      },
    ],
  },
  {
    id: 2,
    name: 'Plagiarism',
    icon: ICONS?.plagiarism,
    color: '#F96056',
    percentage: 85,
    activeReaction: 'Identical',
    status: [
      {
        id: 1,
        statusIcon: ICONS?.smileyHappy,
        reaction: 'Unique',
        statusColor: '#25C277',
      },
      {
        id: 2,
        statusIcon: ICONS?.smileyNeutral,
        reaction: ' Average',
        statusColor: '#F6A723',
      },
      {
        id: 3,
        statusIcon: ICONS?.smileySad,
        reaction: 'Identical',
        statusColor: '#F96056',
      },
    ],
  },
  {
    id: 3,
    name: 'Readability',
    icon: ICONS?.readability,
    color: '#F6A723',
    percentage: 48,
    activeReaction: 'Complex',
    status: [
      {
        id: 1,
        statusIcon: ICONS?.smileyHappy,
        reaction: 'Good',
        statusColor: '#25C277',
      },
      {
        id: 2,
        statusIcon: ICONS?.smileyNeutral,
        reaction: 'Complex',
        statusColor: '#F6A723',
      },
      {
        id: 3,
        statusIcon: ICONS?.smileySad,
        reaction: 'Poor',
        statusColor: '#F96056',
      },
    ],
  },
  {
    id: 4,
    name: 'Overall Score',
    icon: ICONS?.overAllScore,
    color: '#F6A723',
    percentage: 53,
    activeReaction: 'Average',
    status: [
      {
        id: 1,
        statusIcon: ICONS?.smileyHappy,
        reaction: 'Good',
        statusColor: '#25C277',
      },
      {
        id: 2,
        statusIcon: ICONS?.smileyNeutral,
        reaction: 'Average',
        statusColor: '#F6A723',
      },
      {
        id: 3,
        statusIcon: ICONS?.smileySad,
        reaction: 'Poor',
        statusColor: '#F96056',
      },
    ],
  },
];

export const Step3CreatePost = [
  {
    id: 1,
    icon: ICONS?.circleFacebook,
  },
  {
    id: 2,
    icon: ICONS?.circleInstagram,
  },
  {
    id: 3,
    icon: ICONS?.circleYoutube,
  },
];

export const Step1Results = [
  {
    id: 1,
    icon: ICONS?.starResultIcon,
    content: 'New era chicken',
  },
  {
    id: 2,
    icon: ICONS?.foodAndHealthIcon,
    content: 'Food & Health',
  },
];

export const Step2Results = [
  {
    id: 1,
    icon: ICONS?.circleFacebook,
    content: 'Facebook',
  },
  {
    id: 2,
    icon: ICONS?.circleInstagram,
    content: 'Instagram',
  },
  {
    id: 3,
    icon: ICONS?.circleYoutube,
    content: 'Youtube',
  },
];
