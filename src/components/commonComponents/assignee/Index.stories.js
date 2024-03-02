import Index from './Index';
export default {
  title: 'components/Index',
  component: Index,
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
        width: '',
       
  },
}
// export const Secondary = {
//   args: {
//     primary: false,
//   },
// };