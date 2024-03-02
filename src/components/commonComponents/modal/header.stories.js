import header from './header';

export default {
  title: 'components/header',
  component: header,
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
        // handleCancel: '',
    title:'',
  },
};
