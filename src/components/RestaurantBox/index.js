import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Box from '../Box';
import formatNumberToCurrency from '../../utils';

const StyledBox = styled(Box)`
  cursor: ${({ restaurantIsClosed }) => (restaurantIsClosed ? 'default' : 'pointer')};
  filter: ${({ restaurantIsClosed }) => (restaurantIsClosed ? 'grayscale(100%)' : 'none')};
  overflow: hidden;
  transition: all 0.1s linear;

  ${({ restaurantIsClosed }) => !restaurantIsClosed && `
    &:hover {
      transform: translateY(-7px);
    }
  `}
`;

const StyledImage = styled.div`
  background: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: ${({ theme }) => theme.components.restaurantBox.border};
  border-top-left-radius: ${({ theme }) => (
    theme.components.restaurantBox.borderRadius
  )};
  border-top-right-radius: ${({ theme }) => (
    theme.components.restaurantBox.borderRadius
  )};
  height: 180px;
  width: 100%;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-between;
  padding: 10px;
`;

const StyledName = styled.h2`
  font-size: ${({ theme }) => theme.components.restaurantBox.name.fontSize};
  margin-bottom: 10px;
`;

const StyledDescription = styled.div`
  font-size: ${({ theme }) => (
    theme.components.restaurantBox.description.fontSize
  )};
`;

const StyledShippingPrice = styled.div`
  color: ${({ theme }) => theme.components.restaurantBox.shippingPrice.color};
  font-size: ${({ theme }) => (
    theme.components.restaurantBox.shippingPrice.fontSize
  )};
  margin-bottom: 0;
`;

const RestaurantBox = (
  { restaurant, restaurantClickHandler, restaurantIsClosed },
) => (
  <StyledBox
    onClick={!restaurantIsClosed ? (() => restaurantClickHandler(restaurant)) : null}
    restaurantIsClosed={restaurantIsClosed}
  >
    <StyledImage image={restaurant.img} />

    <StyledInfoWrapper>
      <div>
        <StyledName>{restaurant.name}</StyledName>
        <StyledDescription>{restaurant.description}</StyledDescription>
      </div>

      {!restaurantIsClosed && (
        <StyledShippingPrice>
          Envío <b>{formatNumberToCurrency(restaurant.shippingPrice)}</b>
        </StyledShippingPrice>
      )}
    </StyledInfoWrapper>
  </StyledBox>
);

RestaurantBox.propTypes = {
  restaurant: PropTypes.objectOf(PropTypes.any).isRequired,
  restaurantClickHandler: PropTypes.func,
  restaurantIsClosed: PropTypes.bool,
};

RestaurantBox.defaultProps = {
  restaurantClickHandler: () => false,
  restaurantIsClosed: false,
};

export default RestaurantBox;
