import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: inherit;
    font-size: ${theme.font.sizes.big};
    font-weight: ${theme.font.weight.eBold};

    > img {
      max-height: 2.5rem;
    }
    @media ${theme.media.lteMedium} {
      max-height: 2.5rem;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
