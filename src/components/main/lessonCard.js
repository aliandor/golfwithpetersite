import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Price from './price'

const LessonCard = ({ img, alt, price, type, desc, icons, position }) => {
  return (
    <Card>
      <Hero src={img} alt={alt} />
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
      <CTA>
        <Link to="/form">Book Now</Link>
      </CTA>
    </Card>
  )
}

export default LessonCard

const CTA = styled.button`
  grid-row: 5;
  grid-column: 1/-1;
  background: linear-gradient(to bottom right, #006234, 5%, #10b523);
  text-decoration: none;
  color: #fafafa;
  font-size: 2rem;
  font-weight: 600;
  align-self: center;
  justify-self: center;
  padding: 0.25rem 2rem;
  width: 90%;
  border: none;
  padding-bottom: 10px;
  a {
    text-decoration: none;
    color: #fafafa;
    font-weight: 600;
    font-size: 1.5rem;
  }
`
const Card = styled.div`
  display: grid;
  width: 100%;
  max-width: 500px;
  color: #333;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto 70px 1fr 1fr;
  padding-bottom: 1rem;
  grid-row-gap: 0.2rem;
  box-shadow: 0px 4px 4px rgba(136, 136, 136, 0.7);
  /* @media (max-width: 320px) {
    width: 300px;
  } */
`
const LessonPrice = styled.div`
  grid-column: 1/-1;
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
  padding: 0.4rem 0 0 1rem;
  width: 95%;
  font-size: 1rem;
`

const CardIcons = styled.div`
  transform: translateY(-20px);
  grid-row: 4;
  grid-column: 1/ -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 0.5rem;
  /* border: 2px solid; */
  div {
    display: grid;
    /* grid-row-gap: 0.25rem; */
    p {
      width: 75%;
      font-size: 0.7rem;
      text-align: center;
      justify-self: center;
      /* align-self: center; */
      /* opacity: 0.9; */
    }
  }
  img {
    width: 28px;
    /* align-self: center; */
    justify-self: center;
  }
`
