import styled from 'styled-components';

const Content = styled.section`
  box-sizing: border-box;
  display: grid;
  gap: 12px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export default Content;