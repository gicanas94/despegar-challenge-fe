import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import { device } from '../../styles';
import OrderSummaryBox from '../../components/OrderSummaryBox';
import PersonalInfoForm from '../../forms/PersonalInfo';

const StyledWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const StyledPersonalInfoFormWrapper = styled.div`
  margin-top: 10px;
  width: 100%;

  @media ${device.tablet} {
    margin-top: 0;
    margin-right: 10px;
    width: 340px;
  }

  @media ${device.laptop} {
    margin-right: 20px;
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

const PersonalInfoPage = ({
  order,
  setCurrentStepHandler,
  setOrderHandler,
}) => (
  <Fragment>
    <StyledWrapper>
      <StyledPersonalInfoFormWrapper>
        <PersonalInfoForm order={order} setOrderHandler={setOrderHandler} />
      </StyledPersonalInfoFormWrapper>

      <StyledOrderSummaryAndButtonsWrapper>
        <OrderSummaryBox order={order} setOrderHandler={setOrderHandler} />

        <StyledButtonsWrapper>
          <Button onClick={() => setCurrentStepHandler(2)}>
            {'Volver'}
          </Button>

          <Button
            disabled={!order.clientInfo || order.summary.length === 0}
            onClick={() => setCurrentStepHandler(4)}
          >
            {'Continuar'}
          </Button>
        </StyledButtonsWrapper>
      </StyledOrderSummaryAndButtonsWrapper>
    </StyledWrapper>
  </Fragment>
);

PersonalInfoPage.propTypes = {
  order: PropTypes.objectOf(PropTypes.any).isRequired,
  setCurrentStepHandler: PropTypes.func.isRequired,
  setOrderHandler: PropTypes.func.isRequired,
};

export default PersonalInfoPage;
