export const numberScale = {
    '0': 0,
    '2': 2,
    '4': 4,
    '6': 6,
    '8': 8,
    '12': 12,
    '16': 16,
    '20': 20,
    '24': 24,
    '28': 28,
    '32': 32,
    '36': 36,
    '40': 40,
    '44': 44,
    '48': 48,
    '52': 52,
    '56': 56,
    '60': 60,
    '64': 64,
    '68': 68,
    '72': 72,
    '76': 76,
    '80': 80,
    '84': 84,
    '88': 88,
    '92': 92,
    '96': 96,
    '100': 100,
    '999': 999,
} as const

export const Spacing = {
    'none': numberScale[0],
    'xs': numberScale[2],
    'sm': numberScale[4],
    'md': numberScale[6],
    'lg': numberScale[8],
    'xl': numberScale[12],
    '2xl': numberScale[16],
    '3xl': numberScale[20],
    '4xl': numberScale[24],
    '5xl': numberScale[32],
    '6xl': numberScale[40],
    '7xl': numberScale[48],
    '8xl': numberScale[56],
    '9xl': numberScale[64],
    '10xl': numberScale[72],
    '11xl': numberScale[80],
}