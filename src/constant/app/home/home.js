import { images } from 'assets/images/index';
import { ICONS } from '../../../assets/icons/index';

export const homeLeftList = [
  { id: 1, name: 'Overview', link: 'overview' },
  { id: 2, name: 'Accounts settings', link: 'accountsetting' },
  { id: 3, name: 'Brand settings', link: 'brandsetting' },
];

export const overviewLeftList = [
  {
    id: 1,
    icon: ICONS?.HomeEditIcon,
    name: 'Create social content',
    message: 'Publish, schedule to reach your audience at perfect time.',
  },
  {
    id: 2,
    // icon: ICONS?.HomeMessageIcon,
    icon: ICONS?.MessageIcon,
    className: 'homeIcon',
    name: 'Broadcast message',
    message: 'Send personalized marketing messages to your potential customers',
  },
  {
    id: 3,
    icon: ICONS?.HomeViewIcon,
    name: 'View calendar',
    message: 'Plan the idea when you need to fill gaps in your calendar.',
  },
  {
    id: 4,
    icon: ICONS?.HomeConnectIcon,
    name: 'Connect channels',
    message: 'Connect & manage as many social accounts and channels.',
  },
];

export const homeRightList = [
  {
    id: 1,
    time: '11.00 AM',
    name: 'Setup an awareness ad campaign',
    campaignColor: '#F96056',
    icon: ICONS.circleFacebook,
  },
  {
    id: 2,
    time: '11.00 AM',
    campaignColor: '#6366F1',
    name: 'Setup an awareness ad campaign',
    icon: ICONS.circleInstagram,
  },
  {
    id: 3,
    time: '11.00 AM',
    campaignColor: '#ED4F9D',
    name: 'Setup an awareness ad campaign',
    icon: ICONS.circleLinkdin,
  },
];

export const homeRightNotify = [
  {
    id: 1,
    time: '2h',
    name: 'Post Published',
    content: 'Setup an awareness ad campaign Setup an awareness ad campaign',
    icon: ICONS.HomeNotifyTick,
  },
  {
    id: 2,
    time: '2h',
    name: 'Post Published',
    content: 'Setup an awareness ad campaign Setup an awareness ad campaign',
    icon: ICONS.HomeNotifyBell,
  },
  {
    id: 3,
    time: '2h',
    name: 'Message',
    content: '150+ new messages received ',
    icon: ICONS.HomeNotifyMessage,
  },
  {
    id: 4,
    time: '2h',
    name: 'Post Published',
    content: 'Setup an awareness ad campaign Setup an awareness ad campaign',
    icon: ICONS.HomeNotifyTick,
  },
  {
    id: 5,
    time: '2h',
    name: 'Post Published',
    content: 'Setup an awareness ad campaign Setup an awareness ad campaign',
    icon: ICONS.HomeNotifyBell,
  },
];

export const homeMiddle = [
  {
    id: 1,
    content: '2k',
    reach: '+2',
    icon1: ICONS?.performanceTrendUp,
    icon: ICONS.circleFacebook,
    title: 'Followers',
    url: '/user/channels/facebookpage',
  },
  {
    id: 2,
    content: '896k',
    reach: '+2',
    icon1: ICONS?.performanceTrendUp,
    icon: ICONS.circleInstagram,
    title: 'Followers',
    url: '/user/channels/instagram',
  },
  {
    id: 3,
    content: '2K',
    icon1: ICONS?.performanceTrendUp,
    reach: '+2',
    icon: ICONS.circleLinkdin,
    title: 'Followers',
    url: '/user/channels/linkedIn',
  },
  {
    id: 4,
    icon: ICONS.circlePinterest,
    connection: true,
    url: '/user/channels/pinterest',
  },
  {
    id: 5,
    icon: ICONS.circleTwitterX,
    connection: true,
    url: '/user/channels/twitter',
  },
  {
    id: 6,
    icon: ICONS.circleYoutube,
    connection: true,
    url: '/user/channels/youtube',
  },
];

export const socialContent = [
  {
    id: 1,
    icon: ICONS.Published,
    name: 'Published',
    count: 0,
  },
  {
    id: 2,
    icon: ICONS.Scheduled,
    name: 'Scheduled',
    count: 0,
  },
  {
    id: 3,
    icon: ICONS.Failed,
    name: 'Failed Post',
    count: 0,
  },
];

export const Latestnews = [
  {
    id: 1,
    icon: images.AIPowered,
    title: 'AI powered Platform',
    content:
      'Realizing its extraordinary benefits, many businesses have been deploying Artificial Intelligence (AI) in their business operations.',
  },
  {
    id: 2,
    icon: images.SocialMediaPost,
    title: '8 Tips to Make Your Social Media Posts More Accessible',
    content:
      'Making your social media posts more accessible is crucial. By implementing these best practices you can improve the accessibility of your posts!',
  },
  {
    id: 3,
    icon: images.SocialMediaEvents,
    title: 'Create content effortlessly!',
    content: `Ready to start taking advantage of hashtags and social media events?Introducing Iconosquare's social media calendar — your perfect companion for effortless content creation!`,
  },
];
