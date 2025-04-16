import { StyleProp, TextStyle } from "react-native";

type FontSize =
    | 'extraLarge'
    | 'large'
    | 'medium'
    | 'small'
    | 'smallProminent'
    | 'extraLargeProminent'
    | 'largeProminent'
    | 'baselineSmall'
    | 'extraSmall'
    | 'extraSmallProminent';

type headlineExclude = Exclude<FontSize,
    | 'extraLargeProminent'
    | 'largeProminent'
    | 'baselineSmall'
    | 'extraSmall'
    | 'extraSmallProminent'
>

type FontProps = {
    headline: Record<headlineExclude, StyleProp<TextStyle>>;
    title: Record<'medium' | 'small', StyleProp<TextStyle>>;
    body: Record<'medium' | 'small', StyleProp<TextStyle>>;
    label: Record<FontSize, StyleProp<TextStyle>>;
}

export const Font: FontProps = {

    // Headline
    headline: {
        extraLarge: {
            fontFamily: 'Roboto_700Bold',
            fontSize: 28,
            lineHeight: 36,
            letterSpacing: 0.5,
        },
        large: {
            fontFamily: 'Roboto_700Bold',
            fontSize: 24,
            lineHeight: 32,
            letterSpacing: 0.5,
        },
        medium: {
            fontFamily: 'Roboto_700Bold',
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.15,
        },
        small: {
            fontFamily: 'Roboto_400Regular',
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.1,
        },
        smallProminent: {
            fontFamily: 'Roboto_600SemiBold',
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.1,
        },
    },
    title: {
        medium: {
            fontFamily: 'Roboto_700Bold',
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.15,
        },
        small: {
            fontFamily: 'Roboto_600SemiBold',
            fontSize: 14,
            lineHeight: 22,
            letterSpacing: 0.1,
        },
    },

    // Body
    body: {
        medium: {
            fontFamily: 'Roboto_400Regular',
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.5,
        },
        small: {
            fontFamily: 'Roboto_400Regular',
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0.4,
        },
    },

    // Label
    label: {
        extraLarge: {
            fontFamily: 'Roboto_400Regular',
            fontSize: 14,
            lineHeight: 18,
            letterSpacing: 0.1,
        },
        extraLargeProminent: {
            fontFamily: 'Roboto_600SemiBold',
            fontSize: 14,
            lineHeight: 18,
            letterSpacing: 0.1,
        },
        large: {
            fontFamily: 'Roboto_500Medium',
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0.4,
        },
        largeProminent: {
            fontFamily: 'Roboto_700Bold',
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0.5,
        },
        medium: {
            fontFamily: 'Roboto_500Medium',
            fontSize: 11,
            lineHeight: 15,
            letterSpacing: 0.25,
        },
        small: {
            fontFamily: 'Roboto_500Medium',
            fontSize: 10,
            lineHeight: 14,
            letterSpacing: 0.2,
        },
        baselineSmall: {
            fontFamily: 'Roboto_500Medium',
            fontSize: 10,
            lineHeight: 14,
            letterSpacing: 0.2,
        },
        smallProminent: {
            fontFamily: 'Roboto_700Bold',
            fontSize: 10,
            lineHeight: 14,
            letterSpacing: 0.2,
        },
        extraSmall: {
            fontFamily: 'Roboto_400Regular',
            fontSize: 8.2,
            lineHeight: 12,
            letterSpacing: 0.2,
        },
        extraSmallProminent: {
            fontFamily: 'Roboto_500Medium',
            fontSize: 8.2,
            lineHeight: 12,
            letterSpacing: 0.2,
        },
    },
};
