import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .boxWrap {
      width: 100%;

      @media (min-width: 1000px) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
      }
    }
  `}
`;
