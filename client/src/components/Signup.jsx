import {
  CloseRounded,
  EmailRounded,
  PasswordRounded,
  Person,
  Visibility,
  VisibilityOff,
  TroubleshootRounded,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";



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
  color: ${({theme}) => theme.text_secondary};
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
  margin: 3px 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 0px 14px;
`;

const Divider = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  font-weight: 600;
`;
const Line = styled.div`
  width: 80px;
  height: 1px;
  border-radius: 10px;
  margin: 0px 10px;
  background-color: ${({ theme }) => theme.text_secondary};
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
  margin: 20px 20px 38px 20px;
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
`;


  return (
    <Modal>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "24px",
              right: "30px",
              cursor: "pointer",
              color: "inherit"
            }}
          />
            <>
              <Title>Sign Up</Title>
              <>
              <OutlinedBox
                  style={{ margin: "24px" }}
                >
                    <CircularProgress color="inherit" size={20} />
                  
                </OutlinedBox>
              </>
              <Divider>
                <Line />
                or
                <Line />
              </Divider>
              <><OutlinedBox style={{ marginTop: "24px" }}>
                <Person
                  sx={{ fontSize: "20px" }}
                  style={{ paddingRight: "12px" }}
                />
                <TextInput
                  placeholder="Full Name"
                  type="text"
                />
              </OutlinedBox></>
              <OutlinedBox>
                <EmailRounded
                  sx={{ fontSize: "20px" }}
                  style={{ paddingRight: "12px" }}
                />
                <TextInput
                  placeholder="Email Id"
                  type="email"
                />
              </OutlinedBox>
              <Error>error</Error>
              <>
              <OutlinedBox>
                  <PasswordRounded
                    sx={{ fontSize: "20px" }}
                    style={{ paddingRight: "12px" }}
                  />
                  <TextInput
                    type="text" 
                    placeholder="password"
                  />
                  <IconButton
                    color="inherit"
                  
                  >
                      <Visibility sx={{ fontSize: "20px" }} />
                      <VisibilityOff sx={{ fontSize: "20px" }} />
                  </IconButton>
                </OutlinedBox>
              </>
              <Error></Error>
            <>
            <OutlinedBox
                  button={true}
                  style={{ marginTop: "6px" }}
              
                >
                    <CircularProgress color="inherit" size={20} />
                    "Create Account"
                </OutlinedBox>
            </>

            </>

          
          <LoginText>
            Already have an account ?
            <Span
              style={{
                fontWeight: "500",
                marginLeft: "6px",
                cursor: "pointer",
              }}
            >
              Sign In
            </Span>
          </LoginText>
        </Wrapper>
      </Container>
    </Modal>
  );


export default SignUp;
