import { images } from 'assets/images/index';

export const BrandList = [
  {
    id: 1,
    name: 'Brand Owner',
    content: 'Enter brand name',
  },
  {
    id: 2,
    name: 'Phone number',
    content: 'Enter Phone number',
  },
  {
    id: 3,
    name: 'Country',
    content: 'Enter your country',
  },
  {
    id: 4,
    name: 'Zip/Postal code',
    content: 'Enter your Zip code',
  },
  {
    id: 5,
    name: ' Email address',
    content: 'Enter your Email id',
  },
  {
    id: 6,
    name: 'Address',
    content: 'Enter your address',
  },
  {
    id: 7,
    name: 'City ',
    content: 'Enter your city',
  },
];

export const BillingCardList = [
  {
    id: 1,

    name: 'Invoice-0001',
    Billing_date: 'Oct 6',
    plan_name: 'Starter',
    amt: '$25.00',
  },
  {
    id: 2,
    name: 'Invoice-0002',
    Billing_date: 'Sep 6',
    plan_name: 'Starter',
    amt: '$25.00',
  },
  {
    id: 1,
    name: 'Invoice-0003',
    Billing_date: 'Aug 6',
    plan_name: 'Starter',
    amt: '$25.00',
  },
  {
    id: 1,
    name: 'Invoice-0010',
    Billing_date: 'Jul 6',
    plan_name: 'Starter',
    amt: '$25.00',
  },
  {
    id: 1,
    name: 'Invoice-0010',
    Billing_date: 'Jul 6',
    plan_name: 'Starter',
    amt: '$25.00',
  },
];

export const BrandInviteList = [
  {
    id: 1,
    role: 'R',
    color: 'var(--fontRed)',
    name: 'Riya Setty',
    Email: 'yourmail@email.com',
    status: 'Active',
    Created: 'Sep 06',
    Role: 'Owner',
    Time: 'Nov 06',
    statusColor: 'var(--primary)',
  },
  {
    id: 2,
    img: images?.BrandImageIcon,
    status: 'Pending',
    name: 'Devika Kaur',
    Email: 'yourmail@email.com',
    status: 'Pending',
    Created: 'Nov 14',
    Role: 'Brand Manager',
    Time: '-',
    statusColor: 'var(--a)',
  },
  {
    id: 3,
    img: images?.BrandUserIcon,
    status: 'Expired',
    name: 'Vishal Kale',
    Email: 'yourmail@email.com',
    status: 'Expired',
    Created: 'Nov 06',
    Role: 'Account Manager',
    Time: ' - ',
    statusColor: 'var(--channelToggleSwitch)',
  },
  {
    id: 4,
    img: images?.BrandUser_2Image,
    status: 'Active',
    name: 'Pratibha Ravi',
    Email: 'yourmail@email.com',
    status: 'Active',
    Created: 'Sep 06',
    Role: 'Account Manager',
    Time: 'Oct 06',
    statusColor: 'var(--primary)',
  },
  {
    id: 5,
    role: 'A',
    color: '#FCD34D',
    name: 'Asmita Sastry',
    Email: 'yourmailbusinessemail@businessemail.com',
    status: 'Inactive',
    Created: 'Apr 06',
    Role: 'Campaign manger',
    Time: 'Jun  06',
    statusColor: 'var(--fontRed)',
  },
  {
    id: 6,
    role: 'K',
    color: 'var(--approvedStatus)',
    name: 'Kamala Anne',
    Email: 'yourmailbusinessemail@businessemail.com',
    status: 'Inactive',
    Created: 'Apr 06',
    Role: 'content Manager',
    Time: 'Mar 15',
    statusColor: 'var(--fontRed)',
  },
];

export const BrandStatus = {
  Active: 'var(--primaryBackground)',
  Pending: 'var(--primaryOpacity)',
  Expired: 'var(--font-50)',
  Inactive: 'var(--lightRed)',
};

export const BrandMemberRoleList = [
  // {
  //   id: 1,
  //   value: 'Owner',
    
  // },
   {
    id: 2,
    value: 'Account manager',
    subtitle: 'Has access to Account, billing & plans, brand and users',
  },
  {
    id: 3,
    value: 'Brand manager',
    subtitle: 'Has access to brand, goal & budget, users',
  },
  {
    id: 4,
    value: 'Campaign manager',
    subtitle: 'Has access to OKR, campaigns, reports & analytics, audience',
  },
  {
    id: 5,
    value: 'Content manager',
    subtitle: 'Has access to tasks, approval and posting',
  },
  {
    id: 6,
    value: 'Member',
    subtitle: 'Has access to workspace, action item',
  },
];
