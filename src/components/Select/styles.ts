import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

interface InputProps {
  sizeVariation?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  focused?: boolean;
  disabled?: boolean;
  onClick?: any;
}

interface OptionsContainerProps {
  sizeVariation?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  label?: boolean;
}

interface OptionProps {
  sizeVariation?: 'small' | 'medium' | 'large';
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to: {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: ${(props) => props.theme.paddings.xs};

  display: flex;
  flex-direction: column;
`;

export const SelectedOption = styled.div<InputProps>`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  height: ${({ sizeVariation }) => {
    if (sizeVariation === 'medium') {
      return '36px';
    }

    if (sizeVariation === 'large') {
      return '48px';
    }

    return '28px';
  }};
  padding: 0 ${({ theme }) => theme.margins.xs};

  font-size: ${({ sizeVariation, theme }) => {
    if (sizeVariation === 'medium') {
      return theme.text.md;
    }

    if (sizeVariation === 'large') {
      return theme.text.lg;
    }

    return theme.text.sm;
  }};

  transition: all 0.2s;
  background: ${(props) => props.theme.colors.white};
  border: ${(props) => {
    if (props.focused) {
      return `1px solid ${props.theme.colors.primary}`;
    }

    if (props.disabled) {
      return ` 1px solid ${props.theme.colors.grayLightiest};`;
    }

    return `1px solid ${props.theme.colors.grayLighter}`;
  }};
  border-radius: ${(props) => {
    if (!props.focused && props.rounded) {
      return '4px';
    }

    if (!props.focused && props.rounded) {
      return 0;
    }

    if (props.focused && props.rounded) {
      return '4px 4px 0 0';
    }

    if (props.focused && !props.rounded) {
      return 0;
    }
  }};

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 8px;

    transition: transform 400ms;

    border-left: ${(props) => {
      if (props.sizeVariation === 'large') {
        return '6px solid transparent';
      }

      if (props.sizeVariation === 'medium') {
        return '6px solid transparent';
      }

      return '4px solid transparent';
    }};

    border-right: ${(props) => {
      if (props.sizeVariation === 'large') {
        return '6px solid transparent';
      }

      if (props.sizeVariation === 'medium') {
        return '6px solid transparent';
      }

      return '4px solid transparent';
    }};

    border-top: ${(props) => {
      if (props.sizeVariation === 'large') {
        return '6px solid #444';
      }

      if (props.sizeVariation === 'medium') {
        return '6px solid #444';
      }

      return '4px solid #444';
    }};

    transform: ${(props) => (props.focused ? 'rotate(-180deg)' : 'rotate(0)')};
  }
`;

export const Input = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
`;

export const Label = styled.label`
  margin-bottom: ${(props) => props.theme.text.xxs};

  font-weight: bold;
`;

export const ErrorHelper = styled.div`
  margin-top: ${(props) => props.theme.text.xxs};

  animation-name: ${fadeIn};
  animation-duration: 400ms;

  color: ${(props) => props.theme.colors.errorDarker};
  font-size: ${(props) => props.theme.text.sm};
`;

export const OptionsContainer = styled.div<OptionsContainerProps>`
  position: absolute;
  left: ${(props) => {
    const padding = Number(props.theme.paddings.xs.replace(/[p,x]/gi, ''));

    return `${padding + 1}px`;
  }};
  top: ${({ sizeVariation, label }) => {
    if (sizeVariation === 'medium') {
      return label ? '66px' : '44px';
    }

    if (sizeVariation === 'large') {
      return label ? '78px' : '56px';
    }

    return label ? '58px' : '35px';
  }};

  max-height: 200px;
  width: ${(props) => {
    const padding = Number(props.theme.paddings.xs.replace(/[p,x]/gi, '')) * 2;

    return `calc(100% - ${padding + 2}px)`;
  }};

  animation-name: ${fadeIn};
  animation-duration: 400ms;

  border-bottom-left-radius: ${(props) => (props.rounded ? '4px' : 0)};
  border-bottom-right-radius: ${(props) => (props.rounded ? '4px' : 0)};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 1px 1px ${(props) => props.theme.colors.primary};

  overflow: auto;
  z-index: 999;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    margin-right: 5px;

    background-color: ${(props) => props.theme.colors.grayLightiest};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.grayDark};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Option = styled.div<OptionProps>`
  padding: ${({ sizeVariation }) => {
    if (sizeVariation === 'medium') {
      return '12px';
    }

    if (sizeVariation === 'large') {
      return '16px';
    }

    return '8px';
  }};

  cursor: pointer;

  &:hover {
    background: ${(props) => darken(0.04, props.theme.colors.white)};
  }
`;
