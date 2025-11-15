import {create} from 'storybook/theming';

export default create({
  base: 'light',

  brandTitle: 'iDear DESIGN SYSTEM',
  brandUrl: 'https://www.i-dear.kr',
  brandTarget: '_self',
  //
  colorPrimary: '#ffcccc',
  colorSecondary: '#ffcccc',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#ffcccc',
  appBorderRadius: 4,

  // Toolbar default and active colors

  barSelectedColor: '#ffcccc',
  barHoverColor: '#ffcccc',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
