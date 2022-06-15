import styled, { css } from 'styled-components';
import { ShoppingCart as CartIcon } from '@styled-icons/material-outlined/ShoppingCart';

const buttonSize = {
  normal: () => css`
    width: 15rem;
    height: 4rem;
  `,
  big: () => css`
    width: 35rem;
    height: 4.2rem;
  `,
};
const buttonColor = {
  primary: (theme) => css`
    color: ${theme.colors.secondaryColor};
    background-color: ${theme.colors.primaryColor};
  `,
  secondary: (theme) => css`
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.secondaryColor};
  `,
  disabled: (theme) => css`
    color: ${theme.colors.primaryColor};
    border: 0.3rem solid ${theme.colors.primaryColor};
    background: none;
  `,
};

export const Container = styled.button`
  ${({ theme, size, color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    border: none;
    border-radius: 0.5rem;
    ${buttonSize[size]}
    ${buttonColor[color](theme)}
  `}
`;

export const Icon = styled(CartIcon)`
  width: 2.5rem;
  right: 2.5rem;
`;
