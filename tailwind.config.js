/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: (theme) => ({
        ...theme('color'),
        light: {
          primary: '#864b6f',
          'on-primary': '#ffffff',
          'primary-container': '#ffd8eb',
          'on-primary-container': '#370729',
          'primary-fixed': '#ffd8eb',
          'on-primary-fixed': '#370729',
          'primary-fixed-dim': '#fab1da',
          'on-primary-fixed-variant': '#6b3457',
          secondary: '#794f81',
          'on-secondary': '#ffffff',
          'secondary-container': '#fdd6ff',
          'on-secondary-container': '#300a39',
          'secondary-fixed': '#fdd6ff',
          'on-secondary-fixed': '#300a39',
          'secondary-fixed-dim': '#e9b5ef',
          'on-secondary-fixed-variant': '#603768',
          tertiary: '#006a65',
          'on-tertiary': '#ffffff',
          'tertiary-container': '#9df2ea',
          'on-tertiary-container': '#00201e',
          'tertiary-fixed': '#9df2ea',
          'on-tertiary-fixed': '#00201e',
          'tertiary-fixed-dim': '#81d5ce',
          'on-tertiary-fixed-variant': '#00504c',
          error: '#ba1a1a',
          'on-error': '#ffffff',
          'error-container': '#ffdad6',
          'on-error-container': '#410002',
          outline: '#81737a',
          background: '#fff8f8',
          'on-background': '#211a1d',
          surface: '#fff8f8',
          'on-surface': '#211a1d',
          'surface-variant': '#f0dee5',
          'on-surface-variant': '#4f4349',
          'inverse-surface': '#362e32',
          'inverse-on-surface': '#fcedf2',
          'inverse-primary': '#fab1da',
          shadow: '#000000',
          'surface-tint': '#864b6f',
          'outline-variant': '#d3c2c9',
          scrim: '#000000',
          'surface-container-highest': '#eddfe4',
          'surface-container-high': '#f3e4e9',
          'surface-container': '#f9eaef',
          'surface-container-low': '#fff0f5',
          'surface-container-lowest': '#ffffff',
          'surface-bright': '#fff8f8',
          'surface-dim': '#e4d6db',
        },
        dark: {
          primary: '#fab1da',
          'on-primary': '#501e3f',
          'primary-container': '#6b3457',
          'on-primary-container': '#ffd8eb',
          'primary-fixed': '#ffd8eb',
          'on-primary-fixed': '#370729',
          'primary-fixed-dim': '#fab1da',
          'on-primary-fixed-variant': '#6b3457',
          secondary: '#e9b5ef',
          'on-secondary': '#472150',
          'secondary-container': '#603768',
          'on-secondary-container': '#fdd6ff',
          'secondary-fixed': '#fdd6ff',
          'on-secondary-fixed': '#300a39',
          'secondary-fixed-dim': '#e9b5ef',
          'on-secondary-fixed-variant': '#603768',
          tertiary: '#81d5ce',
          'on-tertiary': '#003734',
          'tertiary-container': '#00504c',
          'on-tertiary-container': '#9df2ea',
          'tertiary-fixed': '#9df2ea',
          'on-tertiary-fixed': '#00201e',
          'tertiary-fixed-dim': '#81d5ce',
          'on-tertiary-fixed-variant': '#00504c',
          error: '#ffb4ab',
          'on-error': '#690005',
          'error-container': '#93000a',
          'on-error-container': '#ffdad6',
          outline: '#9c8d93',
          background: '#181115',
          'on-background': '#eddfe4',
          surface: '#181115',
          'on-surface': '#eddfe4',
          'surface-variant': '#4f4349',
          'on-surface-variant': '#d3c2c9',
          'inverse-surface': '#eddfe4',
          'inverse-on-surface': '#362e32',
          'inverse-primary': '#864b6f',
          shadow: '#000000',
          'surface-tint': '#fab1da',
          'outline-variant': '#4f4349',
          scrim: '#000000',
          'surface-container-highest': '#3b3236',
          'surface-container-high': '#30282c',
          'surface-container': '#251e21',
          'surface-container-low': '#211a1d',
          'surface-container-lowest': '#130c10',
          'surface-bright': '#3f373b',
          'surface-dim': '#181115',
          'on-tertiary-fixed-varaint': '#633b48',
        },
        primary: {
          primary0: '#000000',
          primary10: '#3b002c',
          primary20: '#5c0d46',
          primary30: '#78275e',
          primary40: '#943f77',
          primary50: '#b25891',
          primary60: '#d071ac',
          primary70: '#ee8bc8',
          primary80: '#ffaedd',
          primary90: '#ffd8eb',
          primary95: '#ffecf3',
          primary99: '#fffbff',
          primary100: '#ffffff',
          primary98: '#fff8f8',
          primary35: '#86336b',
          primary25: '#6a1a52',
          primary15: '#4d003b',
          primary5: '#29001d',
        },
        secondary: {
          secondary0: '#000000',
          secondary10: '#2d0f34',
          secondary20: '#44244a',
          secondary30: '#5c3b62',
          secondary40: '#75527b',
          secondary50: '#906a95',
          secondary60: '#ab83b0',
          secondary70: '#c79dcc',
          secondary80: '#e4b8e8',
          secondary90: '#fdd6ff',
          secondary95: '#ffebfd',
          secondary99: '#fffbff',
          secondary100: '#ffffff',
          secondary98: '#fff7fa',
          secondary35: '#69466e',
          secondary25: '#502f56',
          secondary15: '#38193f',
          secondary5: '#210428',
        },
        tertiary: {
          tertiary0: '#000000',
          tertiary10: '#00201e',
          tertiary20: '#003734',
          tertiary30: '#0c4f4b',
          tertiary40: '#2c6863',
          tertiary50: '#47817c',
          tertiary60: '#619b96',
          tertiary70: '#7bb6b0',
          tertiary80: '#96d1cc',
          tertiary90: '#b2eee8',
          tertiary95: '#c0fcf6',
          tertiary99: '#f2fffd',
          tertiary100: '#ffffff',
          tertiary98: '#e4fffb',
          tertiary35: '#1e5b57',
          tertiary25: '#004340',
          tertiary15: '#002b29',
          tertiary5: '#001413',
        },
      }),
    },
  },
  plugins: [],
};

