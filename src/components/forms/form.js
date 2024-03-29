import React from 'react'
import styled from 'styled-components'
import FormLogo from './formLogo'
import Brand from '../brand'

const Form = () => {
  return (
    <ContactPage>
      <Top>
        <h1>Book a lesson</h1>
      </Top>
      <Contact name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <Field>
          <HiddenLabel for="name">Name</HiddenLabel>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Name"
            required
          />
        </Field>
        <Field>
          <HiddenLabel for="phone">Phone</HiddenLabel>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            placeholder="Phone (eg. 111-222-3333)"
            pattern="\d{3}-\d{3}-\d{4}"
            required
          />
        </Field>
        <Field>
          <HiddenLabel for="email">E-mail</HiddenLabel>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="E-mail"
            required
          />
        </Field>
        <Field>
          <Lesson>
            <label for="Class-type">Lesson Type:</label>
            <select name="Class-type" required>
              <option value="Adult">Adult - $65 - 30 mins</option>
              <option value="Junior">Junior - $55 - 30 mins</option>
              <option value="Group">Group - $175 - 60 mins</option>
              <option value="Bag Mapping">Bag Mapping - $120 - 75mins</option>
            </select>
          </Lesson>
        </Field>
        {/* <Field>
          <Lesson>
            <label>Ideal Session Date:</label>
            <input type="date" id="date" name="date" min={Today} required />
          </Lesson>
        </Field> */}
        {/* <Field>
          <Lesson>
            <label>Ideal Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              min="10:00"
              max="17:00"
              required
            />
          </Lesson>
        </Field> */}
        <Field>
          <LessonTextArea>
            <label for="msg">Comments</label>
            <textarea
              id="msg"
              name="user_message"
              placeholder="Notes, Questions, or Comments..."
            />
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
`

const Top = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  padding: 0 1rem;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between; 
  h1 {
  font-size: 2rem;
    color: #001a70;
  }
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
  @media (min-width: 360px) {
//     padding: 0 2rem;
  }
`

const Contact = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 50px) 100px;
  grid-row-gap: 2rem;
  width: 100vw;
  max-width: 600px;
  padding: 1rem;
  justify-content: space-between;
`

const Field = styled.div`
  height: 44px;
  display: flex;
  flex-flow: column nowrap;
  grid-column: 1/ -1;
  /* border: 1px solid; */
  input {
    width: 100%;
    border: none;
    border-radius: 10px;
    background: #c4c4c444;
    padding: 1rem;
    &::placeholder {
      font-weight: 400px;
      color: #333;
    }
    &:focus {
      outline: #fff;
      border: 2px solid #001a70;
      &::placeholder {
        opacity: 0;
      }
    }
  }
  &:focus-within {
    label {
      opacity: 0.7;
      font-weight: 600px;
    }
  }
`
const HiddenLabel = styled.label`
  opacity: 0;
  transform: translateY(2px);
`

const Lesson = styled.div`
  display: flex;
  width: 100%;
//   height: 60px;
//   background: #c4c4c444;
  justify-content: space-between;
  
  padding: 0.5rem;
  align-items: flex-start;
  label {
    width: 50%;
    
    transform: translateX(7px) translateY(18px);
    /* background: #10b52388; */
  }
  input {
    width: 50%;
//     background: #c4c4c444;
//     border-bottom: 2px solid #c4c4c444;
    &:focus {
//       border-bottom: 2px solid #10b523;
    }
    transform: translateY(14px);
  }
  select {
    background: none;
//     background: #c4c4c444;
    border: none;
    border-bottom: 4px solid #c4c4c444;
    &:focus {
      border-bottom: 2px solid #001a70;
    }
    width: 50%;
    transform: translateY(18px);
  }
`

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
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: #c4c4c444;
    &::placeholder {
      color: #333;
      padding-top: 0.25rem;
    }
    &:focus {
      border: #001a70;
      border-radius: 10px;
      &::placeholder {
        opacity: 0;
      }
    }
  }
  &:focus-within {
    label {
      opacity: 0.7;
      font-weight: 600px;
    }
  }
`

const BookNow = styled.button`
  grid-column: 1/ -1;
  height: 64px;
  margin-top: 1.125rem;
  background: #001a70;
     background: linear-gradient(to bottom right, #001a70, #ffc600, 20%);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  transform: translateY(14px);
`
