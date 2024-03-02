import Vertical_Steps from '../components/VerticalSteps';

export default {
  title: 'components/VerticalSteps',
  component: Vertical_Steps,
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
  },
};

export const Secondary = {
  args: {},
};
