import './fontDeclaration.css';
import '../src/styles/global.css';
import '../src/styles/theme.css';
/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
