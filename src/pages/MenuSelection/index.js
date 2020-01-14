import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import { device } from '../../styles';
import MenuBox from '../../components/MenuBox';
import OrderSummaryBox from '../../components/OrderSummaryBox';

const StyledWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const StyledMenusWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  margin-top: 10px;
  width: 100%;

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 0;
    margin-right: 10px;
    width: 65%;
  }

  @media ${device.laptop} {
    grid-gap: 20px;
    margin-right: 20px;
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledOrderSummaryAndButtonsWrapper = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 35%;
  }
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;

  @media ${device.tablet} {
    justify-content: flex-end;
    padding-top: 20px;

    button:first-of-type {
      margin-right: 20px;
    }
  }
`;

const MenuSelectionPage = ({
  menu,
  order,
  setCurrentStepHandler,
  setOrderHandler,
}) => {
  const handleAddItemToOrderClick = (item) => {
    const orderSummaryCopy = [...order.summary];

    const newItem = {
      name: item.name,
      price: item.price,
      amount: 1,
    };

    if (orderSummaryCopy.length === 0) {
      setOrderHandler({
        ...order,
        summary: [newItem],
        total: order.total + item.price,
      });
    } else {
      const indexOfItemInOrder = orderSummaryCopy.findIndex(
        orderSummaryItem => orderSummaryItem.name === item.name,
      );

      if (indexOfItemInOrder === -1) {
        orderSummaryCopy.push(newItem);
      } else {
        orderSummaryCopy[indexOfItemInOrder].amount += 1;
      }

      setOrderHandler({
        ...order,
        summary: orderSummaryCopy,
        total: order.total + item.price,
      });
    }
  };

  return (
    <Fragment>
      <StyledWrapper>
        <StyledMenusWrapper>
          {menu.map(item => (
            <MenuBox
              addItemToOrderHandler={handleAddItemToOrderClick}
              menu={item}
              key={item.name}
            />
          ))}
        </StyledMenusWrapper>

        <StyledOrderSummaryAndButtonsWrapper>
          <OrderSummaryBox order={order} setOrderHandler={setOrderHandler} />

          <StyledButtonsWrapper>
            <Button onClick={() => setCurrentStepHandler(1)}>
              {'Volver'}
            </Button>

            <Button
              disabled={order.summary.length === 0}
              onClick={() => setCurrentStepHandler(3)}
            >
              {'Continuar'}
            </Button>
          </StyledButtonsWrapper>
        </StyledOrderSummaryAndButtonsWrapper>
      </StyledWrapper>
    </Fragment>
  );
};

MenuSelectionPage.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.any).isRequired,
  order: PropTypes.objectOf(PropTypes.any).isRequired,
  setCurrentStepHandler: PropTypes.func.isRequired,
  setOrderHandler: PropTypes.func.isRequired,
};

export default MenuSelectionPage;
