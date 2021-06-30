import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../ContextProvider";
import { reviews } from "../reviewData";
import CardControls from "./CardControls";
import backupImg from "../assets/images/image-1.png";

const Container = styled.div`
  position: relative;
  padding: 112px 20px 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 8px 10px rgba(84, 84, 84, 0.14),
    0px 3px 14px rgba(84, 84, 84, 0.12), 0px 4px 5px rgba(84, 84, 84, 0.2);

  @media (min-width: 720px) {
    padding: 24px 56px 24px 56px;
    width: 480px;
  }
`;

const UserImage = styled.img`
  position: absolute;
  top: -40px;
  width: 132px;
  border-radius: 100%;
  filter: drop-shadow(6px -3px 0px #49a6ea);

  @media (min-width: 720px) {
    position: relative;
    top: 0px;
  }
`;

const Title = styled.h3`
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  font-weight: normal;
  font-family: sans-serif;
  letter-spacing: 0.2px;

  @media (min-width: 720px) {
    margin-top: 20px;
    text-align: center;
  }
`;

const Subtitle = styled.h4`
  margin-bottom: 12px;
  width: 100%;
  color: #49a6ea;
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  font-family: sans-serif;
  text-transform: uppercase;

  @media (min-width: 720px) {
    text-align: center;
  }
`;

const Review = styled.p`
  margin-bottom: 20px;
  width: 100%;
  height: 140px;
  font-size: 15px;
  line-height: 20px;
  font-weight: normal;
  font-family: sans-serif;
  opacity: 0.7;

  @media (min-width: 720px) {
    height: 80px;
    text-align: center;
  }
`;

export default function Card() {
  const [currentReview] = useContext(AppContext);

  return (
    <Container>
      <UserImage
        src={reviews ? reviews[currentReview].image : backupImg}
        alt={"user image"}
      />
      <Title>{reviews ? reviews[currentReview].name : "No name"}</Title>
      <Subtitle>{reviews ? reviews[currentReview].role : "No role"}</Subtitle>
      <Review>{reviews ? reviews[currentReview].review : "No review"}</Review>
      <CardControls />
    </Container>
  );
}
