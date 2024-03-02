import { ICONS } from 'assets/icons';
import { images } from '../../../assets/images/index';

export const BROADCASTFILTER = [
  {
    id: 1,
    name: 'Delivered ',
    isFilter: false,
  },
  {
    id: 2,
    name: 'Sent',
    isFilter: true,
  },
  {
    id: 3,
    name: 'Opened',
    isFilter: false,
  },
  {
    id: 4,
    name: 'Replied',
    isFilter: false,
  },
  {
    id: 5,
    name: 'Bounced',
    isFilter: false,
  },
];

export const creditLimits = [
  { name: 'Total credit', value: '20000' },
  { name: 'Spent', value: '15000' },
  { name: 'Balance', value: '5000' },
];
export const paidConversations = [
  { name: 'Marketing', value: '12' },
  { name: 'Utility', value: '20' },
  { name: 'Authentication', value: '1' },
  { name: 'Service', value: '0' },
];
export const barChartLegend = [
  { name: 'Male', value: '65%', color: 'var(--TextPrimary)' },
  { name: 'Female', value: '35%', color: 'var(--a)' },
];
export const lineChartData = [
  {
    name: 'Sep 29',
    value: 10,
  },
  {
    name: 'Oct 3',
    value: 70,
  },
  {
    name: 'Oct 7',
    value: 50,
  },
  {
    name: 'Oct 11',
    value: 60,
  },
  {
    name: 'Oct 15',
    value: 35,
  },
  {
    name: 'Oct 19',
    value: 20,
  },
  {
    name: 'Oct 23',
    value: 40,
  },
];
export const barChartMockData = [
  {
    name: '18-24',
    male: 10,
    female: 40,
  },
  {
    name: '25-34',
    male: 50,
    female: 10,
  },
  {
    name: '35-44',
    male: 50,
    female: 40,
  },

  {
    name: '45-54',
    male: 70,
    female: 20,
  },
  {
    name: '55-64',
    male: 80,
    female: 5,
  },
  {
    name: '65+',
    male: 50,
    female: 40,
  },
];

export const freeConversations = [
  { name: 'Free tier', value: '25' },
  { name: 'Free entry point', value: '25' },
];

export const charges = [
  { name: 'Marketing', value: '₹ 6,00,000' },
  { name: 'Utility', value: '₹50,000' },
  { name: 'Authentication', value: '₹1,00,000' },
  { name: 'Service', value: '0' },
];

export const channelNameAction = [
  { id: 1, name: 'edit', icon: ICONS?.pencilCampaign },
  { id: 2, name: 'delete', icon: ICONS?.campaignDelete },
];

export const BroadCastData = [
  {
    image: images?.Roast,
    description: '🎅🎄 Christmas and New Year Combo Mela Offer! 🎉✨......',
    views: {
      like: 5000,
      watch: 5000,
      share: 5000,
    },
  },
  {
    image: images?.Roast,
    description: '🎅🎄 Christmas and New Year Combo Mela Offer! 🎉✨......',
    views: {
      like: 5000,
      watch: 5000,
      share: 5000,
    },
  },
  {
    image: images?.Roast,
    description: '🎅🎄 Christmas and New Year Combo Mela Offer! 🎉✨......',
    views: {
      like: 5000,
      watch: 5000,
      share: 5000,
    },
  },
  {
    image: images?.Roast,
    description: '🎅🎄 Christmas and New Year Combo Mela Offer! 🎉✨......',
    views: {
      like: 5000,
      watch: 5000,
      share: 5000,
    },
  },
];
export const ChannelTabList = [
  {
    id: 1,
    // icon: ICONS?.HeaderSwitchingCalender,
    name: 'Templates',
  },
  {
    id: 2,
    // icon: ICONS?.CampaignLayoutBoard,
    name: 'Broadcast',
  },
];
export const templateTableHeaderList = [
  { id: 1, name: 'Template name' },
  { id: 2, name: 'Status' },
  { id: 3, name: 'Category' },
  { id: 4, name: 'Language' },
  // { id: 5, name: 'Messages delivered' },
  // { id: 6, name: 'Message read rate' },
];
export const broadCastTableHeaderList = [
  { id: 1, name: 'Name' },
  { id: 2, name: 'Promotion Type' },
  { id: 3, name: 'Prospects' },
  { id: 4, name: 'Delivered' },
  { id: 5, name: 'Opened' },
  { id: 6, name: 'Lead' },
];
export const broadCastDetailTableHeader = [
  { id: 1, name: '' },
  { id: 2, name: 'First name' },
  { id: 3, name: 'Last name' },
  { id: 4, name: 'Mobile Number' },
  { id: 5, name: 'Status' },
];
export const templateData = [
  {
    name: 'New year sale campaign ',
    id: 1,
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'active',
    category: 'Marketing',
    language: 'English',
    msg_deliver: 0,
    msg_red: 0,
  },
  {
    id: 2,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'inactive',
    category: 'Marketing',
    language: 'English',
    msg_deliver: 0,
    msg_red: 0,
  },
  {
    id: 3,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'reject',
    category: 'Marketing',
    language: 'English',
    msg_deliver: 0,
    msg_red: 0,
  },
  {
    name: 'New year sale campaign ',
    id: 4,
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'active',
    category: 'Marketing',
    language: 'English',
    msg_deliver: 0,
    msg_red: 0,
  },
  {
    id: 5,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'inactive',
    category: 'Marketing',
    language: 'English',
    msg_deliver: 0,
    msg_red: 0,
  },
  {
    id: 6,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'reject',
    category: 'Marketing',
    language: 'English',
    msg_deliver: 0,
    msg_red: 0,
  },
];
export const broadCastData = [
  {
    name: 'New year sale campaign ',
    id: 1,
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'active',
    type: 'Broadcast',
    prospects: 10000,
    delivered: 10000,
    opened: 10000,
    lead: 1000,
  },
  {
    id: 2,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'inactive',
    category: 'Marketing',
    type: 'Broadcast',
    prospects: 10000,
    delivered: 10000,
    opened: 10000,
    lead: 1000,
  },
  {
    id: 3,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    type: 'Broadcast',
    prospects: 10000,
    delivered: 10000,
    opened: 10000,
    lead: 1000,
  },
  {
    name: 'New year sale campaign ',
    id: 4,
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'active',
    type: 'Broadcast',
    prospects: 10000,
    delivered: 10000,
    opened: 10000,
    lead: 1000,
  },
  {
    id: 5,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'inactive',
    category: 'Marketing',
    type: 'Broadcast',
    prospects: 10000,
    delivered: 10000,
    opened: 10000,
    lead: 1000,
  },
  {
    id: 6,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    type: 'Broadcast',
    prospects: 10000,
    delivered: 10000,
    opened: 10000,
    lead: 1000,
  },
];

export const broadCastUsers = [
  {
    id: 1,
    firstName: 'smith',
    lastName: 'steve',
    contact: '8888888888888',
    status: 'Delivered',
    color: '#F6A723',
    backgroundColor: '#FFFBEB',
    tags: '',
  },
  {
    id: 2,
    firstName: 'smith',
    lastName: 'steve',
    contact: '8888888888888',
    status: 'Replied',
    color: '#25C277',
    backgroundColor: '#F0FDF4',
    tags: '',
  },
  {
    id: 3,
    firstName: 'smith',
    lastName: 'steve',
    contact: '8888888888888',
    status: 'Opened',
    color: '#4AACEA',
    backgroundColor: '#E1F1FF',
  },
  {
    id: 4,
    firstName: 'smith',
    lastName: 'steve',
    contact: '8888888888888',
    status: 'Bounced',
    color: '#F96056',
    backgroundColor: '#FFEEED',
  },
];

export const userConnectOption = [
  { id: 1, name: 'Sync', icon: ICONS?.LoopIcon },
  { id: 2, brand: 'config', name: 'Configuration', icon: ICONS?.ToolIcon },
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
    secondaryOptions: [
      { label: 'Private', value: true },
      { label: 'Open', value: false },
      { label: 'Close', value: false },
    ],
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

export const WHATSAPP_CONNECT = [
  {
    id: 1,
    header: 'Business account01',
    option: [
      { name: 'Gochew Grill', desc: 'WhatsApp account' },
      { name: 'Natraj', desc: 'WhatsApp account' },
    ],
  },
  {
    id: 2,
    header: 'Business account02',
    option: [
      { name: 'Gochew Grill-2', desc: 'WhatsApp account' },
      { name: 'Natraj-2', desc: 'WhatsApp account' },
    ],
  },
  {
    id: 3,
    header: 'Business account03',
    option: [
      { name: 'Gochew Grill-3', desc: 'WhatsApp account' },
      { name: 'Natraj-3', desc: 'WhatsApp account' },
    ],
  },
];

export const FACEBOOK_CONNECT = [
  {
    id: 1,
    option: [
      { name: 'Gochew Grill', desc: 'Facebook page' },
      { name: 'Natraj', desc: 'Facebook page' },
    ],
  },
];

export const instaPagePerformanceList = [
  {
    id: 1,
    icon: ICONS?.performanceFollower,
    title: 'Follower',
    content: '2000',
  },
  {
    id: 2,
    icon: ICONS?.performanceReach,
    title: 'Reach',
    content: '3000',
  },
  {
    id: 3,
    icon: ICONS?.performanceProfileVisit,
    title: 'Profile visits',
    content: '3000',
  },
  {
    id: 4,
    icon: ICONS?.performanceImpression,
    title: 'Impression',
    content: '3',
  },
  {
    id: 5,
    icon: ICONS?.performanceMethods,
    title: 'Tags',
    content: '20',
  },
];

export const twitterPagePerformanceList = [
  {
    id: 1,
    icon: ICONS?.performanceMethods,
    title: 'Methods',
    content: '3000',
  },
  {
    id: 2,
    icon: ICONS?.performanceFollower,
    title: 'Follower',
    content: '2000',
  },
  {
    id: 3,
    icon: ICONS?.performanceFollowing,
    title: 'Following',
    content: '3000',
  },

  {
    id: 4,
    icon: ICONS?.performanceRetweets,
    title: 'Retweets',
    content: '3',
  },
  {
    id: 5,
    icon: ICONS?.performanceBlock,
    title: 'Blocks',
    content: '20',
  },
];

export const pinterestPagePerformanceList = [
  {
    id: 1,
    icon: ICONS?.performanceProfileVisit,
    title: 'Profile visits',
    content: '3000',
  },
  {
    id: 2,
    icon: ICONS?.performanceFollower,
    title: 'Follower',
    content: '2000',
  },
  {
    id: 3,
    icon: ICONS?.performanceFollowing,
    title: 'Following',
    content: '3000',
  },

  {
    id: 4,
    icon: ICONS?.performanceEngagement,
    title: 'Engagement',
    content: '3',
  },
  {
    id: 5,
    icon: ICONS?.performanceOutBorderClick,
    title: 'Outbound clicks',
    content: '20',
  },
];

export const LinkedInPagePerformanceList = [
  {
    id: 1,
    icon: ICONS?.performanceFollower,
    title: 'Follower',
    content: '3000',
  },
  {
    id: 2,
    icon: ICONS?.performanceMethods,
    title: 'Mentions',
    content: '2000',
  },
  {
    id: 3,
    icon: ICONS?.performanceClick,
    title: 'Clicks',
    content: '3000',
  },
  {
    id: 4,
    icon: ICONS?.performanceImpression,
    title: 'Page views',
    content: '20',
  },
  {
    id: 5,
    icon: ICONS?.performanceImpression,
    title: 'Unique impressions',
    content: '20',
  },
];
export const LinkedInProfilePerformanceList = [
  {
    id: 1,
    icon: ICONS?.performancePageLike,
    title: 'Connections',
    content: '3000',
  },
  {
    id: 2,
    icon: ICONS?.performanceFollower,
    title: 'Followers',
    content: '2000',
  },
  {
    id: 3,
    icon: ICONS?.performancePublishedPost,
    title: 'Published post',
    content: '3000',
  },
  {
    id: 4,
    icon: ICONS?.performanceScheduledPost,
    title: 'Scheduled post',
    content: '20',
  },
  {
    id: 5,
    icon: ICONS?.performanceBlock,
    title: 'Failed post',
    content: '20',
  },
];

export const posterlist = [
  {
    id: 1,
    icon: ICONS?.PublishedIcon,
    title: 'Published',
    content: '13',
  },
  {
    id: 2,
    icon: ICONS?.ChannelScheduleIcon,
    title: 'Scheduled',
    content: '13',
  },
  {
    id: 3,
    icon: ICONS?.RejectIcon,
    title: 'Failed',
    content: '13',
  },
];

export const faceBookGroupPerformanceList = [
  {
    id: 1,
    icon: ICONS?.performanceFollower,
    title: 'Follower',
    content: '3000',
  },
  {
    id: 2,
    icon: ICONS?.performancePublishedPost,
    title: 'Published post',
    content: '2000',
  },
  {
    id: 3,
    icon: ICONS?.performanceScheduledPost,
    title: 'Scheduled post',
    content: '3000',
  },
  {
    id: 4,
    icon: ICONS?.performanceBlock,
    title: 'Failed post',
    content: '20',
  },
];
export const ADD_VARIABLES = [
  'fist_name',
  'last_name',
  'shop_name',
  'email_id',
  'mobile_number',
  'custom_variables',
];

export const ADD_VARIABLE_OPTIONS = [
  {
    id: 1,
    value: '{{first_name}}',
    label: 'first_name',
  },
  {
    id: 2,
    value: '{{last_name}}',
    label: 'last_name',
  },
  {
    id: 3,
    value: '{{shop_name}}',
    label: 'shop_name',
  },
  {
    id: 4,
    value: '{{email_id}}',
    label: 'email_id',
  },
  {
    id: 5,
    value: '{{mobile_number}}',
    label: 'mobile_number',
  },
  {
    id: 6,
    value: '{{custom_variable}}',
    label: 'custom_variable',
  },
];
