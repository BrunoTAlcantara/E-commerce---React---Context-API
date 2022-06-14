import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: ${theme.colors.secondaryColor};
    border-bottom: #ddd;
    ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
    @media ${theme.media.lteMedium} {
      visibility: hidden;
      opacity: 0;

      height: 100%;
      ${visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
      }
    }
  `}
`;
export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 1rem;
    justify-content: space-between;
    align-items: center;
    @media ${theme.media.lteMedium} {
      display: block;
      text-align: left;
      padding: ${theme.font.spacing.big} 0;
    }
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.lteMedium} {
      z-index: 6;
      display: block;
      position: fixed;
      top: 2rem;
      right: 2rem;
      width: 3rem;
      height: 3rem;
      background: ${theme.colors.secondaryColor};
      color: ${theme.colors.primaryColor};
      border: none;
    }
  `}
`;
