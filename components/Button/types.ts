type CommonButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  variant: 'filled' | 'outlined' | 'text';
  size: 'medium' | 'small';
  borderRadius?: 'large' | 'medium' | 'small' | 'none';
  title: string;
};

type ButtonLeftIcon = CommonButtonProps & {
  leftIcon: JSX.Element;
  rightIcon?: never;
};

type ButtonRightIcon = CommonButtonProps & {
  leftIcon?: never;
  rightIcon: JSX.Element;
};

type ButtonNoIcon = CommonButtonProps & {
  leftIcon?: undefined;
  rightIcon?: undefined;
};

export type ButtonProps = ButtonLeftIcon | ButtonRightIcon | ButtonNoIcon;