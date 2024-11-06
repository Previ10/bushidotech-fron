import { useLoginMutationHook } from "../../../user/presentation/hooks/use_login_mutation_hook";
import { useAuthenticationStorage } from "../../../user/data/local/user_local_data_sources";
import * as yup from 'yup';
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {User} from '../../../user/data/models/user'

const loginFormSchema = yup.object().shape({

  email: yup
    .string()
    .email('El correo electronico ingresado no es valido'),
  password: yup
    .string('')
    .min(6, 'la contraseña debe tener al menos 10 caracteres')
    .max(15, 'la constraseña debe tener maximo 15 caracteres'),

})

export const usepopupSessionshook = (showModal, setShowModal) => {

  const { errors, handleSubmit, handleChange, handleBlur, values, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginFormSchema,
    onSubmit: (values) => handleLoginClick(values),
  });
  const { SaveUserLocalData } = useAuthenticationStorage();
  const { loading, mutate, error, data } = useLoginMutationHook()


  const handleLoginClick = (values) => {
    const user = new User();

    user.email = values.email;
    user.password = values.password;
    mutate(
      user
    );
    setShowModal(false);
  };

  useEffect(() => {

    if (data && !loading) {
      console.log(data)
      SaveUserLocalData(data.login.user, data.login.token)

    }

  }, [data])

  return {
    handleLoginClick,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched
  }
}
