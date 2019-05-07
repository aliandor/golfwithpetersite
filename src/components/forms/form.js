import React from 'react'
import styled from 'styled-components';
import FormLogo from './formLogo'
import Brand from '../brand'

let Today = new Date();
let day = Today.getDate();
let month = Today.getMonth() + 1;
let year = Today.getFullYear();
let hour = Today.getHours();
let Min = Today.getMinutes();
let sec = Today.getSeconds();
if(day < 10) {
  day= `0${day}`
}
if(month < 10) {
  month = `0${month}`
}
Today = `${year}-${month}-${day}`

const Form = () => {
  return (
    <ContactPage>
      <Top>
        <Brand text='Book' />
        <FormLogo />
      </Top>
      <Contact name="contact" method="post" data-netlify="true">
      <input type='hidden' name='form-name' value='contact' />
        <Field>
          <HiddenLabel for='name'>Name</HiddenLabel>
          <input type='text' id='name' name='user_name' placeholder='Name' required></input>
        </Field>
        <Field>
          <HiddenLabel for='phone'>Phone (eg. 111-222-3333)</HiddenLabel>
          <input type='text' id='phone' name='user_phone' placeholder='Phone (eg. 111-222-3333)' pattern='\d{3}-\d{3}-\d{4}' required></input>
        </Field>      
        <Field>
          <HiddenLabel for='email'>E-mail</HiddenLabel>
          <input type='text' id='email' name='user_email' placeholder='E-mail' required></input>
        </Field>
        <Field>
          <Lesson>
            <label for='Class-type'>Lesson Type:</label>
            <select name='Class-type' required>
              <option value='Adult'>Adult - $55 - 30 mins</option>
              <option value='Junior'>Junior - 45 - 30 mins</option>
              <option value='Group'>Group - $120/hr</option>
            </select>
          </Lesson>
        </Field>
        <Field>
          <Lesson>
            <label>Ideal Session Date:</label>
            <input type='date' id='date' name='date' min={Today} required/>
          </Lesson>
        </Field>
        <Field>
          <Lesson> 
            <label>Ideal Time:</label>
            <input type='time' id='time' name='time' min='10:00' max='17:00' required/>
          </Lesson>
        </Field>
        <Field>
          <LessonTextArea>
          <label for='msg'>Comments</label>
          <textarea id='msg' name='user_message' placeholder='Notes, Questions, or Comments...'></textarea>
          </LessonTextArea>
        </Field>
        <BookNow>Book Now</BookNow>
      </Contact>
    </ContactPage>
  )
}

export default Form

const ContactPage = styled.div`
  position: relative;
  top: 75px;
  padding-bottom: 100px;
  width: 100%;
  max-width: 600px;
`;

const Top = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  padding: 0 1rem;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between;
  p:nth-child(1) {
    /* Book */
    transform: translateX(-2px) translateY(32px);
  }
  p:nth-child(2) {
    /* with */
    transform: translateX(4px) translateY(0px);
  }
  p:nth-child(3) {
    /* peter */
    transform: translateX(-46px) translateY(26px);
  }
`;

const Contact = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 40px) 100px;
  grid-row-gap: 1.125rem;
  width: 100vw;
  max-width: 600px;
  padding: 1rem;
  justify-content: space-between;
`;

const Field = styled.div`
  height: 44px;
  display: flex;
  flex-flow: column wrap;
  grid-column: 1/ -1;
  /* border: 1px solid; */
  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid lightgray;
    &::placeholder {
      font-weight: 400px;
      color: #333;
    }
    &:focus {
      outline: #fff;
      border-bottom: 2px solid #10B523;
      &::placeholder {
        opacity: 0;
      }
    }
  }
  &:focus-within {
    label {
      opacity: 0.7;
      font-weight: 400px;
    }
  }
`;
const HiddenLabel = styled.label`
  opacity: 0;
  transform: translateY(2px);
`;

const Lesson = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  label {
    width: 50%;
    transform: translateY(20px);
  }
  input {
    width: 50%;
    background: none;
    border-bottom: 2px solid lightgray;
    &:focus {
      border-bottom: 2px solid #10B523;
    }
    transform: translateY(14px);
  }
  select {
    background: none;
    border: none;
    border-bottom: 2px solid lightgray;
    &:focus {
      border-bottom: 2px solid #10B523;
    }
    width: 50%;
    transform: translateY(18px);
  }
`;

const LessonTextArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 2rem;
  grid-row: -1;
  label {
    width: 100%;
    padding-bottom: 0.25rem;
    opacity: 0;
  }
  textarea {
    width: 100%;
    height: 100px;
    padding: 0 5px;
    &:focus {
      outline: 1px solid #10B523;
      &::placeholder {
        opacity: 0;
      }
    }
  }
  &:focus-within {
    label {
      opacity: 0.7;
    }
  }  
`;

const BookNow = styled.button`
  grid-column: 1/ -1;
  height: 64px;
  margin-top: 1.125rem;
  background: linear-gradient(to bottom right, #006234, 5%, #10B523);
  border: none;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  transform: translateY(14px);
`;