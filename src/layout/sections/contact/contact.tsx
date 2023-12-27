import styled from "styled-components";
import { StyledTitle } from "../../../component/sectionTitle";
import { Button } from "../../../component/button";


export const Contact = () => {
  return (
    <StyledContact id="contacts">
      <StyledTitle>Contact me</StyledTitle>
      <StyledForm>
        <FieldName>
          Name*
          <Field type="name" required/>
        </FieldName>
        <FieldName>
          Email*
          <Field type="email" required/>
        </FieldName>
        <FieldName>
          Message
          <Field as="textarea" />
        </FieldName>
        <Button type={"submit"}>Send</Button>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 56px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  gap: 24px;
  button {
    margin-left: auto;
  }
`;
const Field = styled.input.attrs(({ type }) => ({
  type: type || "text",
}))`
  padding-left: 20px;
  outline: none;
  max-width: 400px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: #363636;
  border: 1px solid #171717;
  box-sizing: border-box;
  margin-top: 16px;
  &:user-invalid {
    border-color: #ff0000;
  }
  &:user-valid{
    border-color: #ffb52d;
  }
`;
const FieldName = styled.label`
  color: #adadad;
  font-family: "Nunito";
  textarea {
    height: 190px;
    padding-top: 20px;
  }
`;
