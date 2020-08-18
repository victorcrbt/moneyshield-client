import React from 'react';

import { Container, Input, Label, ErrorHelper } from './styles';

interface Props {
  sizeVariation?: 'small' | 'medium' | 'large';
  label?: string;
  error?: string | null;
  inputRef?: any;
  rounded?: boolean;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const TextInput: React.FC<InputProps> = ({
  sizeVariation = 'medium',
  label,
  error,
  inputRef,
  rounded = false,
  placeholder,
  disabled,
  ...rest
}) => (
  <Container>
    {label && <Label>{label}</Label>}

    <Input
      rounded={rounded}
      sizeVariation={sizeVariation}
      placeholder={placeholder}
      disabled={disabled}
      ref={inputRef}
      {...rest}
    />

    {error && <ErrorHelper>Este campo é obrigatório.</ErrorHelper>}
  </Container>
);

export default TextInput;
