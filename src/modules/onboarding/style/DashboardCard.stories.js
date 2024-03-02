import { DashboardCard } from '../components/step1/OnboardingCard';

export default {
  title: 'modules/dashboardCard',
  component: DashboardCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
    title: '',
    content: '',
  },
};

export const Secondary = {
  args: {
    primary: false,
  },
};
