import React from 'react'
import styled from 'styled-components'

const Price = ({ type, price }) => {
  return (
    <Wrapper>
      <span>{type}</span>
      <span>{price}</span>
    </Wrapper>
  )
}

export default Price

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  span {
    color: #333;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem 0 0 1rem;
    opacity: 0.95;
  }
`
