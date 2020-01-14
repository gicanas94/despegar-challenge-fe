import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import { device } from '../../styles';

const StyledBox = styled(Box)`
  @media ${device.laptop} {
    width: 60%;
  }
`;

const StyledTitle = styled.h1`
  margin-bottom: 50px;
  text-align: center;
`;

const StyledPre = styled.pre`
  font-size: ${({ theme }) => theme.pages.confirmation.pre.fontSize};
  line-height: 1.8em;
  margin: 0;
  overflow-x: scroll;
`;

const ConfirmationPage = ({ order }) => (
  <StyledBox padding="30px">
    <StyledTitle>¡Tu pedido está confirmado!</StyledTitle>
    <StyledPre>{JSON.stringify(order, null, 4)}</StyledPre>
  </StyledBox>
);

ConfirmationPage.propTypes = {
  order: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ConfirmationPage;
