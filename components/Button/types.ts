type CommonButtonProps = {
    type: 'primary' | 'secondary' | 'tertiary';
    variant: 'filled' | 'outlined' | 'text';
    size: 'medium' | 'small';
    borderRadius?: 'large' | 'medium' | 'small' | 'none';
    title: string;
  };
  
  type ButtonLeftIcon = CommonButtonProps & {
    iconLeft: JSX.Element;
    iconRight?: never;
  };
  
  type ButtonRightIcon = CommonButtonProps & {
    iconLeft?: never;
    iconRight: JSX.Element;
  };
  
  type ButtonNoIcon = CommonButtonProps & {
    iconLeft?: undefined;
    iconRight?: undefined;
  };
  
  export type ButtonProps = ButtonLeftIcon | ButtonRightIcon | ButtonNoIcon;