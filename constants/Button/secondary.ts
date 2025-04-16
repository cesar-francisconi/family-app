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

export type ButtonStyleTokens = {
    background: StyleProp<ViewStyle>;
    text: StyleProp<TextStyle>;
    border: StyleProp<ViewStyle>;
};

type ButtonVariantSize = {
    borderRadius: {
        [borderRadiusKey: string]: ButtonStyleTokens;
    };
};

export type ButtonTokens = {
    variant: {
        filled: {
            size: {
                [sizeKey: string]: ButtonVariantSize;
            };
        };
        outlined: {
            size: {
                [sizeKey: string]: ButtonVariantSize;
            };
        };
        text: {
            size: {
                [sizeKey: string]: ButtonVariantSize;
            };
        };
    };
};

export const secondary: ButtonTokens = {
    variant: {
        filled: {
            size: {
                // Medium Button
                medium: {
                    borderRadius: {
                        large: {
                            background: {
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing["2xl"],
                                height: 44,
                                borderRadius: BorderRadius["2xl"],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.on,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {},
                        },
                        medium: {
                            background: {
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing["2xl"],
                                height: 44,
                                borderRadius: BorderRadius['sm'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.on,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {},
                        },
                        small: {
                            background: {
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing["2xl"],
                                height: 44,
                                borderRadius: BorderRadius['xs'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.on,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {},
                        },
                        none: {
                            background: {
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing["2xl"],
                                height: 44,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.on,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {},
                        },
                    },
                },

                // Small Button
                small: {
                    borderRadius: {
                        large: {
                            background: {
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['xl'],
                                height: 32,
                                borderRadius: BorderRadius["2xl"],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.on,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {},
                        },
                        medium: {
                            background: {
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['xl'],
                                height: 32,
                                borderRadius: BorderRadius['sm'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.on,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {},
                        },
                        small: {
                            background: {
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['xl'],
                                height: 32,
                                borderRadius: BorderRadius['xs'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.on,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {},
                        },
                        none: {
                            background: {
                                backgroundColor: Colors.inverseSurface.main,
                                paddingHorizontal: Spacing['xl'],
                                height: 32,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.on,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {},
                        },
                    },
                },
            },
        },
        outlined: {
            size: {
                // Medium Button
                medium: {
                    borderRadius: {
                        large: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing["2xl"],
                                height: 44,
                                borderRadius: BorderRadius["2xl"],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                        },
                        medium: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing["2xl"],
                                height: 44,
                                borderRadius: BorderRadius['sm'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                        },
                        small: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing["2xl"],
                                height: 44,
                                borderRadius: BorderRadius['xs'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                        },
                        none: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing["2xl"],
                                height: 44,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                        },
                    },
                },

                // Small Button
                small: {
                    borderRadius: {
                        large: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['xl'],
                                height: 32,
                                borderRadius: BorderRadius["2xl"],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                        },
                        medium: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['xl'],
                                height: 32,
                                borderRadius: BorderRadius['sm'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                        },
                        small: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['xl'],
                                height: 32,
                                borderRadius: BorderRadius['xs'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                        },
                        none: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['xl'],
                                height: 32,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {
                                borderWidth: 1,
                                borderColor: Colors.inverseSurface.main,
                            },
                        },
                    },
                },
            },
        },
        text: {
            size: {
                // Medium Button
                medium: {
                    borderRadius: {
                        large: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['none'],
                                height: undefined,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {

                            },
                        },
                        medium: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['none'],
                                height: undefined,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {

                            },
                        },
                        small: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['none'],
                                height: undefined,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {

                            },
                        },
                        none: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['none'],
                                height: undefined,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['lg'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.extraLargeProminent),
                            },
                            border: {

                            },
                        },
                    },
                },

                // Small Button
                small: {
                    borderRadius: {
                        large: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['none'],
                                height: undefined,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {

                            },
                        },
                        medium: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['none'],
                                height: undefined,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {

                            },
                        },
                        small: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['none'],
                                height: undefined,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {

                            },
                        },
                        none: {
                            background: {
                                backgroundColor: 'transparent',
                                paddingHorizontal: Spacing['none'],
                                height: undefined,
                                borderRadius: BorderRadius['none'],
                                gap: Spacing['md'],
                            },
                            text: {
                                color: Colors.inverseSurface.main,
                                ...StyleSheet.flatten(Font.label.large),
                            },
                            border: {

                            },
                        },
                    },
                },
            },
        },
    },
};
