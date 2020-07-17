/* eslint-disable indent */
import styled from 'styled-components';

interface ContainerProps {
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

export const Container = styled.div<ContainerProps>`
  width: 100%;

  @media screen and (max-width: 425px) {
    width: ${(props) => {
      if (props.xs || props.columns) {
        if (props.xs) {
          return props.xs > 12 ? '100%' : `${(100 / 12) * props.xs}%`;
        }

        if (props.columns) {
          return props.columns.xs && props.columns.xs <= 12
            ? `${(100 / 12) * props.columns.xs}%`
            : '100%';
        }
      }

      return '100%';
    }};
  }

  @media screen and (max-width: 600px) and (min-width: 426px) {
    width: ${(props) => {
      if (props.sm || props.columns) {
        if (props.sm) {
          return props.sm > 12 ? '100%' : `${(100 / 12) * props.sm}%`;
        }

        if (props.columns) {
          return props.columns.sm && props.columns.sm <= 12
            ? `${(100 / 12) * props.columns.sm}%`
            : '100%';
        }
      }

      return '100%';
    }};
  }

  @media screen and (max-width: 900px) and (min-width: 601px) {
    width: ${(props) => {
      if (props.md || props.columns) {
        if (props.md) {
          return props.md > 12 ? '100%' : `${(100 / 12) * props.md}%`;
        }

        if (props.columns) {
          return props.columns.md && props.columns.md <= 12
            ? `${(100 / 12) * props.columns.md}%`
            : '100%';
        }
      }

      return '100%';
    }};
  }

  @media screen and (max-width: 1200px) and (min-width: 901px) {
    width: ${(props) => {
      if (props.lg || props.columns) {
        if (props.lg) {
          return props.lg > 12 ? '100%' : `${(100 / 12) * props.lg}%`;
        }

        if (props.columns) {
          return props.columns.lg && props.columns.lg <= 12
            ? `${(100 / 12) * props.columns.lg}%`
            : '100%';
        }
      }

      return '100%';
    }};
  }

  @media screen and (min-width: 1201px) {
    width: ${(props) => {
      if (props.xl || props.columns) {
        if (props.xl) {
          return props.xl > 12 ? '100%' : `${(100 / 12) * props.xl}%`;
        }

        if (props.columns) {
          return props.columns.xl && props.columns.xl <= 12
            ? `${(100 / 12) * props.columns.xl}%`
            : '100%';
        }
      }

      return '100%';
    }};
  }
`;
