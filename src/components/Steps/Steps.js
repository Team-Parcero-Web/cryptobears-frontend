import React from "react";
import { CenteredContent, Heading, GetButton } from "../lib";
import styled from "styled-components";
import StepRow from "../StepRow/StepRow";
import steps from "../../data/steps";
import Link from "next/link";

const Steps = () => {
  return (
    <CenteredContent>
      <StepsGrid>
        <Heading>How to get a bear?</Heading>
        {steps.map((step) => (
          <StepRow step={step} textPosition={step.id % 2 == 0 ? "right" : "left"} key={step.id} />
        ))}
        <Link href="/get-bear">
          <a href="">
            <GetButton className="mt-5">Befriend a bear</GetButton>
          </a>
        </Link>
      </StepsGrid>
    </CenteredContent>
  );
};

const StepsGrid = styled.div`
  text-align: center;
  padding: 10rem 2rem 3rem;
  display: grid;
  width: 100%;

  @media (max-width: 976px) {
    padding: 3rem 2rem 7rem;
  }
`;
export default Steps;
