import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { device } from '../../../styles';

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${device.laptop} {
    justify-content: flex-start;

    & > div {
      margin-right: 40px;
    }

    & > div:last-of-type {
      margin-right: 0;
    }
  }
`;

const StyledStepNumber = styled.div`
  align-items: center;
  border-radius: 50%;
  border-style: ${({ theme }) => (
    theme.components.stepViewer.stepNumber.borderStyle
  )};
  border-width: ${({ theme }) => (
    theme.components.stepViewer.stepNumber.borderWidth
  )};
  display: flex;
  font-size: ${({ theme }) => theme.components.stepViewer.stepNumber.fontSize};
  height: 50px;
  justify-content: center;
  margin-bottom: 5px;
  min-height: 50px;
  min-width: 50px;
  padding-bottom: 7px;
  text-align: center;
  width: 50px;

  @media ${device.tablet} {
    margin-bottom: 0;
    margin-right: 15px;
  }
`;

const StyledStep = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.components.stepViewer.color.notCurrentStep};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 33%;

  @media ${device.tablet} {
    flex-direction: row;
    text-align: left;
    width: fit-content;
  }

  ${StyledStepNumber} {
    border-color: ${({ theme }) => (
      theme.components.stepViewer.color.notCurrentStep
    )};
  }

  ${({ isCurrentStep, theme }) => isCurrentStep && `
    color: ${theme.components.stepViewer.color.currentStep};

    ${StyledStepNumber} {
      border-color: ${theme.components.stepViewer.color.currentStep};
    }
  `}
`;

const StyledStepNameAndDescriptionWrapper = styled.div`
  width: 100%;
`;

const StyledStepName = styled.div`
  font-size: ${({ theme }) => theme.components.stepViewer.stepName.fontSize};
  font-weight: ${({ theme }) => (
    theme.components.stepViewer.stepName.fontWeight
  )};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledStepDescription = styled.div`
  display: none;
  font-size: ${({ theme }) => (
    theme.components.stepViewer.stepDescription.fontSize
  )};

  @media ${device.tablet} {
    display: block;
  }
`;

const StepViewer = ({ currentStep, steps }) => (
  <StyledWrapper>
    {steps.map((step, index) => (
      <StyledStep isCurrentStep={currentStep === index + 1} key={step.name}>
        <StyledStepNumber>{index + 1}</StyledStepNumber>

        <StyledStepNameAndDescriptionWrapper>
          <StyledStepName>{step.name}</StyledStepName>
          <StyledStepDescription>{step.description}</StyledStepDescription>
        </StyledStepNameAndDescriptionWrapper>
      </StyledStep>
    ))}
  </StyledWrapper>
);

StepViewer.propTypes = {
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StepViewer;
