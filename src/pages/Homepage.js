import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Typography } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { PrimaryButton, OutlinedButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer maxWidth="xl">
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                    <Illustration src={Students} alt="Students learning" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                    <ContentBox>
                        <Title variant="h2" component="h1">
                            Welcome to School Management System
                        </Title>
                        <Description variant="body1">
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </Description>
                        <ButtonGroup>
                            <StyledLink to="/choose">
                                <PrimaryButton fullWidth>
                                    Login
                                </PrimaryButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <OutlinedButton fullWidth>
                                    Login as Guest
                                </OutlinedButton>
                            </StyledLink>
                            <SignupText variant="body2">
                                Don't have an account?{' '}
                                <SignupLink to="/Adminregister">
                                    Sign up
                                </SignupLink>
                            </SignupText>
                        </ButtonGroup>
                    </ContentBox>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  padding: 40px 24px;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Illustration = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 16px;
  background-color: var(--color-surface);
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
`;

const Title = styled(Typography)`
  color: var(--color-primary);
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
`;

const Description = styled(Typography)`
  color: var(--color-text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const SignupText = styled(Typography)`
  text-align: center;
  color: var(--color-text-secondary);
  margin-top: 16px;
`;

const SignupLink = styled(Link)`
  color: var(--color-primary);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
  }
`;
