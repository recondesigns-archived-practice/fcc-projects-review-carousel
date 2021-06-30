import React from "react";
import styled from "styled-components";
import Card from "./components/Card";

const AppContainer = styled.div`
  padding: 40px 16px 0px 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1f5f8;
`;

const Wrapper = styled.div`
  margin-bottom: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 4px;
  width: 100%;
  text-align: center;
`;

const Underline = styled.div`
  width: 64px;
  height: 4px;
  background: #49a6ea;
`;

export default function App() {
  return (
    <AppContainer>
      <Wrapper>
        <Title>{"Our Reviewssss"}</Title>
        <Underline />
      </Wrapper>
      <Card />
    </AppContainer>
  );
}
