import { Input } from './Input';
import { ICONS } from '../../../assets/icons/index';

export default {
  title: 'components/Input',
  component: Input,
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
    placeholder: '',
    primary: true,
    iconPrefix: ICONS.someIcon,
    iconSuffix: ICONS.someOtherIcon
    


  },
};

export const Secondary = {
  args: {
    placeholder: '',

  },
};
