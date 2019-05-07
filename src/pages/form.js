import React from 'react'
import Layout from '../components/layout/layout'
import styled from 'styled-components'
import Form from '../components/forms/form'

const FormPage = () => (
  <Layout>
    <Wrap>
    <Form />
    </Wrap>
  </Layout>
)

export default FormPage

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;