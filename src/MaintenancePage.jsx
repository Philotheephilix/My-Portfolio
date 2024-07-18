// src/MaintenancePage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWrench, FaRobot } from 'react-icons/fa';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1f1c2c, #928dab);
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const Icon = styled.div`
  font-size: 4rem;
  animation: ${pulse} 2s infinite;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 20px 0;
`;

const Message = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 20px;
`;

const GlowingButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(45deg, #6e7ff3, #9c6ef3, #f36ebe);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 1);
  }
`;

const MaintenancePage = () => {
  return (
    <Container>
      <Icon>
        <FaRobot />
        <FaWrench />
      </Icon>
      <Title>Under Development</Title>
      <Message>
        Portfolio Redesign! Wait to get amazed
      </Message>
      
    </Container>
  );
};

export default MaintenancePage;
