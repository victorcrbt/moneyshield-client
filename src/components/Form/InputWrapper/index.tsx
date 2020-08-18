import React from 'react';

import { Container } from './styles';

interface Props {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  columns?: {
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
  };
}

type InputWrapperProps = JSX.IntrinsicElements['div'] & Props;

const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  xl,
  lg,
  md,
  sm,
  xs,
  columns,
}) => {
  return (
    <Container xl={xl} lg={lg} md={md} sm={sm} xs={xs} columns={columns}>
      {children}
    </Container>
  );
};

export default InputWrapper;
