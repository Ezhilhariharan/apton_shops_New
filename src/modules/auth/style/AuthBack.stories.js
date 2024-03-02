import AuthBack from '../components/AuthBack';
export default {
  title: 'components/Authback',
  component: AuthBack,
  parameters: {
    layout: 'Centered',
  },
  tags: ['autodocs'],
  argType: {
    backgroundColor: { control: 'color' },
  },
};
export const primary = {
  args: {
    title: '',
  },
};
