import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

import { device } from './styles';
import ConfirmationPage from './pages/Confirmation';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import MenuSelectionPage from './pages/MenuSelection';
import PersonalInfoPage from './pages/PersonalInfo';
import RestaurantSelectionPage from './pages/RestaurantSelection';

const StyledMainAppWrapper = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.components.app.maxWidth};
  padding: 10px;
  width: 100%;

  @media ${device.laptop} {
    padding: 20px 0;
    width: 90%;
  }
`;

const App = () => {
  const steps = [
    {
      name: 'Restaurant',
      description: 'Elige un restaurant',
    },
    {
      name: 'Menú',
      description: 'Elige tu plato favorito',
    },
    {
      name: 'Envío',
      description: 'Completa algunos datos',
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [restaurants, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/restaurants');
      const parsedResponse = await response.json();
      setRestaurants(parsedResponse);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Fragment>
      {isLoading && <LoadingScreen />}

      <Header currentStep={currentStep} steps={steps} />

      <StyledMainAppWrapper>
        {currentStep === 1 && (
          <RestaurantSelectionPage
            restaurants={restaurants}
            setCurrentStepHandler={setCurrentStep}
            setIsLoadingHandler={setIsLoading}
            setMenuHandler={setMenu}
            setOrderHandler={setOrder}
          />
        )}

        {currentStep === 2 && (
          <MenuSelectionPage
            menu={menu}
            order={order}
            setCurrentStepHandler={setCurrentStep}
            setOrderHandler={setOrder}
          />
        )}

        {currentStep === 3 && (
          <PersonalInfoPage
            menu={menu}
            order={order}
            setCurrentStepHandler={setCurrentStep}
            setOrderHandler={setOrder}
          />
        )}

        {currentStep === 4 && (
          <ConfirmationPage order={order} />
        )}
      </StyledMainAppWrapper>
    </Fragment>
  );
};

export default App;
