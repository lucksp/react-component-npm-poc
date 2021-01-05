import styled from 'styled-components';

export const StyledButton = styled.button`
  align-items: center;
  background-color: #764abc;
  border: none;
  border-radius: 4px;
  color: #eee;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  font-size: 14px;
  justify-content: space-between;
  padding: 8px 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5f2caf;
    transition: background-color 0.2s;
  }
`;
