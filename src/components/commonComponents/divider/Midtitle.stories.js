import Midtitle from './midTitleDivider';
export default {
  title: 'components/midTitleDivider',
  component: Midtitle,
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
    primary: true,
    title: '',
   
  },
};
