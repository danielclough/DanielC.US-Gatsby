const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    colors: {
      primary: colors.teal,
      secondary: colors.orange,
      neutral: colors.gray,
      white: '#FFF',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
