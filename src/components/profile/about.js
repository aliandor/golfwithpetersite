import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Pic =
  'https://res.cloudinary.com/dnsdvh13n/image/upload/w_auto,f_auto,q_auto:best/v1549044105/GolfWithPeter/peter-profile.png'

const AboutMe = () => {
  return (
    <Profile>
      <div>
        <ProfilePic src={Pic} alt="Peter Barrow" />
        <h1>Peter Barrow</h1>
        <h2>Head Golf Professional</h2>
      </div>
      <main>
        <p>
          Hello, my name is Peter, I am the Head Golf Professional at Altadena
          Golf Course. My teaching career began as a national junior coach in
          Barbados in 2010. I then joined the PGA of America in 2014 to grow the
          game of golf through providing quality instruction. I became the
          assistant pro in 2014 and in less than a year, I was handpicked by the
          outgoing PGA Head Professional, Kevin Erdman to lead the golf
          operations segment of Altadena Golf Course.
        </p>

        <p>
          I engage in community outreach by serving as a coach for the First Tee
          of Greater Pasadena as well as providing lesson donations to local
          charitable organizations. My philosophy on golf is that knowledge of
          your body and its muscles will allow you to produce your best swing,
          regardless of age or body type.
        </p>

        <p>
          I was introduced to the game at 9 years old and played junior golf for
          his home country, Barbados for 6 consecutive years, including 2 World
          Junior Championships. I currently hold a +1 handicap and I am
          available for golf lessons from Wednesday through Sunday. I can be
          reached at{' '}
          <ExternalLinks href="tel:631-291-3941" target="_blank">
            631-291-3941
          </ExternalLinks>{' '}
          or{' '}
          <ExternalLinks href="email:info@golfwithpeter.com." target="_blank">
            info@golfwithpeter.com
          </ExternalLinks>
        </p>
        <p>
          Check out my <Links to="/protips">Pro Tips</Links> to get a feel for
          my teaching style and follow me on{' '}
          <ExternalLinks
            href="https://www.instagram.com/golfwithpeter/"
            target="_blank"
          >
            instagram
          </ExternalLinks>{' '}
          for even more pro tips on improving at golf.
        </p>
      </main>
    </Profile>
  )
}

export default AboutMe

const Profile = styled.div`
  position: relative;
  top: 50px;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 50px;
  justify-items: flex-start;
  div {
    /* border: 1px solid; */
    width: 100vw;
    height: 190px;
    color: #10b523;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    padding: 1rem;
    @media (min-width: 600px) {
      h1 {
        font-size: 1.5rem;
      }
      h4 {
        font-size: 1.25rem;
      }
    }
    h1 {
      grid-row: 2;
      text-align: center;
      font-size: 1.5rem;
    }
    h2 {
      grid-row: 3;
      font-size: 0.8rem;
      text-align: center;
      font-weight: 400;
      color: #333;
    }
  }
  main {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    padding: 0 1rem 1rem 1rem;
    width: 100vw;
    /* border: 1px solid; */
    p {
      max-width: 700px;
      justify-self: center;
      line-height: 1.5rem;
      color: #333;
      @media (min-width: 600px) {
        font-size: 1.5rem;
        line-height: 2rem;
        /* opacity: 0.9; */
      }
    }
  }
`

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  grid-row: 1;
  justify-self: center;
  align-self: center;
  border-radius: 50%;
  @media (min-width: 600px) {
    width: 90px;
  }
`

const ExternalLinks = styled.a`
  color: #333;
  font-size: inherit;
  border-bottom: 4px solid rgba(16, 181, 35, 0.5);
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
`

const Links = styled(Link)`
  /* color: #10B523; */
  color: #333;
  font-size: inherit;
  border-bottom: 4px solid rgba(16, 181, 35, 0.5);
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
`
