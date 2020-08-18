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

type ColumnProps = JSX.IntrinsicElements['div'] & Props;

const Column: React.FC<ColumnProps> = ({
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

export default Column;
