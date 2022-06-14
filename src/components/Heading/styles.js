import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) =>
    css`
      font-size: ${theme.font.sizes.small};
    `,
  medium: (theme) =>
    css`
      font-size: ${theme.font.sizes.medium};
    `,
  big: (theme) =>
    css`
      font-size: ${theme.font.sizes.big};
    `,
  huge: (theme) =>
    css`
      font-size: ${theme.font.sizes.huge};
      ${mediaFont(theme)};
    `,
};
const titleWeight = {
  bold: (theme) =>
    css`
      font-weight: ${theme.font.weight.bold};
    `,
  eBold: (theme) =>
    css`
      font-weight: ${theme.font.weight.eBold};
    `,
  regular: (theme) =>
    css`
      font-weight: ${theme.font.weight.regular};
    `,
  thin: (theme) => css`
    font-weight: ${theme.font.weight.thin};
  `,
};
const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;
const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.big};
  }
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, weight, uppercase }) => css`
    color: ${colorDark
      ? theme.colors.primaryColor
      : theme.colors.secondaryColor};
    ${titleCase(uppercase)}
    ${titleSize[size](theme)};
    ${titleWeight[weight](theme)};
  `}
`;
