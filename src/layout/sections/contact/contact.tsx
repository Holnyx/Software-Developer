import styled from "styled-components";
import { StyledTitle } from "../../../component/sectionTitle";
import { Button } from "../../../component/button";
import emailjs from '@emailjs/browser';
import { ChangeEvent, ElementRef, useRef, useState } from "react";



export const Contact = () => {

  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return

    emailjs
      .sendForm('service_nv9z6uq', 'template_wfx9cww', form.current, {
        publicKey: 'WfhKeXE0sGtB2ej39',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <StyledContact id="contacts">
      <StyledTitle>Contact me</StyledTitle>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <FieldName>
          Name*
          <Field type="name" required name="user_name" />
        </FieldName>
        <FieldName>
          Email*
          <Field type="email" required name="subject" />
        </FieldName>
        <FieldName>
          Message
          <Field as="textarea" name="message" />
        </FieldName>
        <Button type={"submit"} typeof="reset" >Send</Button>
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
  max-width: 550px;
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
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: #363636;
  border: 1px solid #171717;
  box-sizing: border-box;
  margin-top: 16px;
  resize: vertical;
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
