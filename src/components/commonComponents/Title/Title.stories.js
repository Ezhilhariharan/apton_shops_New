import { Title } from './Title';

export default {
  title: 'components/Title',
  component: Title,
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
    title: '',
    content: '',
    paragraph: '',
  },
};
