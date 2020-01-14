import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Box from '../../components/Box';
import Button from '../../components/Button';
import Input from '../../components/Input';

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.forms.personalInfo.title.fontSize};
`;

const PersonalInfoForm = ({ order, setOrderHandler }) => {
  const PersonalInfoFormSchema = Yup.object().shape({
    name: Yup.string().trim().required('¡Este campo es requerido!'),
    address: Yup.string().trim().required('¡Este campo es requerido!'),
    phone: Yup.string().trim().required('¡Este campo es requerido!'),
    email: Yup
      .string()
      .trim()
      .email('Esta dirección de e-mail es incorrecta')
      .required('¡Este campo es requerido!'),
  });

  const handleSubmit = (values) => {
    setOrderHandler({
      ...order,
      clientInfo: {
        name: values.name,
        address: values.address,
        phone: values.phone,
        email: values.email,
      },
    });
  };

  return (
    <Box padding="15px">
      <StyledTitle>Información de envío</StyledTitle>

      <Formik
        initialValues={{
          name: order.clientInfo.name || '',
          address: order.clientInfo.address || '',
          phone: order.clientInfo.phone || '',
          email: order.clientInfo.email || '',
        }}
        onSubmit={handleSubmit}
        validationSchema={PersonalInfoFormSchema}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
          touched,
          values,
        }) => (
          <Form>
            <Input
              disabled={isSubmitting}
              error={errors.name && touched.name && errors.name}
              label="Nombre"
              margin="0 0 25px 0"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              success={!errors.name && touched.name}
              type="text"
              value={values.name}
            />

            <Input
              disabled={isSubmitting}
              error={errors.address && touched.address && errors.address}
              label="Dirección"
              margin="0 0 25px 0"
              name="address"
              onBlur={handleBlur}
              onChange={handleChange}
              success={!errors.address && touched.address}
              type="text"
              value={values.address}
            />

            <Input
              disabled={isSubmitting}
              error={errors.phone && touched.phone && errors.phone}
              label="Teléfono"
              margin="0 0 25px 0"
              name="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              success={!errors.phone && touched.phone}
              type="text"
              value={values.phone}
            />

            <Input
              disabled={isSubmitting}
              error={errors.email && touched.email && errors.email}
              label="E-mail"
              margin="0 0 25px 0"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              success={!errors.email && touched.email}
              type="email"
              value={values.email}
            />

            <Button disabled={isSubmitting} fullWidth type="submit">
              {'Listo'}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

PersonalInfoForm.propTypes = {
  order: PropTypes.objectOf(PropTypes.any).isRequired,
  setOrderHandler: PropTypes.func.isRequired,
};

export default PersonalInfoForm;
