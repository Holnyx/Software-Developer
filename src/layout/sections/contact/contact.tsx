import styled from "styled-components";
import { StyledTitle } from "../../../component/sectionTitle";
import { Button } from "../../../component/button";

export const Contact = () => {
  return (
    <StyledContact>
      <StyledTitle>Contact me</StyledTitle>
      <StyledForm>
        <FieldName>
          Name
          <Field />
        </FieldName>
        <FieldName>
          Email
          <Field type="email" />
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
  border: 1px solid #e8ecf4;
  box-sizing: border-box;
  margin-top: 16px;
`;
const FieldName = styled.label`
  color: #25282b;
  font-family: "Nunito";
  textarea {
    height: 190px;
    padding-top: 20px;
  }
`;
