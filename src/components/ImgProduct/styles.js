import styled, { css } from 'styled-components';

const imgSize = {
  small: () => css`
    width: 8rem;
    height: 8rem;
  `,
  normal: (theme) => css`
    width: 30rem;
    height: 30rem;
    @media ${theme.media.lteMedium} {
      width: 20rem;
      height: 20rem;
    }
  `,
  big: (theme) => css`
    width: 56rem;
    height: 56rem;
    @media ${theme.media.lteMedium} {
      width: 30rem;
      height: 30rem;
    }
  `,
};

export const Container = styled.img`
  ${({ theme, size }) => css`
    ${imgSize[size](theme)}

    border-radius: 0.5rem;
    border: none;
  `}
`;
