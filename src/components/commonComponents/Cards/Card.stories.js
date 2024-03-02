import { Card } from '../Cards/Card';

export default {
  title: 'components/Cards',
  component: Card,
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
    image: '',
    title: '',
    content: '',
  },
};

export const Secondary = {
  args: {
    primary: false,
  },
};

export const Large = {
  args: {
    size: 'large',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};
