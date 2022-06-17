import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;
export const FirstSection = styled.div`
  width: 100%;
  height: 100%;
  > img {
  }
  > div {
    display: flex;
    flex-flow: column wrap;
    width: 50%;
    background-color: red;
    margin-left: 3rem;
    align-items: center;
    margin-top: 7.2rem;

    > h1 {
      text-align: center;
    }
    > button {
      margin-top: 2rem;
    }
    > div {
      display: flex;
      margin-top: 12rem;
      justify-content: space-between;
      background-color: #e5e5e5;
      height: 15.5rem;
      width: 100%;
    }
  }
`;
export const SecontSection = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      max-width: 40rem;
    }
    > div {
      margin-top: 10rem;
      > h1 {
        margin-bottom: 2rem;
      }
      > h4 {
        max-width: 38rem;
      }
    }
  }
`;
