import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.components.button.background.default};
  border: 0;
  border-radius: ${({ theme }) => theme.components.button.borderRadius};
  color: ${({ theme }) => theme.components.button.color.default};
  display: flex;
  font-size: ${({ theme }) => theme.components.button.fontSize};
  font-weight: ${({ theme }) => theme.components.button.fontWeight};
  justify-content: center;
  line-height: 1;
  overflow: hidden;
  padding: 10px 15px;
  position: relative;
  transition: all 0.1s linear;
  user-select: none;
  width: fit-content;

  ${({ disabled, theme }) => !disabled && `
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:focus,
    &:hover {
      background: ${theme.components.button.background.hover};
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(2px);
    }
  `}

  ${({ disabled, theme }) => disabled && `
    background: ${theme.components.button.background.disabled};
    color: ${theme.components.button.color.disabled};
  `}

  ${({ fullWidth }) => fullWidth && `
    width: 100%;
  `}

  ${({ margin }) => margin && `
    margin: ${margin};
  `}

  ${({ width }) => width && `
    width: ${width};
  `}
`;

const StyledButtonText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>
    <StyledButtonText>
      {children}
    </StyledButtonText>
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object],
  ).isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  margin: undefined,
};

export default Button;
