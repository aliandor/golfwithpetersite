import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import styled from 'styled-components'

export const query = graphql`
  {
    allSanityProtip {
      edges {
        node {
          Title
          Description
          _createdAt(formatString: "MM/DD/YYYY")
          Video {
            asset {
              path
              url
            }
          }
        }
      }
    }
  }
`

const Protips = ({ data }) => (
  <Layout>
    <Wrapper>
      <Headline>
        <h1>
          Pro Tips with <span>Peter</span>
        </h1>
        <p>
          Here are some everyday tips you can use today to improve your game
        </p>
      </Headline>
      <Container>
        {data.allSanityProtip.edges.map(({ node: item }) => (
          <Post>
            <Header>
              <h2>{item.Title}</h2>
              <TimeStamp>{item._createdAt}</TimeStamp>
            </Header>
            <video controls>
              <source src={item.Video.asset.url} />
            </video>
            <Body>
              <Desc>{item.Description}</Desc>
            </Body>
          </Post>
        ))}
      </Container>
    </Wrapper>
  </Layout>
)

export default Protips

const Headline = styled.div`
  padding-bottom: 2rem;
  h1 {
    font-size: 9vw;
    span {
      font-size: inherit;
      color: #10b523;
      background: linear-gradient(to bottom right, #006234, 25%, #10b523);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  p {
    font-size: 4.25vw;
    width: 80%;
  }
  @media (min-width: 799px) {
    h1 {
      font-size: 4.5rem;
    }
    p {
      font-size: 2.25rem;
      width: 600px;
    }
  }
`
const Wrapper = styled.div`
  padding: 60px 1rem 30px 1rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  /* background: pink; */
`

const Desc = styled.p`
  width: 100%;
  padding: 0.25rem 0.5rem;
  overflow: scroll;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TimeStamp = styled.p`
  opacity: 0.75;
  font-size: 0.8rem;
  padding-right: 0.25rem;
`

const Body = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
`

const Post = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 120px;
  background: #fafafa;
  box-shadow: 1px 1px 4px #999;
  border-radius: 1%;
  h2 {
    font-size: 4vw;
    padding: 0.125rem 0.5rem;
    @media (min-width: 900px) {
      font-size: 2rem;
    }
  }
  video {
    width: 100%;
    /* object-fit: fit; */
    object-position: center;
  }
`

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 410px));
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  justify-items: center;
  /* align-items: center; */
  /* background: yellow; */
`
