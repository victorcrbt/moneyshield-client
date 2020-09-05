/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';
import { registerLocale, ReactDatePickerProps } from 'react-datepicker';
import { pt, enUS, es } from 'date-fns/locale';

import { Container, Label, Input, ErrorHelper } from './styles';

export type DateType = Date | [Date, Date] | null;
export type DateValueType = Date | null | undefined;
export type EventType = React.SyntheticEvent<any, Event> | undefined;

interface Props {
  name?: string;
  sizeVariation?: 'small' | 'medium' | 'large';
  label?: string;
  error?: boolean | null | undefined;
  errorMessage?: string | null;
  inputRef?: any;
  rounded?: boolean;
  placeholder?: string;
  disabled?: boolean;
  locale?: 'pt-BR' | 'en-US' | 'es-ES';
}

type InputProps = Props & ReactDatePickerProps;

registerLocale('pt-BR', pt);
registerLocale('en-US', enUS);
registerLocale('es-ES', es);

const DateInput: React.FC<InputProps> = ({
  name,
  label,
  rounded = false,
  sizeVariation = 'medium',
  dateFormat = 'dd/MM/yyyy',
  placeholder,
  locale = 'pt-BR',
  disabled,
  inputRef,
  error,
  errorMessage,
  value,
  onChange,
  ...rest
}) => {
  const [currentValue, setCurrentValue] = useState<DateValueType>();

  function handleInputChange(date: any, event: any): void {
    if (onChange) {
      onChange(date as Date, event);
    } else {
      setCurrentValue(date as Date);
    }
  }

  return (
    <Container>
      {label && <Label>{label}</Label>}

      <Input
        autoComplete="off"
        dateFormat={dateFormat}
        name={name}
        locale={locale}
        onChange={handleInputChange}
        selected={value || currentValue}
        rounded={rounded}
        sizeVariation={sizeVariation}
        placeholderText={placeholder}
        disabled={disabled}
        customInputRef={inputRef}
        ref={inputRef}
        error={error}
        {...rest}
      />

      {error && <ErrorHelper>{errorMessage}</ErrorHelper>}
    </Container>
  );
};

export default DateInput;
