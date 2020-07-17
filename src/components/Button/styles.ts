import styled from 'styled-components';
import { saturate } from 'polished';

interface ButtonProps {
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

export const Container = styled.div`
  padding: 0 ${(props) => props.theme.paddings.xs};
  margin: ${(props) => props.theme.margins.sm} 0;

  width: 100%;
`;

export const StyledButton = styled.button<ButtonProps>`
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

  background: ${({ theme, backgroundVariation }) => {
    const variations = [
      'primary',
      'secondary',
      'success',
      'error',
      'warn',
      'info',
    ];

    if (backgroundVariation === 'primary') {
      return theme.colors.primary;
    }

    if (backgroundVariation === 'secondary') {
      return theme.colors.secondary;
    }

    if (backgroundVariation === 'success') {
      return theme.colors.success;
    }

    if (backgroundVariation === 'error') {
      return theme.colors.error;
    }

    if (backgroundVariation === 'warn') {
      return theme.colors.warn;
    }

    if (backgroundVariation === 'info') {
      return theme.colors.info;
    }

    if (backgroundVariation && !variations.includes(backgroundVariation)) {
      return backgroundVariation;
    }

    return theme.colors.primary;
  }};

  color: ${({ theme, textColorVariation, backgroundVariation }) => {
    if (!textColorVariation && backgroundVariation === 'primary') {
      return theme.colors.white;
    }

    if (!textColorVariation && backgroundVariation === 'secondary') {
      return theme.colors.white;
    }

    if (!textColorVariation && backgroundVariation === 'success') {
      return theme.colors.white;
    }

    if (!textColorVariation && backgroundVariation === 'error') {
      return theme.colors.white;
    }

    if (!textColorVariation && backgroundVariation === 'warn') {
      return theme.colors.white;
    }

    if (!textColorVariation && backgroundVariation === 'info') {
      return theme.colors.white;
    }

    if (textColorVariation) {
      return textColorVariation;
    }

    return theme.colors.white;
  }};

  font-weight: bold;

  transition: background 0.2s;
  border: 0;
  border-radius: ${(props) => (props.rounded ? '4px' : 0)};

  &:hover {
    background: ${({ theme, backgroundVariation }) => {
      const variations = [
        'primary',
        'secondary',
        'success',
        'error',
        'warn',
        'info',
      ];

      if (backgroundVariation === 'primary') {
        return saturate(0.2, theme.colors.primary);
      }

      if (backgroundVariation === 'secondary') {
        return saturate(0.2, theme.colors.secondary);
      }

      if (backgroundVariation === 'success') {
        return saturate(0.2, theme.colors.success);
      }

      if (backgroundVariation === 'error') {
        return saturate(0.2, theme.colors.error);
      }

      if (backgroundVariation === 'warn') {
        return saturate(0.2, theme.colors.warn);
      }

      if (backgroundVariation === 'info') {
        return saturate(0.2, theme.colors.info);
      }

      if (backgroundVariation && !variations.includes(backgroundVariation)) {
        return backgroundVariation;
      }

      return saturate(0.2, theme.colors.primary);
    }};
  }
`;
