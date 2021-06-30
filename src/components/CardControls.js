import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../ContextProvider";
import { handleNext, handlePrevious } from "./helpers";
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

  return (
    <Container>
      <ControlImage
        src={previousIcon}
        alt={"click for previous review"}
        onClick={() => handlePrevious(currentReview, setCurrentReview)}
      />
      <ControlImage
        src={nextIcon}
        alt={"click for next review"}
        onClick={() => handleNext(currentReview, setCurrentReview)}
      />
    </Container>
  );
}
