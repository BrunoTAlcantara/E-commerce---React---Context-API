import styled, { css } from 'styled-components';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    color: ${theme.colors.primaryColor};
    border: none;
    margin-left: 1rem;
    background: none;
    @media ${theme.media.lteMedium} {
      width: 2rem;
      height: 2rem;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
