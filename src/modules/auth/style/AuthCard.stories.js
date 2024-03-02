import { AuthCard } from '../components/AuthCard';
export default {
  title: 'components/AuthCard',
  component: AuthCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argType: {
    backgroundColor: { control: 'color' },
  },
};
export const primary = {
  args: {
    title: '',
    content: '',
  },
};
