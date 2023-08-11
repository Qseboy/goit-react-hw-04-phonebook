const { default: styled } = require('@emotion/styled');

export const ContactUiForm = styled.form`
  width: 400px;
  padding: 20px;
  border: 2px solid rgb(17, 17, 17);
  border-radius: 3px;
`;
export const ContactDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`;
export const ContactLabel = styled.label`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;
export const ContactButton = styled.button`
  padding: 5px 10px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
`;
