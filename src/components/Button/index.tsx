import React from 'react';

import { Container, StyledButton } from './styles';

interface Props {
  ref?: any;
  sizeVariation?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  backgroundVariation?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warn'
    | 'info'
    | string;
  textColorVariation?: string;
}

type ButtonProps = JSX.IntrinsicElements['button'] & Props;

const Button: React.FC<ButtonProps> = ({
  children,
  sizeVariation = 'small',
  rounded,
  backgroundVariation = 'primary',
  textColorVariation,
  ref,
  ...rest
}) => (
  <Container>
    <StyledButton
      ref={ref}
      {...rest}
      rounded={rounded}
      sizeVariation={sizeVariation}
      textColorVariation={textColorVariation}
      backgroundVariation={backgroundVariation}
    >
      {children}
    </StyledButton>
  </Container>
);

export default Button;
