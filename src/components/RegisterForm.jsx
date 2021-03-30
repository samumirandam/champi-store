import React, { useState } from 'react';
import { useFormik } from 'formik';

const RegisterForm = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setAlertMessage(
        `Te volví a mentir ${
          values.email.split('@')[0]
        }, tampoco te puedes registrar.`
      );
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">
        <span>Correo electrónico</span>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>

      <button type="submit">Registrarme</button>
      <br/>
      <br/>
      <p>{alertMessage}</p>
    </form>
  );
};

export default RegisterForm;
