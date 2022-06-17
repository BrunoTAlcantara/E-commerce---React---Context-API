import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
  display: flex;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;

    padding: 1rem 15rem;
    background: ${theme.colors.secondaryColor};
    border-bottom: #ddd;
    ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
    @media ${theme.media.lteMedium} {
      visibility: hidden;
      opacity: 0;
      display: none;
      height: 100%;
      ${visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100%;
        align-items: center;
        justify-content: center;
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
    background: ${theme.colors.secondaryColor};

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: left;
      padding: ${theme.font.spacing.big} 0;
      > h1 {
        display: none;
      }
      > div {
        display: none;
      }
    }
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      right: 2rem;
      width: 3rem;
      height: 3rem;
      background: none;
      color: ${theme.colors.primaryColor};
      border: none;
      margin: 1rem;
    }
  `}
`;
export const MenuMob = styled.div`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.lteMedium} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 3;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      padding: 1rem;

      background: ${theme.colors.secondaryColor};
      border-bottom: #ddd;
    }
  `}
`;
