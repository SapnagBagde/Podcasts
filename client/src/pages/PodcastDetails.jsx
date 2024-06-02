import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const Container = styled.div`
padding: 20px 30px;
padding-bottom: 200px;
height: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 20px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.text_secondary};
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: ${({ theme }) => theme.text_secondary + 50};
  color: ${({ theme }) => theme.text_primary};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  `;


const Episodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 540;
  display: flex;
  justify-content space-between;
  align-items: center;
`;

const EpisodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


const Favorite = styled.div`
  color:white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: ${({ theme }) => theme.text_primary} !important;
`


const Creator = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 12px;
`
const CreatorContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const CreatorDetails = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
`
const Views = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 12px;
margin-left: 20px;
`
const Icon = styled.div`
color: white;
font-size: 12px;
margin-left: 20px;
border-radius: 50%;
background: #9000ff !important;
display: flex;
align-items: center;
justify-content: center;
padding: 6px;
`

const PodcastDetails = () => {



  return (
    <Container>
     
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <Favorite >
            
              <FavoriteIcon style={{ color: "#E30022", width: '16px', height: '16px' }}></FavoriteIcon>
              
              <FavoriteIcon style={{ width: '16px', height: '16px' }}></FavoriteIcon>
            
          </Favorite>
        </div>


        <Top>
            <Image src='' />
            <Details>
              <Title>

              </Title>
              <Description>

              </Description>
              <Tags>
                
              </Tags>

              <CreatorContainer>
                <CreatorDetails>
                  <Avatar sx={{ width: "26px", height: "26px" }}>

                  </Avatar>
                  <Creator>

                  </Creator>
                </CreatorDetails>

                <Views>
                  • Views
                </Views>


                <Views>
                  • 
                </Views>
                
                <Icon>
                    <HeadphonesIcon />
                    
                    <PlayArrowIcon />
                </Icon>

              </CreatorContainer>
              
            </Details>
        </Top>


        <Episodes>
          <Topic>All Episodes</Topic>
          
          <EpisodeWrapper>

          </EpisodeWrapper>
        </Episodes>
   
    </Container >
  )
}

export default PodcastDetails