import { AddCircle as AddCircleIcon } from 'styled-icons/material/AddCircle';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Box from '../Box';
import formatNumberToCurrency from '../../utils';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-between;
`;

const StyledName = styled.h2`
  font-size: ${({ theme }) => theme.components.menuBox.name.fontSize};
  margin-bottom: 0;
`;

const StyledDescription = styled.div`
  color: ${({ theme }) => theme.components.menuBox.description.color};
  font-size: ${({ theme }) => theme.components.menuBox.description.fontSize};
`;

const StyledPrice = styled.div`
  color: ${({ theme }) => theme.components.menuBox.price.color};
  font-size: ${({ theme }) => theme.components.menuBox.price.fontSize};
`;

const StyledAddItemToOrderIcon = styled(AddCircleIcon)`
  bottom: 10px;
  color: ${({ theme }) => theme.components.menuBox.addItemToOrderIcon.color};
  cursor: pointer;
  height: 30px;
  min-height: 30px;
  min-width: 30px;
  position: absolute;
  right: 10px;
  transition: all 0.1s linear;
  width: 30px;

  &:focus,
  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const MenuBox = ({ addItemToOrderHandler, menu }) => (
  <StyledBox padding="10px">
    <StyledName>{menu.name}</StyledName>
    <StyledDescription>{menu.description}</StyledDescription>

    <StyledPrice>
      <b>{formatNumberToCurrency(menu.price)}</b>
    </StyledPrice>

    <StyledAddItemToOrderIcon onClick={() => addItemToOrderHandler(menu)} />
  </StyledBox>
);

MenuBox.propTypes = {
  addItemToOrderHandler: PropTypes.func.isRequired,
  menu: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MenuBox;
