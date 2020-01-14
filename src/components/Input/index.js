import { ErrorOutline } from 'styled-icons/material/ErrorOutline';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import { keyframe } from '../../styles';

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.components.input.color.default};
  display: block;
  font-size: ${({ theme }) => theme.components.input.label.fontSize};
  font-weight: ${({ theme }) => theme.components.input.label.fontWeight};
  overflow: hidden;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  transition: color 0.06s linear;
  white-space: nowrap;

  ${({ disabled, theme }) => disabled && `
    color: ${theme.components.input.color.disabled} !important;
  `}
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.components.input.background};
  border: 0;
  border-bottom-width: ${({ theme }) => (
    theme.components.input.borderBottomWidth
  )};
  border-color: ${({ theme }) => theme.components.input.color.default};
  border-style: solid;
  border-top-left-radius: ${({ theme }) => (
    theme.components.input.color.borderRadius
  )};
  border-top-right-radius: ${({ theme }) => (
    theme.components.input.color.borderRadius
  )};
  padding: 0 10px;
  padding-top: 5px;
  height: 45px;
  transition: border 0.06s linear;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${({ disabled, theme }) => disabled && `
    color: ${theme.components.input.color.disabled} !important;
    border-color: ${theme.components.input.color.disabled} !important;

    ::placeholder {
      color: ${theme.components.input.color.disabled} !important;
    }

    :-ms-input-placeholder {
      color: ${theme.components.input.color.disabled} !important;
    }

    ::-ms-input-placeholder {
      color: ${theme.components.input.color.disabled} !important;
    }
  `}
`;

const StyledErrorIcon = styled(ErrorOutline)`
  animation: 0.8s infinite ${keyframe.beat(1.1)};
  color: ${({ theme }) => theme.components.input.color.error};
  position: absolute;
  right: 10px;
  top: 33px;
  width: 30px;
`;

const StyledErrorMessage = styled.div`
  color: ${({ theme }) => theme.components.input.color.error};
  font-size: ${({ theme }) => theme.components.input.errorMessage.fontSize};
  font-weight: ${({ theme }) => theme.components.input.errorMessage.fontWeight};
  padding-top: 5px;
`;

const StyledWrapper = styled.div`
  overflow: hidden;
  position: relative;

  ${({ error, theme }) => error && `
    ${StyledLabel} {
      color: ${theme.components.input.color.error};
    }

    ${StyledInput} {
      border-color: ${theme.components.input.color.error};
      padding-right: 40px;
    }
  `}

  ${({ margin }) => margin && `
    margin: ${margin};
  `}

  ${({ success, theme }) => success && `
    ${StyledLabel} {
      color: ${theme.components.input.color.success};
    }

    ${StyledInput} {
      border-color: ${theme.components.input.color.success};
    }
  `}
`;

const Input = ({
  disabled,
  error,
  name,
  label,
  margin,
  success,
  ...props
}) => {
  const inputId = `input-component_${name}`;

  return (
    <StyledWrapper error={error} margin={margin} success={success}>
      <StyledLabel disabled={disabled} htmlFor={name}>
        {label}
      </StyledLabel>

      <StyledInput disabled={disabled} id={inputId} name={name} {...props} />

      {!disabled && error && (
        <Fragment>
          <StyledErrorIcon />

          <StyledErrorMessage>
            {error}
          </StyledErrorMessage>
        </Fragment>
      )}
    </StyledWrapper>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  success: PropTypes.bool,
};

Input.defaultProps = {
  disabled: false,
  error: undefined,
  margin: undefined,
  success: false,
};

export default Input;
