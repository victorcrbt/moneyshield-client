import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';
import DatePicker from 'react-datepicker';

interface InputProps {
  sizeVariation?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  error?: boolean | null | undefined;
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
  width: 100%;
  padding: ${(props) => props.theme.paddings.xs};

  display: flex;
  flex-direction: column;

  .react-datepicker-wrapper {
    width: 100% !important;
  }

  .react-datepicker {
    margin-top: 4px !important;
  }

  .react-datepicker__triangle {
    left: 50% !important;
  }
`;

export const Input = styled(DatePicker)<InputProps>`
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
  border: 1px solid ${(props) => props.theme.colors.grayLighter};
  border-radius: ${(props) => (props.rounded ? '4px' : 0)} !important;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    background: ${(props) => darken(0.03, props.theme.colors.white)};
    border: 1px solid ${(props) => props.theme.colors.grayLightiest};
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${() => props.theme.colors.error} !important;
    `}
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
