export const Color = {
  text: `#000000`,
  textLight: `#757575`,
  textExtraLight: `hsl(220, 13%, 91%)`,
  link: `#3498db`,
  borderLight: `hsl(240, 4%, 95%)`,
  accent: `hsl(66, 100%, 61%)`,
  Btn: {
    primary: {
      regular: `linear-gradient(217.55deg, rgba(242, 201, 76, 0.81) -0.14%, #FF9F80 99.19%)`,
      hover: `linear-gradient(217.55deg, rgba(242, 201, 76, 0.69) -0.14%, #FF9F80 99.19%)`,
    },
    secondary: { regular: 'hsl(204, 10%, 96%)', hover: 'hsl(204, 10%, 92%)' },
  },
}

export const animationValues = {
  fadeIn: {
    start: {
      opacity: 0,
      transform: `translateY(-5vh)`,
    },
    end: { opacity: 1, transform: `translateY(0)` },
  },
}

export const Spacer = {
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

export const Brands = {
  Twitter: '#1da1f2',
  Linkedin: '#0077b5',
  Github: '#333',
  Instagram: '#e1306c',
  Dribbble: '#ea4c89',
  Youtube: '#ff0000',
}
