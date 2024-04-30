import React from 'react'
import styled from 'styled-components';
import { Menu ,PersonRounded} from "@mui/icons-material"
import { IconButton } from '@mui/material';


const NavBarDiv = styled.div`
  display:flex;
  justify-content :space-between;
  padding:16px 40px;
  align-items:center;
  color: ${({ theme }) => theme.text_primary};
  gap :30px;
  background:  ${({ theme }) => theme.bgLight};
  box-shadow : 04px 30px rgba(0,0,0,0.1);
  backdrop-filter:blur(5.7px);
  -webkit-backdrop-filter:blur(5.7px);


  @media(max-width :786px){
    padding:16px;
  }
`;


const IconsButton = styled.div`
  color: ${({ theme }) => theme.text_secondary} !important;
`

const ButtonDiv = styled.div`
  font-size:14px;
  cursor:pointer;
  max-width:70px;
  align-items:center;
  color: ${({ theme }) => theme.primary};
  border:1px solid ${({ theme }) => theme.primary};
  border-radius:12px;
  display:flex;
  padding: 8px 10px;
  gap:8px;
`;

const NavBar = ( {setMenuOpen,menuOpen}) => {
  return (
    <NavBarDiv>
    <IconsButton  onClick={() => setMenuOpen(!menuOpen)}>
      <Menu/>
    </IconsButton>
      <ButtonDiv>
      <PersonRounded />
        Login
      </ButtonDiv>
    </NavBarDiv>
  )
}

export default NavBar;
