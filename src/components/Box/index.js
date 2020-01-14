import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  background: ${({ theme }) => theme.components.box.background};
  border: ${({ theme }) => theme.components.box.border};
  border-radius: ${({ theme }) => theme.components.box.borderRadius};
  margin: auto;
  position: relative;
  width: 100%;

  ${({ margin }) => margin && `
    margin: ${margin};
  `}

  ${({ padding }) => padding && `
    padding: ${padding};
  `}
`;

const Box = ({ children, ...props }) => (
  <StyledBox {...props}>
    {children}
  </StyledBox>
);

Box.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Box.defaultProps = {
  children: undefined,
  margin: undefined,
  padding: '0',
};

export default Box;
