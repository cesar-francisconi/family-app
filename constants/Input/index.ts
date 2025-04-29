import { IconProps } from "@/components/Icon/types";
import { BorderRadius } from "../BorderRadius";
import { Colors } from "../Colors";
import { Font } from "../Font";
import { Spacing } from "../Spacing";

import {
    ViewStyle,
    TextStyle,
    StyleProp,
    StyleSheet,
} from "react-native";

export type InputStyleTokens = {
    mainContainer: StyleProp<ViewStyle>;
    label: StyleProp<TextStyle>;
    container: StyleProp<ViewStyle>;
    leftIconAndInput: StyleProp<ViewStyle>;
    input: StyleProp<TextStyle>;
    error: StyleProp<TextStyle>;
    helpTextContainer: StyleProp<ViewStyle>;
    helpText: StyleProp<TextStyle>;
    placeholderTextColor: string;
    icon: StyleProp<TextStyle> & Omit<IconProps, 'name' | 'icon'>;
};

type InputVariantSize = {
    borderRadius: {
        [borderRadiusKey: string]: InputStyleTokens;
    };
};

export type InputTokens = {
    variant: {
        filled: {
            state: {
                [stateKey: string]: InputVariantSize;
            };
        };
        outlined: {
            state: {
                [stateKey: string]: InputVariantSize;
            };
        };
    };
};

const inputSize = 50;

export const inputStyles: InputTokens = {
    variant: {
        filled: {
            state: {
                default: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: undefined,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.onVariant,
                            icon: {
                                color: Colors.inverseSurface.onVariant,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: undefined,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.onVariant,
                            icon: {
                                color: Colors.inverseSurface.onVariant,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: undefined,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.onVariant,
                            icon: {
                                color: Colors.inverseSurface.onVariant,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: undefined,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.onVariant,
                            icon: {
                                color: Colors.inverseSurface.onVariant,
                                size: 'small',
                            },
                        },
                    },
                },
                focus: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: Colors.primary.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.inverseSurface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.on,
                            icon: {
                                color: Colors.inverseSurface.on,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: Colors.primary.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.inverseSurface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.on,
                            icon: {
                                color: Colors.inverseSurface.on,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: Colors.primary.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.inverseSurface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.on,
                            icon: {
                                color: Colors.inverseSurface.on,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: Colors.primary.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.inverseSurface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.on,
                            icon: {
                                color: Colors.inverseSurface.on,
                                size: 'small',
                            },
                        },
                    },
                },
                filled: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.inverseSurface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.on,
                            icon: {
                                color: Colors.inverseSurface.on,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.inverseSurface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.on,
                            icon: {
                                color: Colors.inverseSurface.on,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.inverseSurface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.on,
                            icon: {
                                color: Colors.inverseSurface.on,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.inverseSurface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.on,
                            icon: {
                                color: Colors.inverseSurface.on,
                                size: 'small',
                            },
                        },
                    },
                },
                error: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.error.container,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.error.onContainer,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.error.onContainer,
                            icon: {
                                color: Colors.error.onContainer,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.error.container,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.error.onContainer,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.error.onContainer,
                            icon: {
                                color: Colors.error.onContainer,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.error.container,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.error.onContainer,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.error.onContainer,
                            icon: {
                                color: Colors.error.onContainer,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.error.container,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.error.onContainer,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.error.onContainer,
                            icon: {
                                color: Colors.error.onContainer,
                                size: 'small',
                            },
                        },
                    },
                },
                validated: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.success.container,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.onContainer,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.onContainer,
                            icon: {
                                color: Colors.success.onContainer,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.success.container,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.onContainer,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.onContainer,
                            icon: {
                                color: Colors.success.onContainer,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.success.container,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.onContainer,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.onContainer,
                            icon: {
                                color: Colors.success.onContainer,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.success.container,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.onContainer,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.onContainer,
                            icon: {
                                color: Colors.success.onContainer,
                                size: 'small',
                            },
                        },
                    },
                },
                disabled: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.disabled.background,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.disabled.text,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.disabled.text,
                            icon: {
                                color: Colors.disabled.text,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.disabled.background,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.disabled.text,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.disabled.text,
                            icon: {
                                color: Colors.disabled.text,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.disabled.background,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.disabled.text,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.disabled.text,
                            icon: {
                                color: Colors.disabled.text,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.disabled.background,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.disabled.text,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.disabled.text,
                            icon: {
                                color: Colors.disabled.text,
                                size: 'small',
                            },
                        },
                    },
                },
            },
        },
        outlined: {
            state: {
                default: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: undefined,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.onVariant,
                            icon: {
                                color: Colors.inverseSurface.onVariant,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: undefined,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.onVariant,
                            icon: {
                                color: Colors.inverseSurface.onVariant,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: undefined,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.onVariant,
                            icon: {
                                color: Colors.inverseSurface.onVariant,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: undefined,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.inverseSurface.onVariant,
                            icon: {
                                color: Colors.inverseSurface.onVariant,
                                size: 'small',
                            },
                        },
                    },
                },
                focus: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.primary.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.primary.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.primary.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.primary.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                    },
                },
                filled: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                    },
                },
                error: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.error.container,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.error.container,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.error.container,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.error.container,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.success.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.success.on,
                            icon: {
                                color: Colors.success.on,
                                size: 'small',
                            },
                        },
                    },
                },
                validated: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.success.container,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.surface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.surface.on,
                            icon: {
                                color: Colors.surface.on,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.success.container,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.surface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.surface.on,
                            icon: {
                                color: Colors.surface.on,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.success.container,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.surface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.surface.on,
                            icon: {
                                color: Colors.surface.on,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: undefined,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.success.container,
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.surface.on,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.surface.on,
                            icon: {
                                color: Colors.surface.on,
                                size: 'small',
                            },
                        },
                    },
                },
                disabled: {
                    borderRadius: {
                        large: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.disabled.background,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['md'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.disabled.text,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.disabled.text,
                            icon: {
                                color: Colors.disabled.text,
                                size: 'small',
                            },
                        },
                        medium: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.disabled.background,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['sm'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.disabled.text,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.disabled.text,
                            icon: {
                                color: Colors.disabled.text,
                                size: 'small',
                            },
                        },
                        small: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.disabled.background,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['xs'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.disabled.text,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.disabled.text,
                            icon: {
                                color: Colors.disabled.text,
                                size: 'small',
                            },
                        },
                        none: {
                            mainContainer: {
                                gap: Spacing['sm'],
                            },
                            label: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            container: {
                                flexDirection: 'row',
                                backgroundColor: Colors.disabled.background,
                                paddingHorizontal: Spacing['2xl'],
                                height: inputSize,
                                borderRadius: BorderRadius['none'],
                                alignItems: 'center',
                            },
                            leftIconAndInput: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                                gap: Spacing['xl'],
                                overflow: 'hidden',
                                marginRight: Spacing['xl'],
                            },
                            input: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                flex: 1,
                                color: Colors.disabled.text,
                            },
                            error: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.error.main,
                            },
                            helpTextContainer: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                            helpText: {
                                ...StyleSheet.flatten(Font.label.extraLarge),
                                color: Colors.surface.on,
                            },
                            placeholderTextColor: Colors.disabled.text,
                            icon: {
                                color: Colors.disabled.text,
                                size: 'small',
                            },
                        },
                    },
                },
            },
        },
    },
};
