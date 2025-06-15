
import { primary } from "./primary";
import { secondary } from "./secondary";
import { tertiary } from "./tertiary";

export const ButtonTokens = {
  type: {
    primary,
    secondary,
    tertiary,
  },
};

export type ButtonTokensType = typeof ButtonTokens;