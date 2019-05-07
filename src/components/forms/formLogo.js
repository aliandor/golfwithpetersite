import React from 'react'
import styled, { keyframes } from 'styled-components'

const Logos = {
  Golfer: 'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548960833/GolfWithPeter/golfer.svg',
  GolferAlt: 'Golfing by Milky - Digital innovation from the Noun Project',
  GolfBall: 'https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1548960833/GolfWithPeter/golf_ball.svg',
  GolfBallAlt: 'golf ball by Evgeniy Kozachenko from the Noun Project'
}

const FormLogo = () => {
  return (
    <Logo>
      <Golfer src={Logos.Golfer} alt={Logos.GolferAlt} />
      <GolfBall src={Logos.GolfBall} alt={Logos.GolfBallAlt} />
    </Logo>
  )
}

export default FormLogo

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90px;
  height: 100px;
`;

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Golfer = styled.img`
  width: 50px;
  height: 70px;
  align-self: flex-end;
`;

const GolfBall = styled.img`
  width: 18px;
  height: 18px;
  animation: ${Rotate} 2s linear infinite;
`;
