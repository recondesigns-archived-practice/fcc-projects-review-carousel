import React, { useState } from "react";
import styled from "styled-components";
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
  const [counter, setCounter] = useState(0);

  function handleNext() {
    if (counter >= 0) {
      setCounter(() => counter + 1);
    } else if (counter < 0) {
      console.log("Less than zero");
    }
  }

  function handlePrevious() {
    if (counter > 0) {
      setCounter(() => counter - 1);
    } else if (counter <= 0) {
      console.log("Less than zero, or zero.");
    }
  }

  console.log(counter);

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
