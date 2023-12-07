import styled from "styled-components";
import { StyledTitle } from "../../../component/sectionTitle";
import { Button } from "../../../component/button";

export const Contact = () => {
  return (
    <StyledContact>
      <StyledTitle>Contact</StyledTitle>
      <StyledForm>
        <FieldName>Name</FieldName>
        <Field />
        <FieldName>Email</FieldName>
        <Field />
        <FieldName>Message</FieldName>
        <Field as="textarea" />
        <Button type={"submit"}>Send</Button>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  background-color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 56px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  gap: 24px;
`;
const Field = styled.input`
max-width: 400px;
width: 100%;
`;
const FieldName = styled.span``;
