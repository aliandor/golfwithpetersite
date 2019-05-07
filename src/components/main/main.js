import React from 'react'
import styled from 'styled-components'
import LessonCard from './lessonCard'
import Headline from '../brand'
import { Individual, Junior, Group } from './cardInfo'

const Main = () => {
  return (
    <Lessons>
      <Tag>
        <Headline text="Learn" />
      </Tag>
      <MainCopy>
        Wherever you are on your journey to become a better golfer, Peter can
        help you get to the next level.
      </MainCopy>
      <Cards>
        <LessonCard
          img={Individual.img}
          price={Individual.price}
          type={Individual.type}
          desc={Individual.desc}
          icons={Individual.icons}
        />
        <LessonCard
          img={Junior.img}
          price={Junior.price}
          type={Junior.type}
          desc={Junior.desc}
          icons={Junior.icons}
          position={`bottom`}
        />
        <LessonCard
          img={Group.img}
          price={Group.price}
          type={Group.type}
          desc={Group.desc}
          icons={Group.icons}
        />
      </Cards>
    </Lessons>
  )
}
export default Main

const Lessons = styled.main`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  padding: 30px 1rem 30px 1rem;
  @media (width: 320px) {
    padding: 30px 0.5rem 30px 0.5rem;
  }
`

const Cards = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Tag = styled.div`
  justify-self: center;
  transform: translateX(-6px);
  p:nth-child(1) {
    /* Learn */
    transform: translateX(39px) translateY(14px);
  }
  p:nth-child(2) {
    /* with */
    transform: translateX(50px) translateY(-17px);
  }
  p:nth-child(3) {
    /* peter */
    transform: translateX(-12px) translateY(10px);
  }
`

const MainCopy = styled.h4`
  padding: 0 0 1.25rem 0;
  font-weight: 500;
  /* width: 99%; */
  max-width: 600px;
  font-size: 4vw;
  text-align: center;
  @media (min-width: 599px) {
    /* text-align: center; */
    justify-self: center;
    font-size: 3vw;
    /* max-width: 70%; */
  }
  @media (min-width: 1000px) {
    font-size: 2vw;
  }
`
