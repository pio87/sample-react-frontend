export type ThemeName = 'light' | 'dark';

export type AppTheme = {
  name: ThemeName;
  sizes: {
    footerHeight: string;
  };
  breakpoints: {
    mobile: string;
  };
  colors: {
    backgrounds: {
      primary: string;
      secondary: string;
      alternative: string;
    };
    fonts: {
      primary: string;
      secondary: string;
      alternative: string;
    };
  };
};

const sharedValues = {
  sizes: {
    footerHeight: '2em'
  },
  breakpoints: {
    mobile: '768px'
  }
};

export const lightTheme: AppTheme = {
  name: 'light',
  ...sharedValues,
  colors: {
    backgrounds: {
      primary: '#B8B7AE',
      secondary: '#cbc9c9',
      alternative: '#636363'
    },
    fonts: {
      primary: '#282828',
      secondary: '#282828',
      alternative: '#382a2a'
    }
  }
};

export const darkTheme: AppTheme = {
  name: 'dark',
  ...sharedValues,
  colors: {
    backgrounds: {
      primary: '#252321',
      secondary: '#888888',
      alternative: '#333333'
    },
    fonts: {
      primary: '#fafafa',
      secondary: '#333',
      alternative: '#717171'
    }
  }
};
