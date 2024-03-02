import { ICONS } from '../../../assets/icons/index';

export const campaignLeftList = [
  { id: 1, name: 'Ongoing', paramsId: 'ongoing' },
  { id: 2, name: 'Upcoming', paramsId: 'upcoming' },
  { id: 3, name: 'Draft', paramsId: 'draft' },
  { id: 4, name: 'Completed', paramsId: 'completed' },
  { id: 5, name: 'All', paramsId: 'all' },
];

export const listViewHeader = [
  // { id: 1, image: ICONS.filterIcon, name: 'Filter' },
  {
    id: 2,
    image: ICONS.ListUserProfileIcon,
    name: 'me',
    hoverIcon: ICONS.UserProfileWhite,
    selected: false,
  },
  {
    id: 3,
    image: ICONS.ListUsersProfilesIcon,
    name: 'Assignees',
    hoverIcon: ICONS.UsersProfilesWhite,
    selected: false,
  },
];

export const campaignNameAction = [
  // { id: 1, name: 'eye', icon: ICONS?.campaignEye },
  // { id: 2, name: 'copy', icon: ICONS?.campaignCopy },
  // { id: 3, name: 'share', icon: ICONS?.campaignShare },
  { id: 4, name: 'delete', icon: ICONS?.campaignDelete },
];

export const listDrawerHeader = [
  { id: 1, name: 'Raj Mohan', task: '3 tasks', bg: '#ED4F9D', selected: false },
  { id: 2, name: 'Janani Aruvi', task: '3 tasks', bg: '#6366F1', selected: false },
  { id: 3, name: 'Kishore Durai', task: '3 tasks', bg: '#25C277', selected: false },
  { id: 4, name: 'Raj Mohana', task: '3 tasks', bg: '#4AACEA', selected: false },
  { id: 5, name: 'Janani Aruvai', task: '3 tasks', bg: '#967AD4', selected: false },
  { id: 6, name: 'Kishore Duroi', task: '3 tasks', bg: '#F472B6', selected: false },
];

export const campaignCreate = [
  // { id: 1, icon: ICONS.okrCampaignIcon, name: 'OKR' },
  { id: 1, icon: ICONS.postCampaignIcon, name: 'Post' },
  { id: 2, icon: ICONS.Whatsapp, name: 'Broadcast' },
  // { id: 3, icon: ICONS.campaign2Icon, name: 'Campaign' },
  // { id: 3, icon: ICONS.taskCampaignIcon, name: 'Task' },
];

export const campaignPopup = [
  { id: 1, icon: ICONS.campaign, name: 'Campaign' },
  { id: 2, icon: ICONS.keyResult, name: 'Key Results' },
  { id: 3, icon: ICONS.taskCampaignIcon, name: 'Objective' },
  { id: 4, icon: ICONS.postCampaignIcon, name: 'Milestone' },
  { id: 5, icon: ICONS.okrCampaignIcon, name: 'Goal' },
  { id: 6, icon: ICONS.Budget, name: 'Budget', optional: '(Optional)' },
];

export const campaignTableHeaderList = [
  { id: 1, name: 'Duration', icon: ICONS?.navCalendar, selected: true },
  { id: 2, name: 'Budget', icon: ICONS?.tableHeaderBudget, selected: true },
  { id: 3, name: 'Status', icon: ICONS?.refresh, selected: true },
  { id: 4, name: 'Channels', icon: ICONS?.tableHeaderChannel, selected: false },
  { id: 5, name: 'Assignees', icon: ICONS?.ListUsersProfilesIcon, selected: false },
  { id: 6, name: 'Tags', icon: ICONS?.tableHeaderTag, selected: false },
];

export const campaignListRow = [
  {
    name: 'New year sale campaign ',
    id: 1,
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: 'icons',
    campaignColor: '#C837AB',
    campaignBg: '#FFE5FA',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
  {
    id: 2,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: '',
    campaignColor: '#8B5CF6',
    campaignBg: '#F4EFFF',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
  {
    id: 3,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: 'icons',
    campaignColor: '#4AACEA',
    campaignBg: '#E1F1FF',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
  {
    id: 4,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: 'icons',
    campaignColor: '#C837AB',
    campaignBg: '#FFE5FA',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
  {
    id: 5,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: 'icons',
    campaignColor: '#8B5CF6',
    campaignBg: '#F4EFFF',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
  {
    name: 'New year sale campaign ',
    id: 6,
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: 'icons',
    campaignColor: '#4AACEA',
    campaignBg: '#E1F1FF',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
  {
    id: 7,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: 'icons',
    campaignColor: '#C837AB',
    campaignBg: '#FFE5FA',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
  {
    id: 8,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: 'icons',
    campaignColor: '#4AACEA',
    campaignBg: '#E1F1FF',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
  {
    id: 9,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: 'icons',
    campaignColor: '#8B5CF6',
    campaignBg: '#F4EFFF',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
  {
    id: 10,
    name: 'New year sale campaign ',
    duration: 'Nov 01 - Jan 31',
    budget: '$1586.00',
    status: 'draft',
    channels: 'channels',
    assignee: 'icons',
    campaignColor: '#C837AB',
    campaignBg: '#FFE5FA',
    selected: false,
    tags: [
      { id: 1, tag: 'Travel', bg: '#F4EFFF', color: '#8B5CF6' },
      { id: 2, tag: 'Foodie', bg: '#E1F1FF', color: '#4AACEA' },
      { id: 3, tag: 'Living', bg: '#FFE5FA', color: '#C837AB' },
    ],
  },
];

export const filterCampaignName = [
  { id: 1, name: 'Campaign Name' },
  { id: 2, name: 'Start Date' },
  { id: 3, name: 'End Date' },
  { id: 4, name: 'Budget' },
  { id: 5, name: 'Tag' },
  { id: 6, name: 'Key Results' },
  { id: 7, name: 'Objectives' },
  { id: 8, name: 'Milestone' },
];

// export const filterCampaignNameList = [
//   { id: 1, name: 'is' },
//   { id: 2, name: 'is not' },
//   { id: 3, name: 'contains' },
//   { id: 4, name: 'does not contain' },
//   { id: 5, name: 'Greater than' },
//   { id: 6, name: 'Less than' },
// ];

export const filterCampaignNameEither = [
  { id: 1, name: 'And' },
  { id: 2, name: 'Or' },
];

export const campaignTypes = [
  {
    id: 1,
    name: 'Awareness',
    selected: false,
  },
  {
    id: 2,
    name: 'Sales',
    selected: false,
  },
  {
    id: 3,
    name: 'Leads',
    selected: false,
  },
  {
    id: 4,
    name: 'Engagement',
    selected: false,
  },
  {
    id: 5,
    name: 'Traffic',
    selected: false,
  },
  // {
  //   id: 6,
  //   name: 'Offline',
  //   selected: false,
  // },
];

export const campaignFooter = [
  {
    id: 1,
    name: 'Choose color',
    label: 'Color',
    icons: ICONS?.addBGtransparent,
    iconType: 'big',
  },
  // {
  //   id: 2,
  //   name: 'Add Members',
  //   label: 'Assignee',
  //   icons: ICONS?.addMembers,
  //   iconType: 'big',
  // },
  // {
  //   id: 3,
  //   name: 'Add Channel',
  //   label: 'Channels',
  //   icons: ICONS?.addBGwhite,
  //   iconType: 'small',
  // },
  // {
  //   id: 4,
  //   name: 'Add tags',
  //   label: 'Tags',
  //   icons: ICONS?.addBGwhite,
  //   iconType: 'small',
  // },
];

export const keyResults = [
  { id: 1, icon: ICONS.campaign2Icon, value: 'Reach 200 people one week ', selected: false },
  { id: 2, icon: ICONS.campaign2Icon, value: 'Increase the number of visitor ', selected: false },
  { id: 3, icon: ICONS.campaign2Icon, value: 'Retain lost customer ', selected: false },
  { id: 4, icon: ICONS.campaign2Icon, value: 'Increase the number of visitor ', selected: false },
];

export const budgetSmallDropdown = [
  // { id: 1, name: 'USD', icon: ICONS.dollar },
  { id: 2, name: 'INR', icon: ICONS.dollar },
];

export const inputCalendar = [
  { id: 1, label: 'From', value: '' },
  { id: 2, label: 'To', value: '' },
];

// ========

export const channelList = [
  { id: 1, name: 'Facebook Pages', label: 'facebook', link: 'facebookpage' },
  {
    id: 2,
    name: 'Facebook Groups',
    label: 'facebookGroup',
    link: 'facebookgroup',
  },
  { id: 3, name: 'Twitter', label: 'twitter', link: 'twitter' },
  { id: 4, name: 'Instagram', label: 'instagram', link: 'instagram' },
  { id: 5, name: 'WhatsApp', label: 'whatsapp', link: 'whatsapp' },
  { id: 6, name: 'Pinterest', label: 'pinterest', link: 'pinterest' },
  { id: 7, name: 'Linkedin Pages', label: 'linkedin', link: 'linkedinpage' },
  {
    id: 8,
    name: 'Linkedin Profile',
    label: 'linkedinProfile',
    link: 'linkedinprofile',
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
    title: 'Rejected post',
    content: '20',
  },
];

export const faceBookPagePerformanceList = [
  {
    id: 1,
    icon: ICONS?.FbLikeIcon,
    title: 'Page Likes',
    content: '2000',
    apiTitle: 'likes',
  },
  {
    id: 2,
    icon: ICONS?.performanceFollower,
    title: 'Follower',
    content: '3000',
    apiTitle: 'followers',
  },
  {
    id: 3,
    icon: ICONS?.ChannelReachIcon,
    title: 'Reach',
    content: '3000',
    apiTitle: 'reach',
  },
  {
    id: 4,
    icon: ICONS?.performanceEngagement,
    title: 'Engagement',
    content: '3',
    apiTitle: 'engagement',
  },
  {
    id: 5,
    icon: ICONS?.performanceImpression,
    title: 'Impression',
    content: '20',
    apiTitle: 'impression',
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
    title: 'Methods',
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
    title: 'Rejected post',
    content: '20',
  },
];
