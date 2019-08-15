import React from 'react'
import styled from 'styled-components'
import TagLine from './tagline'
import CTA from './landingBookNow'

const Hero = 'https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_1000/v1549321485/GolfWithPeter/10DA0E91-2209-431D-A08E-A6AF277A0AB5.jpg';

const Landing = () => {
  return (
    <LandingPage>
      <Wrapper>
        <TagLine />
        <CTA />
      </Wrapper>
    </LandingPage>
  )
}

export default Landing

const LandingPage = styled.div`
  background: url(${Hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media(orientation: landscape) {
    background-position: right top ;
    height: 110vh;
  }
`;

const Wrapper = styled.div`
  /* background: lime; */
  position: relative;
  top: 50px;
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 799px) {
    height: 90vh;
  }
`;