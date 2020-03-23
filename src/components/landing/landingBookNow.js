import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const CTA = () => {
  return (
    <CallToAction>
      <LandingCTA to="/form">Book Now</LandingCTA>
    </CallToAction>
  )
}

export default CTA

const LandingCTA = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
`

const CallToAction = styled.button`
  width: 50%;
  height: 60px;
  max-width: 300px;
  background: none;
  border: 3px solid #fff;
  grid-row: 3;
  margin-top: 12rem;
`
