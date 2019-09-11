import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import MainButton from '../components/layout/MainButton'

const ContactMe = () => {
  return (
    <Layout>
      <Wrap>
        <Form
          name="contact-me"
          method="post"
          // data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-me" />
          <h1>Contact Me</h1>
          <FormInput>
            <label for="name">Name</label>
            <input id="name" name="user_name" placeholder="Name" required />
          </FormInput>
          <FormInput>
            <label for="Phone">Phone (eg. 111-222-3333)</label>
            <input
              id="Phone"
              type="tel"
              name="user_phone"
              placeholder="Phone (eg. 111-222-3333)"
              pattern="\d{3}-\d{3}-\d{4}"
              required
            />
          </FormInput>
          <FormInput>
            <label for="Email">Email</label>
            <input
              id="Email"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </FormInput>
          <FormInputTA>
            <label for="text">How can I help you?</label>
            <textarea
              name="user_text"
              id="text"
              placeholder="How can I help you?"
              required
            />
          </FormInputTA>
          {/* <div data-netlify-recaptcha="true" /> */}
          <MainButton contact="14px">Submit</MainButton>
        </Form>
      </Wrap>
    </Layout>
  )
}

export default ContactMe

const Wrap = styled.div`
  width: 100vw;
  height: 580px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`

const Form = styled.form`
  padding: 0 1rem;
  position: relative;
  top: 70px;
  height: 100%;
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 50px) 120px;
  grid-gap: 1rem;
  justify-content: center;
  h1 {
    font-size: 2rem;
    color: #10b523;
  }
  label {
    opacity: 0;
  }
  input {
    border: none;
    /* border-bottom: 2px solid lightgray; */
    background: #10b52344;
    padding: 0.5rem 0;
    &:focus {
      border: 1px solid #10b523;
    }
  }
`

const FormInputTA = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  textarea {
    height: 100px;
    padding: 0 5px;
    background: #10b52344;
    border: none;
    &::placeholder {
      padding: 0.25rem 0;
    }
    &:focus {
      outline: 1px solid #10b523;
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
`
const FormInput = styled.div`
  /* padding: 0 1rem; */
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  input {
    outline: none;
    &:focus {
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
`
