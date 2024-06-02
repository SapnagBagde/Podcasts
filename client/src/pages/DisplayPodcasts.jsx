import React from 'react'
import styled from 'styled-components';
import PodcastCard from '../components/PodcastsCard.jsx';

const DisplayMain = styled.div`
display: flex;
padding: 30px 30px;
flex-direction: column;
height: 100%;
overflow-y: scroll;
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Podcasts = styled.div`
display: flex;
flex-wrap: wrap;
height: 100%;
gap: 10px;
padding: 30px 0px;
`
const Container = styled.div`
background-color: ${({ theme }) => theme.bg};
padding: 20px;
border-radius: 6px;
min-height: 400px;
`
const DisplayNo = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
color: ${({ theme }) => theme.text_primary};
`



const DisplayPodcasts = () => {

  return (
    <DisplayMain>
      <Container>
          <Topic>
            Most Popular
          </Topic>
          <Podcasts>
            <DisplayNo>No Podcasts</DisplayNo>
            <PodcastCard />
          </Podcasts>
          
      </Container>
    </DisplayMain>
  )
}

export default DisplayPodcasts
