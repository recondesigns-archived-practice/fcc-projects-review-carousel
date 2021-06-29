import React from "react";
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
`;

export default function CardControls() {
  return (
    <Container>
      <ControlImage src={previousIcon} alt={"click for previous review"} />
      <ControlImage src={nextIcon} alt={"click for next review"} />
    </Container>
  );
}
