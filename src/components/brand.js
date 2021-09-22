import React from 'react'
import styled from 'styled-components'

const Brand = ({ text }) => {
  return (
    <Headline>
      <Word>{text}</Word>
      <With>With</With>
      <Peter>Peter</Peter>
    </Headline>
  )
}

export default Brand

const Headline = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25px 25px;
`
const Word = styled.p`
  grid-column: 1;
  grid-row: 1;
  font-size: 1.25rem;
  transform: translateX(30px) translateY(17px);
`
const With = styled.p`
  grid-column: 1;
  grid-row: -1;
  font-size: 1.25rem;
  transform: translateX(32px) translateY(-14px);
`
const Peter = styled.p`
//   background: linear-gradient(to bottom right, #006234, 25%, #10b523);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
  background: #001a70;
  font-size: 46px;
  grid-column: -1;
  grid-row: 1/-1;
  transform: translateX(-7px) translateY(10px);
`
