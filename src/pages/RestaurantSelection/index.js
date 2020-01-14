import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import { device } from '../../styles';
import RestaurantBox from '../../components/RestaurantBox';

const StyledSearchInput = styled.input`
  background: ${({ theme }) => (
    theme.pages.restaurantSelection.searchInput.background
  )};
  border: 0;
  border-bottom: ${({ theme }) => (
    theme.pages.restaurantSelection.searchInput.borderBottom
  )};
  color: ${({ theme }) => (
    theme.pages.restaurantSelection.searchInput.color
  )};
  font-size: ${({ theme }) => (
    theme.pages.restaurantSelection.searchInput.fontSize
  )};
  margin: 40px 0 60px 0;
  text-overflow: ellipsis;
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => (
      theme.pages.restaurantSelection.searchInput.placeholderColor
    )};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => (
      theme.pages.restaurantSelection.searchInput.placeholderColor
    )};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => (
      theme.pages.restaurantSelection.searchInput.placeholderColor
    )};
  }

  &:focus {
    outline: none;
  }
`;

const StyledNoResultsMessage = styled.p`
  font-size: ${({ theme }) => (
    theme.pages.restaurantSelection.searchInput.noResultsMessage.fontSize
  )};
  margin-bottom: 50px;
`;

const StyledH2 = styled.h2`
  font-size: ${({ theme }) => theme.pages.restaurantSelection.h2.fontSize};
  margin: 30px 0;

  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledRestaurantsWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  width: 100%;

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptop} {
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const RestaurantSelectionPage = ({
  restaurants,
  setCurrentStepHandler,
  setIsLoadingHandler,
  setMenuHandler,
  setOrderHandler,
}) => {
  const [restaurantsFound, setRestaurantsFound] = useState([]);
  const [searchInProgress, setSearchInProgress] = useState(null);
  const currentHour = new Date().getHours();
  const openRestaurants = [];
  const closeRestaurants = [];

  const handleRestaurantClick = (restaurant) => {
    (async () => {
      setIsLoadingHandler(true);
      const response = await fetch(`http://localhost:3001/menu/${restaurant.id}`);
      const parsedResponse = await response.json();

      const generatedOrder = {
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          shippingPrice: restaurant.shippingPrice,
        },
        summary: [],
        total: restaurant.shippingPrice,
        clientInfo: {},
      };

      setMenuHandler(parsedResponse[0].menu);
      setOrderHandler(generatedOrder);
      setCurrentStepHandler(2);
      setIsLoadingHandler(false);
    })();
  };

  restaurants.map(restaurant => (
    currentHour > restaurant.openTime && currentHour < restaurant.closeTime
      ? openRestaurants.push(restaurant)
      : closeRestaurants.push(restaurant)
  ));

  const handleSearchInputChange = (event) => {
    setSearchInProgress(event.target.value > '');

    setRestaurantsFound(openRestaurants.filter(restaurant => (
      restaurant.name.toUpperCase().includes(event.target.value.toUpperCase())
      || restaurant.description.toUpperCase().includes(event.target.value.toUpperCase())
    )));
  };

  return (
    <Fragment>
      <StyledSearchInput
        onChange={handleSearchInputChange}
        placeholder="Busca por nombre o comida"
      />

      {searchInProgress && (
        restaurantsFound.length > 0
          ? (
            <Fragment>
              <StyledH2>Resultados de la búsqueda</StyledH2>
              <StyledRestaurantsWrapper>
                {restaurantsFound.map(restaurant => (
                  <RestaurantBox
                    key={restaurant.id}
                    restaurantClickHandler={handleRestaurantClick}
                    restaurant={restaurant}
                  />
                ))}
              </StyledRestaurantsWrapper>
            </Fragment>
          ) : (
            <StyledNoResultsMessage>
              {'No encontramos ningún restaurant '}
              <span aria-label="Emoji de cara triste" role="img">😕</span>
            </StyledNoResultsMessage>
          )
      )}

      <StyledH2>Restaurantes abiertos</StyledH2>
      <StyledRestaurantsWrapper>
        {openRestaurants.map(restaurant => (
          <RestaurantBox
            key={restaurant.id}
            restaurantClickHandler={handleRestaurantClick}
            restaurant={restaurant}
          />
        ))}
      </StyledRestaurantsWrapper>

      <StyledH2>Restaurantes cerrados</StyledH2>
      <StyledRestaurantsWrapper>
        {closeRestaurants.map(restaurant => (
          <RestaurantBox
            key={restaurant.id}
            restaurant={restaurant}
            restaurantIsClosed
          />
        ))}
      </StyledRestaurantsWrapper>
    </Fragment>
  );
};

RestaurantSelectionPage.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentStepHandler: PropTypes.func.isRequired,
  setIsLoadingHandler: PropTypes.func.isRequired,
  setMenuHandler: PropTypes.func.isRequired,
  setOrderHandler: PropTypes.func.isRequired,
};

export default RestaurantSelectionPage;
