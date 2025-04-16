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

// set button size
const mediumHeight = 50;
const smallHeight = 32;

export const tertiary: ButtonTokens = {
  variant: {
    filled: {
      size: {
        // Medium Button
        medium: {
          borderRadius: {
            large: {
              background: {
                backgroundColor: Colors.surface.containerHigh,
                paddingHorizontal: Spacing['2xl'],
                height: mediumHeight,
                borderRadius: BorderRadius['2xl'],
                gap: Spacing['lg'],
              },
              text: {
                color: Colors.surface.on,
                ...StyleSheet.flatten(Font.label.extraLargeProminent),
              },
              border: {},
            },
            medium: {
              background: {
                backgroundColor: Colors.surface.containerHigh,
                paddingHorizontal: Spacing['2xl'],
                height: mediumHeight,
                borderRadius: BorderRadius['sm'],
                gap: Spacing['lg'],
              },
              text: {
                color: Colors.surface.on,
                ...StyleSheet.flatten(Font.label.extraLargeProminent),
              },
              border: {},
            },
            small: {
              background: {
                backgroundColor: Colors.surface.containerHigh,
                paddingHorizontal: Spacing['2xl'],
                height: mediumHeight,
                borderRadius: BorderRadius['xs'],
                gap: Spacing['lg'],
              },
              text: {
                color: Colors.surface.on,
                ...StyleSheet.flatten(Font.label.extraLargeProminent),
              },
              border: {},
            },
            none: {
              background: {
                backgroundColor: Colors.surface.containerHigh,
                paddingHorizontal: Spacing['2xl'],
                height: mediumHeight,
                borderRadius: BorderRadius['none'],
                gap: Spacing['lg'],
              },
              text: {
                color: Colors.surface.on,
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
                backgroundColor: Colors.surface.containerHigh,
                paddingHorizontal: Spacing['xl'],
                height: smallHeight,
                borderRadius: BorderRadius['2xl'],
                gap: Spacing['md'],
              },
              text: {
                color: Colors.surface.on,
                ...StyleSheet.flatten(Font.label.large),
              },
              border: {},
            },
            medium: {
              background: {
                backgroundColor: Colors.surface.containerHigh,
                paddingHorizontal: Spacing['xl'],
                height: smallHeight,
                borderRadius: BorderRadius['sm'],
                gap: Spacing['md'],
              },
              text: {
                color: Colors.surface.on,
                ...StyleSheet.flatten(Font.label.large),
              },
              border: {},
            },
            small: {
              background: {
                backgroundColor: Colors.surface.containerHigh,
                paddingHorizontal: Spacing['xl'],
                height: smallHeight,
                borderRadius: BorderRadius['xs'],
                gap: Spacing['md'],
              },
              text: {
                color: Colors.surface.on,
                ...StyleSheet.flatten(Font.label.large),
              },
              border: {},
            },
            none: {
              background: {
                backgroundColor: Colors.surface.containerHigh,
                paddingHorizontal: Spacing['xl'],
                height: smallHeight,
                borderRadius: BorderRadius['none'],
                gap: Spacing['md'],
              },
              text: {
                color: Colors.surface.on,
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
                paddingHorizontal: Spacing['2xl'],
                height: mediumHeight,
                borderRadius: BorderRadius['2xl'],
                gap: Spacing['lg'],
              },
              text: {
                color: Colors.surface.onVariant,
                ...StyleSheet.flatten(Font.label.extraLargeProminent),
              },
              border: {
                borderWidth: 1,
                borderColor: Colors.surface.onVariant,
              },
            },
            medium: {
              background: {
                backgroundColor: 'transparent',
                paddingHorizontal: Spacing['2xl'],
                height: mediumHeight,
                borderRadius: BorderRadius['sm'],
                gap: Spacing['lg'],
              },
              text: {
                color: Colors.surface.onVariant,
                ...StyleSheet.flatten(Font.label.extraLargeProminent),
              },
              border: {
                borderWidth: 1,
                borderColor: Colors.surface.onVariant,
              },
            },
            small: {
              background: {
                backgroundColor: 'transparent',
                paddingHorizontal: Spacing['2xl'],
                height: mediumHeight,
                borderRadius: BorderRadius['xs'],
                gap: Spacing['lg'],
              },
              text: {
                color: Colors.surface.onVariant,
                ...StyleSheet.flatten(Font.label.extraLargeProminent),
              },
              border: {
                borderWidth: 1,
                borderColor: Colors.surface.onVariant,
              },
            },
            none: {
              background: {
                backgroundColor: 'transparent',
                paddingHorizontal: Spacing['2xl'],
                height: mediumHeight,
                borderRadius: BorderRadius['none'],
                gap: Spacing['lg'],
              },
              text: {
                color: Colors.surface.onVariant,
                ...StyleSheet.flatten(Font.label.extraLargeProminent),
              },
              border: {
                borderWidth: 1,
                borderColor: Colors.surface.onVariant,
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
                height: smallHeight,
                borderRadius: BorderRadius['2xl'],
                gap: Spacing['md'],
              },
              text: {
                color: Colors.surface.onVariant,
                ...StyleSheet.flatten(Font.label.large),
              },
              border: {
                borderWidth: 1,
                borderColor: Colors.surface.onVariant,
              },
            },
            medium: {
              background: {
                backgroundColor: 'transparent',
                paddingHorizontal: Spacing['xl'],
                height: smallHeight,
                borderRadius: BorderRadius['sm'],
                gap: Spacing['md'],
              },
              text: {
                color: Colors.surface.onVariant,
                ...StyleSheet.flatten(Font.label.large),
              },
              border: {
                borderWidth: 1,
                borderColor: Colors.surface.onVariant,
              },
            },
            small: {
              background: {
                backgroundColor: 'transparent',
                paddingHorizontal: Spacing['xl'],
                height: smallHeight,
                borderRadius: BorderRadius['xs'],
                gap: Spacing['md'],
              },
              text: {
                color: Colors.surface.onVariant,
                ...StyleSheet.flatten(Font.label.large),
              },
              border: {
                borderWidth: 1,
                borderColor: Colors.surface.onVariant,
              },
            },
            none: {
              background: {
                backgroundColor: 'transparent',
                paddingHorizontal: Spacing['xl'],
                height: smallHeight,
                borderRadius: BorderRadius['none'],
                gap: Spacing['md'],
              },
              text: {
                color: Colors.surface.onVariant,
                ...StyleSheet.flatten(Font.label.large),
              },
              border: {
                borderWidth: 1,
                borderColor: Colors.surface.onVariant,
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
                color: Colors.surface.onVariant,
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
                color: Colors.surface.onVariant,
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
                color: Colors.surface.onVariant,
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
                color: Colors.surface.onVariant,
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
                color: Colors.surface.onVariant,
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
                color: Colors.surface.onVariant,
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
                color: Colors.surface.onVariant,
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
                color: Colors.surface.onVariant,
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

