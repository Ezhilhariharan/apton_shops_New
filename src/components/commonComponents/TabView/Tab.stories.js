import TabView from './TabView';

export default {
  title: 'components/Tabview',
  component: TabView,
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
    handleClick:''
  },
};
