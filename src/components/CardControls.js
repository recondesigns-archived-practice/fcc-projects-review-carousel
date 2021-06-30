import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../ContextProvider";
import { reviews } from "../reviewData";
import previousIcon from "../assets/images/previous-icon-blue.svg";
import nextIcon from "../assets/images/next-icon-blue.svg";

const Container = styled.div`
  width: 64px;
  display: flex;
  justify-content: space-between;
`;

const ControlImage = styled.img`
  width: 20px;
  height: 20px;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.2;
  }
`;

export default function CardControls() {
  const [currentReview, setCurrentReview] = useContext(AppContext);

  function handleNext() {
    if (currentReview >= 0) {
      setCurrentReview(() => currentReview + 1);
    } else if (currentReview < 0) {
      console.log("Less than zero");
    }
  }

  function handlePrevious() {
    if (currentReview > 0) {
      setCurrentReview(() => currentReview - 1);
    } else if (currentReview <= 0) {
      console.log("Less than zero, or zero.");
    }
  }

  return (
    <Container>
      <ControlImage
        src={previousIcon}
        alt={"click for previous review"}
        onClick={() => handlePrevious()}
      />
      <ControlImage
        src={nextIcon}
        alt={"click for next review"}
        onClick={() => handleNext()}
      />
    </Container>
  );
}
