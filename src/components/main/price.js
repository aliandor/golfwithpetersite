import React from 'react'
import styled from 'styled-components';

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
  span {
    color: #333;
    font-size: 1.75rem;
    font-weight: 600;
    padding: 0.2rem 0px 0px 0.5rem;
    opacity: 0.95;
  }
`;
