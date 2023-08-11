const { default: styled } = require('@emotion/styled');

export const ContactLi = styled.li``;
export const ContactButton = styled.button`
  padding: 5px 10px;
  margin-left: 15px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: transparent;

  font-size: 16px;
  cursor: pointer;

  &:hover {
    border-color: #111111;
  }
`;
