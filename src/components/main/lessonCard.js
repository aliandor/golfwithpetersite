import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Price from './price'

const LessonCard = ({ img, price, type, desc, icons, position }) => {
  return (
    <Card>
      <Hero src={img} />
      <LessonPrice>
        <Price type={type} price={price} />
      </LessonPrice>
      <Desc>{desc}</Desc>
      <CardIcons>
        {icons.map(icon => {
          return (
            <div>
              <img src={icon.icon} position={position} />
              <p>{icon.text}</p>
            </div>
          )
        })}
      </CardIcons>
      <Links to="/form">Book Now</Links>
    </Card>
  )
}

export default LessonCard

const Links = styled(Link)`
  grid-row: 5;
  grid-column: 1/-1;
  width: 100%;
  /* height: 70px; */
  background: linear-gradient(to bottom right, #006234, 5%, #10b523);
  text-decoration: none;
  color: #fafafa;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  padding-top: 10px;
  /* letter-spacing: 0.25rem; */
`
const Card = styled.div`
  display: grid;
  width: 100%;
  max-width: 500px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto 1fr 1fr 1fr 80px;
  grid-row-gap: 0.5rem;
  box-shadow: 0px 5px 5px rgba(136, 136, 136, 0.9);
`
const LessonPrice = styled.div`
  grid-column: 1/ -1;
  grid-row: 2;
`

const Hero = styled.img`
  width: 100%;
  height: 200px;
  grid-column: 1/ -1;
  grid-row: 1;
  object-fit: cover;
  object-position: center;
  /* border-radius: 5px 5px 0 0; */
`

const Desc = styled.p`
  grid-row: 3;
  transform: translateY(-35px);
  grid-column: 1/ -1;
  padding: 0.25rem 0.5rem;
  width: 95%;
  font-size: 0.95rem;
`

const CardIcons = styled.div`
  transform: translateY(-20px);
  grid-row: 4;
  grid-column: 1/ -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 0.5rem;
  div {
    display: grid;
    grid-row-gap: 0.25rem;
    p {
      width: 75%;
      font-size: 0.725rem;
      text-align: center;
      justify-self: center;
      align-self: center;
      /* opacity: 0.9; */
    }
  }
  img {
    width: 28px;
    /* align-self: center; */
    justify-self: center;
  }
`
