import React from "react";
import { CenteredContent, Heading } from "../lib";
import styled from "styled-components";
import StepRow from "../StepRow/StepRow";
import steps from "../../data/steps";

const Steps = () => {
  return (
    <CenteredContent>
      <StepsGrid>
        <Heading>How to get a bear?</Heading>
        {steps.map((step) => (
          <StepRow step={step} textPosition={step.id % 2 == 0 ? "right" : "left"} />
        ))}
      </StepsGrid>
    </CenteredContent>
  );
};

const StepsGrid = styled.div`
  text-align: center;
  padding: 0 2rem;
  display: grid;
  width: 100%;
  padding-top: 10rem;
`;
export default Steps;
