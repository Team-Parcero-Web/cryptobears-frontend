import React from "react";
import { CenteredContent } from "../lib";
import styled from "styled-components";
import StepRow from "../StepRow/StepRow";

const Steps = () => {
  return (
    <CenteredContent>
      <Inner>
        <StepRow />
      </Inner>
    </CenteredContent>
  );
};

const Inner = styled.div``;
export default Steps;
