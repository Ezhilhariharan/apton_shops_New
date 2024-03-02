import ChannelList from './ChannelList';
export default {
    title: 'components/channels',
    component: ChannelList,
    parameters: {
        // layout: 'start',
        layout:'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' }
    },
};
export const primary = {
    args: {
        primary: true,
        width: '',
        height:'',
    }
}
