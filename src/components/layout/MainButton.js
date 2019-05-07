import React from 'react'
import styled from 'styled-components'

const MainButton = ({ children, contact }) => (
  <Button contact={contact}>
    {children}
  </Button>
)

export default MainButton

const Button = styled.button`
  grid-column: 1 / -1;
  grid-row: -1;
  height: 64px;
  background: linear-gradient(to bottom right, #006234, 5%, #10B523);
  transform: translateY(${props => props.contact || '0px'});
  border: none;
  color: ${props => props.color || `#fff`};
  font-size: 2rem;
  font-weight: 600;
`;
