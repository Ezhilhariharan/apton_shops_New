import tag from './tag';

export default {
  title: 'components/tag',
  component: tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
    args: {},
};
