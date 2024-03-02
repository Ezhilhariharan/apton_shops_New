import { ICONS } from '../../../assets/icons/index';
export const campaignBreadCrumbs = [
  {
    id: 1,
    icon: ICONS?.breadCrumbs1,
    name: 'Increase 30% sale in 1 month',
    icon1: ICONS?.breadCrumbsArrow,
  },
  {
    id: 2,
    icon: ICONS?.breadCrumbsTarget,
    name: 'Double the number of monthly inbound leads from website traffic.',
    icon1: ICONS?.breadCrumbsArrow,
  },
  { id: 3, icon: ICONS?.breadCrumbsKey, name: 'Increase the number of site visitors from x to y.' },
];

export const overviewPerformance = [
  {
    id: 1,
    icon: ICONS?.performanceImpression,
    title: 'Impression',
    content: '2k',
    icon1: ICONS?.performanceTrendUp,
    reach: '+2',
  },
  {
    id: 2,
    icon: ICONS?.performanceReach,
    title: 'Reach',
    content: '1k',
    icon1: ICONS?.performanceTrendUp,
    reach: '+2',
  },
  {
    id: 3,
    icon: ICONS?.performanceCostResult,
    title: 'Cost per result',
    content: '$6.00',
  },
  {
    id: 4,
    icon: ICONS?.performanceClick,
    title: 'Click',
    content: '35K',
    icon1: ICONS?.performanceTrendDown,
    reach: '+2',
    className: ['special-color', 'special-bgColor'],
  },
  {
    id: 5,
    icon: ICONS?.performanceDelivered,
    title: 'Delivered',
    content: '-',
  },
];

export const campaignDetails = [
  {
    id: 1,
    icon: 'OverViewStatus',
    title: 'Status',
    content: 'RUNNING',
  },
  {
    id: 2,
    icon: 'OverViewDuration',
    title: 'Duration',
    content: 'Nov 01 - Jan 31',
  },
  {
    id: 3,
    icon: 'OverViewCreated',
    title: 'Created @',
    content: 'Sep 14, 10:30 am',
  },
  {
    id: 4,
    icon: 'OverViewAssignee',
    title: 'Assignee',
  },
  {
    id: 5,
    icon: 'OverViewChannel',
    title: 'Channels',
  },
  {
    id: 6,
    icon: 'OverViewTag',
    title: 'Tags',
  },
  {
    id: 7,
    icon: 'OverViewTotal',
    title: 'Total Budget',
    content: '$1586.00',
    icon1: ICONS?.overViewTotalBudget,
  },
  {
    id: 8,

    icon: 'OverViewBalance',
    title: 'Balance',
    content: '$1486.00',
  },
  {
    id: 9,
    icon: 'OverViewSpent',
    title: 'Spent',
    content: '$100.00',
  },
  {
    id: 10,
    icon: 'OverViewAllTags',
    title: 'All Tasks',
    content: '12',
    className: ['specialPerformance-bgColor'],
  },
  {
    id: 11,
    icon: 'OverViewPending',
    title: 'Pending',
    content: '8',
    className: ['specialPerformance-bgColor'],
  },
  {
    id: 12,
    icon: 'OverViewCompleted',
    title: 'Completed',
    content: '5',
    className: ['specialPerformance-bgColor'],
  },
];

export const campaignHeader = [
  {
    id: 1,
    name: 'Awareness',
    day: 'Last Updated',
    dateTime: 'Sep 10, 10.30 am',
  },
];

export const HeaderSwitchingButton = [
  {
    id: 1,
    icon: ICONS?.HeaderSwitchingCalender,
    name: 'Calender',
  },
  {
    id: 2,
    icon: ICONS?.CampaignLayoutBoard,
    name: 'Board',
  },
];

export const calendarHeader = [
  {
    id: 1,
    icon1: ICONS?.chevronRight,
    image: ICONS?.chevronLeft,
    icon: ICONS?.HeaderSwitchingCalender,
  },
];

export const statusList = [
  {
    id: 1,
    status: 'Todo',
    className: ['statusList-status-Color'],
  },
  {
    id: 2,
    status: 'In-Progress',
  },
  {
    id: 3,
    status: 'Review',
  },
  {
    id: 4,
    status: 'Approved',
  },
  {
    id: 5,
    status: 'Completed',
  },
  {
    id: 6,
    status: 'Rejected',
  },
];

export const CampaignActions = [
  { id: 1, count: 2, icon: ICONS?.Attachment },
  { id: 2, count: 2, icon: ICONS?.Chat },
  { id: 3, count: 2, icon: ICONS?.subtask },
];
export const statusColors = {
  Todo: 'var(--BG-50)',
  'In-Progress': 'var(--a)',
  Review: 'var(--reviewStatus)',
  Approved: 'var(--approvedStatus)',
  Completed: 'var(--reviewStatus)',
  Rejected: 'var(--fontRed)',
};

export const OverViewActionButton = [
  {
    id: 1,
    iconPrefix: ICONS?.TaskPause,
    title: 'Pause',
  },
  {
    id: 2,
    iconPrefix: ICONS?.TaskResume,
    title: 'Resume',
  },
  {
    id: 3,
    iconPrefix: ICONS?.TaskComplete,
    title: 'Complete',
  },
];

export const taskList = [
  {
    id: 1,
    title: 'Tags',
    task: 'Add tags',
  },
  {
    id: 2,
    title: 'Due date',
    task: 'Add due date',
  },
  {
    id: 3,
    title: 'Promotion Type',
    task: 'Select promotion type',
  },
  {
    id: 4,
    title: 'Budget',
    icon: ICONS?.TaskWallet,
    task1: 'Add budget',
  },
  {
    id: 5,
    title: 'Channels',
    task: 'Add Channel',
  },
  {
    id: 6,
    title: 'Schedule date',
    task: 'Add schedule date',
  },
];

export const promotionType = [
  {
    id: 1,
    icon: ICONS?.TaskLeaf,
    typeName: 'Organic',
  },
  {
    id: 2,
    icon: ICONS?.TaskPaid,
    typeName: 'Paid',
  },
];

export const KeyResults = [
  {
    id: 1,
    icon: ICONS?.keyResult,
    key: 'Increase the monthly visitors to the website from 12,000 to 20,000',
    icon1: ICONS?.breadCrumbsArrow,
  },
  {
    id: 2,
    icon: ICONS?.keyResult,
    key: 'Decrease home page bounce rate from 65% to 40%',
    icon1: ICONS?.breadCrumbsArrow,
  },
  {
    id: 3,
    icon: ICONS?.keyResult,
    key: 'Increase the monthly visitors to the website from 12,000 to 20,000',
    icon1: ICONS?.breadCrumbsArrow,
  },
];

export const taskHeader = [
  {
    id: 1,
    icon: ICONS?.CampaignLayoutBoard,
    taskName: 'Task',
    icon1: ICONS?.TaskDescriptionActive,
  },
  {
    id: 2,
    icon: ICONS?.TaskWorkspace,
    taskName: 'Workspace',
    icon1: ICONS?.TaskWorkspaceActive,
  },
];

export const priority = [
  {
    id: 1,
    icon: 'Flag',
    priorityName: 'Low',
    color: 'var(--primary)',
  },
  {
    id: 2,
    icon: 'Flag',
    priorityName: 'Medium',
    color: 'var(--secondary)',
  },
  {
    id: 3,
    icon: 'Flag',
    priorityName: 'High',
    color: 'var(--fontRed)',
  },
];

export const priorityColors = {
  Low: 'var(--primaryBackground)',
  Medium: 'var(--primaryOpacity)',
  High: 'var(--lightRed)',
};

export const attachmentDropDown = [
  {
    id: 1,
    iconPrefix: ICONS?.Computer,
    attachmentName: 'From computer',
  },

  {
    id: 2,
    iconPrefix: ICONS?.GoogleDrive,
    attachmentName: 'Google Drive',
  },
];

export const calendarOption = [
  {
    id: 1,
    name: 'Week',
  },

  {
    id: 2,
    name: 'Month',
  },
];

export const cardActionsList = [
  { id: 1, name: 'Share', icon: ICONS?.Share },
  { id: 2, name: 'Duplicate', icon: ICONS?.CopyText },
  { id: 3, name: 'Delete', icon: ICONS?.RedDelete },
];
export const whatsappHeader = [
  {
    id: 1,
    icon: ICONS?.SelectNotes,
    name: 'Select file',
    icon1: ICONS?.SelectActiveIcon,
  },
  {
    id: 2,
    icon: ICONS?.ListIcon,
    name: 'Existing List',
    icon1: ICONS?.ExistingActiveIcon,
  },
];

export const selectTemplate = [
  {
    id: 1,
    Template_name: 'combo_mela_offer',
    template_color: 'Marketing',
    color: '#ED4F9D',
    background: '#fdf2f8',
  },
  {
    id: 2,
    Template_name: 'New customer',
    template_color: ' Utility',
    color: '#f6a723',
    background: '#FFFBEB',
  },
  {
    id: 3,
    Template_name: 'Welcome to new customer',
    template_color: 'Marketing',
    color: '#ED4F9D',
    background: '#fdf2f8',
  },
  {
    id: 4,
    Template_name: 'New customer',
    template_color: ' Utility',
    color: '#f6a723',
    background: '#FFFBEB',
  },
];

// export const popover = [

export const SendPeopleList = [
  {
    id: 1,
    name: 'Gochew Grill',
    
    phone_num: '+91 9876543210',
  },
  {
    id: 2,
    name: 'VGN Homes',
    phone_num: '+91 9876543210',
  },
  {
    id: 2,
    name: 'Aachi Groups',
    phone_num: '+91 9876543210',
  },
];

export const StatusList = [
  {
    id: 1,
    value: '{{first name}}',
  },
  {
    id: 2,
    value: '{{email}}',
  },
  {
    id: 3,
    value: '{{product}}',
  },
  {
    id: 4,
    value: '{{orders}}',
  },
  {
    id: 5,
    value: '{{Custome variable240}}',
  },
];

export const StatusInputList = [
  {
    id: 1,
    name: 'Select match fields',
    
  },
  {
    id: 2,
    name: 'Select match fields',
    
  },
  {
    id: 3,
    name: 'Select match fields',
   
  },
  {
    id: 4,
    name: 'Select match fields',
    
  },
  {

    id: 5,
    name: 'Select match fields',
    
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

export const InputList = [
  {
    id: 1,
    name: 'First name',
  },
  {
    id: 2,
    name: 'Last name',
  },
  {
    id: 3,
    name: 'Email',
  },

  {
    id: 4,
    name: 'Phone number',
  },
  {
    id: 5,
    name:'Website',
  },
  {
    id: 6,
    name:'Products'
  }
];

export const ExistingList = [
  {
    id: 1,
    name: 'Dewali campaign.xlsv',
    content: '589 Prospects',
    select:false,
  },
  {
    id: 2,
    name: 'Dewali campaign.xlsv',
    content: '1589 Prospects',
     select:false,
  },
  {
    id: 3,
    name: 'Dewali campaign.xlsv',
    content: '95589 Prospects',
     select:false,
  },
  {
    id: 4,
    name: 'Dewali campaign.xlsv',
    content: '676589 Prospects',
     select:false,
  },
];
