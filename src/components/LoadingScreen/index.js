import React from 'react';
import styled from 'styled-components';

import { keyframe } from '../../styles';

const StyledWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.components.loadingScreen.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1400;
`;

const StyledEmoji = styled.span`
  animation: ${keyframe.beat(1.07)} 1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  font-size: ${({ theme }) => theme.components.loadingScreen.emoji.fontSize};
  margin-bottom: 15px;
`;

const LoadingScreen = () => (
  <StyledWrapper>
    {/* eslint-disable jsx-a11y/accessible-emoji */}
    {/* Deshabilito esta regla ya que StyledEmoji ES un <span> */}
    <StyledEmoji aria-label="Emoji de hamburguesa" role="img">🍔</StyledEmoji>
  </StyledWrapper>
);

export default LoadingScreen;
