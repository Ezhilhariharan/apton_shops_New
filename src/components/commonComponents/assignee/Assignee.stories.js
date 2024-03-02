import AssineePopover from './AssigneePopover';
export default {
  title: 'components/Assignee',
  component: AssineePopover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export const primary = {
    args: {
        primary: true,
        handleClose:'',
    }
}
