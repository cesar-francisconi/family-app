const primitives = {
    primary: {
        50: '#FEFCE6',
        100: '#F8F5D3',
        200: '#F2EDAC',
        300: '#EAE380',
        400: '#E4DB58',
        500: '#DDD12C',
        600: '#B8AE1E',
        700: '#888116',
        800: '#5C570F',
        900: '#2C2907',
        950: '#0B0B04',
    },
    grayscale: {
        50: '#F5F5F4',
        100: '#E6E6E5',
        200: '#D0D0CD',
        300: '#B5B5B0',
        400: '#A1A19B',
        500: '#888881',
        600: '#6E6E68',
        700: '#343432',
        800: '#1F1F1E',
        900: '#121212',
        950: '#080807',
    },
    error: {
        50: '#F9F1F1',
        100: '#F5CECC',
        200: '#ECA19D',
        300: '#E26F69',
        400: '#D93E36',
        500: '#C82219',
        600: '#8D211B',
        700: '#6B1914',
        800: '#49110E',
        900: '#220807',
        950: '#110403',
    },
    warning: {
        50: '#F8F4F1',
        100: '#F7E7D9',
        200: '#EECBAF',
        300: '#E7B389',
        400: '#DE985E',
        500: '#D67F38',
        600: '#B26425',
        700: '#874C1C',
        800: '#593212',
        900: '#2F1A0A',
        950: '#150C04',
    },
    success: {
        50: '#F1F9F6',
        100: '#B9F8DE',
        200: '#74F1BD',
        300: '#33EB9E',
        400: '#13BE77',
        500: '#0C794C',
        600: '#0A613D',
        700: '#074A2E',
        800: '#052E1D',
        900: '#02170E',
        950: '#010E09',
    },
}

export const Colors = {
    primary: {
        main: primitives.primary[500],
        on: primitives.primary[950],
        container: primitives.primary[100],
        onContainer: primitives.primary[800],
        inverse: primitives.primary[100],
    },

    success: {
        main: primitives.success[500],
        on: primitives.success[50],
        container: primitives.success[100],
        onContainer: primitives.success[900],
    },

    error: {
        main: primitives.error[500],
        on: primitives.error[50],
        container: primitives.error[100],
        onContainer: primitives.error[900],
    },

    warning: {
        main: primitives.warning[500],
        on: primitives.warning[50],
    },

    disabled: {
        background: primitives.grayscale[600],
        text: primitives.grayscale[700],
    },

    surface: {
        main: primitives.grayscale[950],
        on: primitives.grayscale[50],
        onVariant: primitives.grayscale[300],
        container: primitives.grayscale[900],
        containerHigh: primitives.grayscale[800],
        containerExtraHigh: primitives.grayscale[700],
    },

    inverseSurface: {
        main: primitives.grayscale[50],
        on: primitives.grayscale[950],
        onVariant: primitives.grayscale[600],
    },

    outline: {
        main: primitives.grayscale[500],
        variant: primitives.grayscale[800],
        dark: primitives.grayscale[900],
    },

    shadow: primitives.grayscale[50],
};

