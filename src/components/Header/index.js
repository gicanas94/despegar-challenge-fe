import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { device, keyframe } from '../../styles';
import StepViewer from './StepViewer';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.components.header.background};
  border-bottom: ${({ theme }) => theme.components.header.borderBottom};
  padding: 15px 0;
  width: 100%;
`;

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: auto;
  max-width: ${({ theme }) => theme.components.header.maxWidth};
  padding: 0 10px;
  width: 100%;

  @media ${device.laptop} {
    justify-content: space-between;
    padding: 0;
    width: 90%;
  }
`;

const StyledEmoji = styled.span`
  display: none;
  font-size: ${({ theme }) => theme.components.header.emoji.fontSize};
  margin-top: 10px;

  @media ${device.laptop} {
    display: block;
  }

  &.orderConfirmed {
    animation: ${keyframe.beat(1.07)} 1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const Header = ({ currentStep, ...props }) => (
  <StyledHeader>
    <StyledWrapper>
      <StepViewer currentStep={currentStep} {...props} />

      {/* eslint-disable jsx-a11y/accessible-emoji */}
      {/* Deshabilito esta regla ya que StyledEmoji ES un <span> */}
      <StyledEmoji
        aria-label="Emoji de hamburguesa"
        className={currentStep === 4 && 'orderConfirmed'}
        role="img"
      >
        {'🍔'}
      </StyledEmoji>
    </StyledWrapper>
  </StyledHeader>
);

Header.propTypes = {
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
