import { ICONS } from '../../../assets/icons/index';

export const FilterList = [
  {
    id: 1,
    name: 'STATUS',
    subFilter: [
      {
        id: 1,
        icon: ICONS?.FilterHourglassIcon,
        Filter_name: 'Scheduled',
        
      },
      {
        id: 2,
        icon: ICONS?.FilterRoundTickIcon,
        Filter_name: 'Published',
      },
      {
        id: 3,
        icon: ICONS?.CloseCircle,
        Filter_name: 'Failed',
      },
    ],
  },
  {
    id: 2,
    name: 'CHANNELS',
    subFilter: [
      {
        id: 4,
        icon: ICONS?.circleFacebook,
        Filter_name: 'Facebook',
      },
      {
        id: 5,
        icon: ICONS?.circleInstagram,
        Filter_name: 'Instagram',
      },
      {
        id: 6,
        icon: ICONS?.Whatsapp,
        Filter_name: 'WhatsApp',
      },
      {
        id: 7,
        icon: ICONS?.circleLinkdin,
        Filter_name: 'LinkedIn',
      },
      {
        id: 8,
        icon: ICONS?.circleYoutube,
        Filter_name: 'YouTube',
      },
      {
        id: 9,
        icon: ICONS?.circlePinterest,
        Filter_name: 'Pinterest',
      },
      {
        id: 10,
        icon: ICONS?.circleTwitterX,
        Filter_name: 'Twitter',
      },
    ],
  },
];

  export const subFilter = [
      {
        id: 1,
        icon: ICONS?.circleFacebook,
        Filter_name: 'Facebook',
      },
      {
        id: 2,
        icon: ICONS?.circleInstagram,
        Filter_name: 'Instagram',
      },
      {
        id: 3,
        icon: ICONS?.Whatsapp,
        Filter_name: 'WhatsApp',
      },
      {
        id: 4,
        icon: ICONS?.circleLinkdin,
        Filter_name: 'LinkedIn',
      },
      {
        id: 5,
        icon: ICONS?.circleYoutube,
        Filter_name: 'YouTube',
      },
      {
        id: 6,
        icon: ICONS?.circlePinterest,
        Filter_name: 'Pinterest',
      },
      {
        id: 7,
        icon: ICONS?.circleTwitterX,
        Filter_name: 'Twitter',
      },
    ]
