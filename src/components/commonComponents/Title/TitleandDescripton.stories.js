import TitleAndDescription from './TitleAndDescription';

export default {
  title: 'components/TitleAndDescription',
  component: TitleAndDescription,
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
    description: '',
    content: '',
  
  },
};
