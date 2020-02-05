export const theme = {
  font: {
    heading: `-apple-system-headline, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    subheading: `-apple-system-subheadline, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    smallSubheading: `-apple-system-short-subheadline, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  fontSize: {
    base: '16px',
    body: '14px',
    small: '0.875rem',
    extraSmall: `0.75rem`,
    mediumLarge: `1.125rem`,
    large: '1.25rem',
  },
  lineHeight: {
    paragraph: '24px',
    body: '1.4',
    heading: '1.2',
  },
  color: {
    background: `#fff`,
    text: `#000000`,
    textLight: `#757575`,
    textExtraLight: `hsl(220, 13%, 91%)`,
    link: `#3498db`,
    borderLight: `hsl(240, 4%, 95%)`,
    accent: `hsl(66, 100%, 61%)`,
    btn: {
      primary: {
        regular: `linear-gradient(217.55deg, rgba(242, 201, 76, 0.81) -0.14%, #FF9F80 99.19%)`,
        hover: `linear-gradient(217.55deg, rgba(242, 201, 76, 0.69) -0.14%, #FF9F80 99.19%)`,
      },
      secondary: {
        regular: 'hsl(204, 10%, 96%)',
        hover: 'hsl(204, 10%, 92%)',
      },
    },
  },
  animationValues: {
    fadeIn: {
      start: {
        opacity: 0,
        transform: `translateY(-5vh)`,
      },
      end: { opacity: 1, transform: `translateY(0)` },
    },
  },
  spacer: {
    gridGap: `2rem`,
    small: '6rem',
    medium: '7rem',
    large: '8rem',
  },
  mediaScreen: {
    'screen-sm': `360px`,
    'screen-sm-med': `480px`,
    'screen-med': `640px`,
    'screen-med-lg': `800px`,
    'screen-lg': `960px`,
    'screen-xl': `1440px`,
  },
  containerSize: {
    'container-size': '832px',
    'container-size-small': '512px',
    half: '384px',
  },
  transition: {
    short: 'all .10s ease-in-out',
    medium: 'all .25s ease-in-out',
    large: 'all .3s ease-in-out',
  },
  brandColors: {
    Twitter: '#1da1f2',
    LinkedIn: '#0077b5',
    Github: '#333',
    Instagram: '#e1306c',
    Dribbble: '#ea4c89',
    YouTube: '#ff0000',
  },
}

export const themeDark = {
  ...theme,
  color: {
    background: `#000`,
    text: `#eaeff2`,
    textLight: `#ccd5d9`,
    textExtraLight: `hsl(220, 13%, 91%)`,
    link: `#eaeff2`,
    borderLight: `hsl(240, 4%, 95%)`,
    accent: `hsl(66, 100%, 61%)`,
    btn: {
      primary: {
        regular: `linear-gradient(217.55deg, rgba(242, 201, 76, 0.81) -0.14%, #FF9F80 99.19%)`,
        hover: `linear-gradient(217.55deg, rgba(242, 201, 76, 0.69) -0.14%, #FF9F80 99.19%)`,
      },
      secondary: {
        regular: 'rgba(244, 245, 246, 0.21)',
        hover: 'rgba(244, 245, 246, 0.3)',
      },
    },
  },
}


export const Spacer = {
  gridGap: `2rem`,
  small: '6rem',
  medium: '7rem',
  large: '8rem',
}

export const MediaScreen = {
  'screen-sm': `360px`,
  'screen-sm-med': `480px`,
  'screen-med': `640px`,
  'screen-med-lg': `800px`,
  'screen-lg': `960px`,
  'screen-xl': `1440px`,
}

export const ContainerSize = {
  'container-size': '832px',
  'container-size-small': '512px',
  half: '384px',
}

export const transition = {
  short: 'all .10s ease-in-out',
  medium: 'all .25s ease-in-out',
  large: 'all .3s ease-in-out',
}

export const brandColors = {
  Twitter: '#1da1f2',
  LinkedIn: '#0077b5',
  Github: '#333',
  Instagram: '#e1306c',
  Dribbble: '#ea4c89',
  Youtube: '#ff0000',
}
