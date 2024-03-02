import { ICONS } from '../../assets/icons/index.js';

export const navigationConst = [
  {
    id: 1,
    navName: 'Home',
    selected: false,
    routeUrl: '/user/home',
  },
  // {
  //   id: 2,
  //   navName: 'OKR',
  //   selected: false,
  //   routeUrl: '/user/okr',
  // },
  {
    id: 3,
    navName: 'Campaign',
    selected: false,
    routeUrl: '/user/campaign',
  },
  {
    id: 3,
    navName: 'Calender',
    selected: false,
    routeUrl: '/user/calender',
  },
  // {
  //   id: 4,
  //   navName: 'Task',
  //   selected: false,
  //   routeUrl: '/user/task',
  // },
  {
    id: 5,
    navName: 'Inbox',
    selected: false,
    routeUrl: '/user/inbox',
  },
  // {
  //   id: 6,
  //   navName: 'CRM',
  //   selected: false,
  //   routeUrl: '/user/crm',
  // },
  // {
  //   id: 7,
  //   navName: 'Reports',
  //   selected: false,
  //   routeUrl: '/user/reports',
  // },
  {
    id: 8,
    navName: 'Channels',
    selected: false,
    routeUrl: '/user/channels',
  },
];

export const profileBoxList = [
  {
    id: 1,
    icon: ICONS?.setting,
    name: 'Settings',
  },
  {
    id: 2,
    icon: ICONS?.logout,
    name: 'Logout',
  },
];

export const BrandWorkSpace = [
  {
    id: 1,
    name: 'Gochew Grill',
    title: 'Free plan',
    content: '2 members',
  },
  {
    id: 2,
    name: 'Natraj Weldshop',
    title: 'Free plan',
    content: '6 members',
  },
];
export const userConnectOption = [
  { id: 1, name: 'Sync', icon: ICONS?.LoopIcon },
  { id: 2, name: 'Configuration', icon: ICONS?.ToolIcon },
];
export const WHATSAPP_ACCOUNT = [
  {
    id: 1,
    name: 'Gochew Grill',
    title: 'secondary',
    desc: '9999333702',
    status: 'connected',
    statusColor: 'whatsappStatus',
    verified: true,
    isConnected: true,
  },
  {
    id: 2,
    name: 'Natraj Weldshop',
    title: 'primary',
    desc: '9999333702',
    status: 'connected',
    statusColor: 'whatsappStatus',
    isConnected: true,
  },
  {
    id: 3,
    name: 'Smith',
    title: 'Free plan',
    desc: '9999333702',
    status: 'connected',
    statusColor: 'whatsappStatus',
    isConnected: false,
  },
];

export const FACEBOOK_ACCOUNT = [
  {
    id: 1,
    name: 'Gochew Grill',
    title: 'secondary',
    status: 'page',
    statusColor: 'facebookStatus',
    isConnected: true,
  },
];
export const FACEBOOK_GROUP_ACCOUNT = [
  {
    id: 1,
    name: 'Gochew Grill',
    status: 'group',
    statusColor: 'facebookStatus',
    isConnected: true,
  },
];
export const INSTAGRAM_ACCOUNT = [
  {
    id: 1,
    name: 'Gochew Grill',
    status: 'business',
    statusColor: 'facebookStatus',
    isConnected: true,
  },
];
export const PINTEREST_ACCOUNT = [
  {
    id: 1,
    name: 'Gochew Grill',
    status: 'profile',
    statusColor: 'pinterestStatus',
    desc: 'board',
    isConnected: true,
  },
];
export const TWITTER_ACCOUNT = [
  {
    id: 1,
    name: 'Gochew Grill',
    statusColor: 'twitterStatus',
  },
];
export const LINKEDIN_ACCOUNT = [
  {
    id: 1,
    name: 'Gochew Grill',
    status: 'page',
    statusColor: 'linkedinStatus',
  },
];
export const LINKEDIN_PROFILE_ACCOUNT = [
  {
    id: 1,
    name: 'Gochew Grill',
    status: 'profile',
    statusColor: 'linkedinStatus',
  },
];

export const activeChannels = [
  {
    id: 1,
    icon: ICONS.circleFacebook,
    channelName: 'Facebook',
    selected: false,
  },
  {
    id: 2,
    icon: ICONS.circleInstagram,
    channelName: 'Instagram',
    selected: false,
  },
  {
    id: 3,
    icon: ICONS.circleLinkdin,
    channelName: 'Youtube',
    selected: false,
  },
];

export const statusList = [
  {
    id: 1,
    status: 'Todo',
    color: '#F0F1F2',
    showCard: false,
  },
  {
    id: 2,
    status: 'In-progress',
    color: '#F6A723',
    showCard: true,
  },
  {
    id: 3,
    status: 'Review',
    color: '#4C90F5',
    showCard: false,
  },
  {
    id: 4,
    status: 'Approved',
    color: '#8B5CF6',
    showCard: false,
  },
  {
    id: 5,
    status: 'Completed',
    color: '#25C277',
    showCard: false,
  },
  {
    id: 6,
    status: 'Rejected',
    color: '#FF4A4A',
    showCard: false,
  },
];
