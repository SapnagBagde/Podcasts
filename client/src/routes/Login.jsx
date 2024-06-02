import {
  Block,
  CloseRounded,
  EmailRounded,
  Visibility,
  VisibilityOff,
  PasswordRounded,
  TroubleshootRounded,
} from "@mui/icons-material";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconButton, Modal } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {Link} from "react-router-dom"



const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 380px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin: 16px 28px;
`;
const OutlinedBox = styled.div`
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  color: ${({ theme }) => theme.text_secondary};
  ${({ googleButton, theme }) =>
    googleButton &&
    `
    user-select: none; 
  gap: 16px;`}
  ${({ button, theme }) =>
    button &&
    `
    user-select: none; 
  border: none;
    background: ${theme.button};
    color:'${theme.bg}';`}
    ${({ activeButton, theme }) =>
    activeButton &&
    `
    user-select: none; 
  border: none;
    background: ${theme.primary};
    color: white;`}
  margin: 3px 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 0px 14px;
`;


const TextInput = styled.input`
  width: 100%;
  border: none;
  font-size: 14px;
  border-radius: 3px;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text_secondary};
`;

const LoginText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin: 20px 20px 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const Error = styled.div`
  color: red;
  font-size: 10px;
  margin: 2px 26px 8px 26px;
  display: block;
  ${({ error, theme }) =>
    error === "" &&
    `    display: none;
    `}
`;

const SignIn = ({ }) => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const [samepassword, setSamepassword] = useState("");
  const [resetDisabled, setResetDisabled] = useState(true);
  const [Loading, setLoading] = useState(false);

  return (
      
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <CloseRounded
          style={{
                    position: "absolute",
                    top: "24px",
                    right: "30px",
                    cursor: "pointer",
                  }}
        />
        <OutlinedBox style={{ marginTop: "24px" }}>
          <EmailRounded
            sx={{ fontSize: "20px" }}
            style={{ paddingRight: "12px" }}
          />
          <TextInput
            placeholder="Email Id"
            type="email"
          />
          </OutlinedBox>
          <OutlinedBox>

            <PasswordRounded
                sx={{ fontSize: "20px" }}
                style={{ paddingRight: "12px" }}
              />

            <TextInput
              placeholder="Password"
              type="password"    
            />
              
            <IconButton
                color="inherit"
                onClick={() =>
                  setValues({ ...values, showPassword: !values.showPassword })
                }
              >

              {
                values.showPassword ? (
                <Visibility sx={{ fontSize: "20px" }} />
              ) 
              : 
              (
                <VisibilityOff sx={{ fontSize: "20px" }} />
              )
              }

            </IconButton>

          </OutlinedBox>
          <Error error={samepassword}>{samepassword}</Error>
          <OutlinedBox
            button={true}
            activeButton={!resetDisabled}
            style={{ marginTop: "6px", marginBottom: "24px" }}
            >
            {
              Loading
              ?
              (
                <CircularProgress color="inherit" size={20} />
              ) 
              : 
              (
                "Sign in"
              )
            }
          </OutlinedBox>

          <LoginText>
            Don't have an account ?
            <Span
              style={{
                fontWeight: "500",
                marginLeft: "6px",
                cursor: "pointer",
              }}
            >
              <Link to="/signup">        
              Create Account</Link>
            </Span>
          </LoginText>

      </Wrapper>
    </Container>
  );
};

export default SignIn;



