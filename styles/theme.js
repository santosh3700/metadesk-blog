// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fonts = {
  heading: "Poppins, sans-serif",
  body: "Poppins, sans-serif",
};

const styles = {

  textStyles: {

    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      // fontWeight: '700',
      lineHeight: '110%',
      letterSpacing: '-2%',
      color: 'red',
    },
    h2: {
      fontSize: ['24px', '24px'],
      // fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-1%',
      color: 'green',

    },
  },


};

// 3. extend the theme
const theme = extendTheme({ config, styles, fonts });

export default theme;
