import styled from 'styled-components';

export const Container = styled.div`
  max-width: 3840px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`;
