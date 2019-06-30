import styled from 'styled-components';

const Columns = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 759px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export default Columns;
