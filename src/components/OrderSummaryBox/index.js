import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { TrashAlt as TrashAltIcon } from 'styled-icons/fa-solid/TrashAlt';

import Box from '../Box';
import formatNumberToCurrency from '../../utils';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.components.orderSummaryBox.title.fontSize};
`;

const StyledSummaryListHeader = styled.div`
  display: flex;
  font-size: ${({ theme }) => (
    theme.components.orderSummaryBox.summaryListHeader.fontSize
  )};
  font-weight: ${({ theme }) => (
    theme.components.orderSummaryBox.summaryListHeader.fontWeight
  )};
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;

const StyledSummaryItem = styled.div`
  color: ${({ theme }) => theme.components.orderSummaryBox.summaryItem.color};
  display: flex;
  font-size: ${({ theme }) => (
    theme.components.orderSummaryBox.summaryItem.fontSize
  )};
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 60px;
  }
`;

const StyledName = styled.span`
  width: 50%;
`;

const StyledAmount = styled.span`
  text-align: center;
  width: 25%;
`;

const StyledAmountInput = styled.input`
  text-align: center;
  width: 30px;
`;

const StyledRemoveItemFromOrderIcon = styled(TrashAltIcon)`
  color: ${({ theme }) => (
    theme.components.orderSummaryBox.removeItemFromOrderIcon.color
  )};
  cursor: pointer;
  height: 15px;
  margin-left: 5px;
  margin-top: 3px;
  min-height: 15px;
  min-width: 15px;
  transition: all 0.1s linear;
  width: 15px;

  &:focus,
  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const StyledPrice = styled.span`
  text-align: right;
  width: 25%;
`;

const StyledTotal = styled.span`
  font-size: ${({ theme }) => (
    theme.components.orderSummaryBox.total.fontSize
  )};
  font-weight: ${({ theme }) => (
    theme.components.orderSummaryBox.total.fontWeight
  )};
  text-align: right;
`;

const OrderSummaryBox = ({ order, setOrderHandler }) => {
  const handleAmountInputChange = (item, event) => {
    const orderSummaryCopy = [...order.summary];

    const indexOfItemInOrder = orderSummaryCopy.findIndex((orderSummaryItem => (
      orderSummaryItem.name === item.name
    )));

    orderSummaryCopy[indexOfItemInOrder].amount = event.target.value;

    setOrderHandler({
      ...order,
      summary: orderSummaryCopy,
      total: orderSummaryCopy.reduce((total, orderSummaryItem) => (
        total + orderSummaryItem.price * orderSummaryItem.amount
      ), order.restaurant.shippingPrice),
    });
  };

  const handleRemoveItemFromOrderClick = (item) => {
    setOrderHandler({
      ...order,
      summary: order.summary.filter(
        summaryItem => summaryItem.name !== item.name,
      ),
      total: order.total - item.price * item.amount,
    });
  };

  return (
    <StyledBox padding="15px">
      <StyledTitle>Tu pedido</StyledTitle>

      <StyledSummaryListHeader>
        <StyledName>Nombre</StyledName>
        <StyledAmount>Cant.</StyledAmount>
        <StyledPrice>Precio</StyledPrice>
      </StyledSummaryListHeader>

      {order.summary.map(item => (
        <StyledSummaryItem key={`${item.name} - ${Math.random()}`}>
          <StyledName>{item.name}</StyledName>

          <StyledAmount>
            <StyledAmountInput
              min="1"
              name="amount"
              onChange={event => handleAmountInputChange(item, event)}
              type="number"
              value={item.amount}
            />

            <StyledRemoveItemFromOrderIcon
              onClick={() => handleRemoveItemFromOrderClick(item)}
            />
          </StyledAmount>

          <StyledPrice>
            {formatNumberToCurrency(item.price * item.amount)}
          </StyledPrice>
        </StyledSummaryItem>
      ))}

      <StyledSummaryItem>
        <StyledName>Envío</StyledName>
        <StyledAmount>-</StyledAmount>

        <StyledPrice>
          {formatNumberToCurrency(order.restaurant.shippingPrice)}
        </StyledPrice>
      </StyledSummaryItem>

      <StyledTotal>
        {'Total: '}
        <b>{formatNumberToCurrency(order.total)}</b>
      </StyledTotal>
    </StyledBox>
  );
};

OrderSummaryBox.propTypes = {
  order: PropTypes.objectOf(PropTypes.any).isRequired,
  setOrderHandler: PropTypes.func.isRequired,
};

export default OrderSummaryBox;
