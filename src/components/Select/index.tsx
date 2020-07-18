import React, { useState, useRef } from 'react';

import {
  Container,
  Input,
  SelectedOption,
  Label,
  ErrorHelper,
  OptionsContainer,
  Option,
} from './styles';

interface Props {
  sizeVariation?: 'small' | 'medium' | 'large';
  label?: string;
  error?: string | null;
  inputRef?: any;
  rounded?: boolean;
  options: Array<string | number | { [key: string]: string | number }>;
  valueKeyExtractor?: string;
  optionLabelKeyExtractor?: string;
  inputValue?: any;
  setInputValue?: any;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Select: React.FC<InputProps> = ({
  sizeVariation = 'small',
  label,
  error,
  inputRef,
  rounded = false,
  options = [],
  valueKeyExtractor,
  optionLabelKeyExtractor,
  placeholder,
  disabled,
  inputValue,
  setInputValue,
  id,
  ...rest
}) => {
  const selectedOptionRef = useRef<HTMLDivElement>(null);
  const optionsContainerRef = useRef<HTMLDivElement>(null);

  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState<any>('');
  const [optionLabel, setOptionLabel] = useState<any>();

  if (typeof options[0] === 'object' && !valueKeyExtractor) {
    throw new Error(
      'To provide an array of objects, you must provide the property "valueKeyExtractor", with the name of the property in the object that will be used as the input value.'
    );
  }

  if (typeof options[0] === 'object' && !optionLabelKeyExtractor) {
    throw new Error(
      'To provide an array of objects, you must provide the property "optionLabelKeyExtractor", with the name of the property in the object that will be used as option label.'
    );
  }

  function handleClick(event: MouseEvent) {
    if (event.currentTarget) {
      setFocused(!focused);
    }

    function detectClickOutside(e: MouseEvent) {
      if (
        selectedOptionRef.current &&
        !selectedOptionRef.current.contains(e.target as Node) &&
        !optionsContainerRef.current?.contains(e.target as Node)
      ) {
        setFocused(false);
      }
    }

    document.addEventListener('click', detectClickOutside);

    return () => document.removeEventListener('click', detectClickOutside);
  }

  return (
    <Container>
      {label && <Label>{label}</Label>}

      <SelectedOption
        focused={focused}
        sizeVariation={sizeVariation}
        onClick={handleClick}
        ref={selectedOptionRef}
      >
        {optionLabel}
      </SelectedOption>

      <Input
        id={id || 'generic_select'}
        autoComplete="off"
        value={inputValue || inputValue === '' ? inputValue : value}
        onChange={() => {}}
        placeholder={placeholder}
        disabled={disabled}
        ref={inputRef}
        {...rest}
      />

      {focused && (
        <OptionsContainer
          ref={optionsContainerRef}
          sizeVariation={sizeVariation}
        >
          {options.map((option) => (
            <Option
              sizeVariation={sizeVariation}
              key={
                typeof option === 'object' ? option[valueKeyExtractor!] : option
              }
              onClick={() => {
                if ((inputValue || inputValue === '') && setValue) {
                  setInputValue(
                    typeof option === 'object'
                      ? option[valueKeyExtractor!]
                      : option
                  );

                  setOptionLabel(
                    typeof option === 'object'
                      ? option[optionLabelKeyExtractor!]
                      : option
                  );

                  setFocused(false);
                } else {
                  setValue(
                    typeof option === 'object'
                      ? option[valueKeyExtractor!]
                      : option
                  );

                  setOptionLabel(
                    typeof option === 'object'
                      ? option[optionLabelKeyExtractor!]
                      : option
                  );

                  setFocused(false);
                }
              }}
            >
              {typeof option === 'object'
                ? option[optionLabelKeyExtractor!]
                : option}
            </Option>
          ))}
        </OptionsContainer>
      )}

      {error && <ErrorHelper>Este campo é obrigatório.</ErrorHelper>}
    </Container>
  );
};

export default Select;
