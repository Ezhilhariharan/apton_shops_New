import Divider from "./Divider";
export default {
    title: 'components/Divider',
    component: Divider,
    parameters: {
        layout: 'Centered',
    },
    tags: ['autodocs'],
    argType: {
        backgroundColor: { control: 'color' }
    },
};
export const primary = {
    args: {
        primary: true,
        color: '',
        width:'',
    }
}