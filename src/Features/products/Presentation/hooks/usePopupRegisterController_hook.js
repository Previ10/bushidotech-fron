import { useAuthenticationStorage } from "../../../user/data/local/user_local_data_sources";
import * as yup from 'yup';
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { User } from '../../../user/data/models/user'
import { useSingnUpMutationHook } from "../../../user/presentation/hooks/use_signup_mutation_hook";

const registerFormSchema = yup.object().shape({

    email: yup
        .string()
        .email('El correo electronico ingresado no es valido'),
    password: yup
        .string('')
        .min(6, 'la contraseña debe tener al menos 10 caracteres')
        .max(15, 'la constraseña debe tener maximo 15 caracteres'),
    name: yup
        .string(),
    lastname: yup
        .string(),
    ciudad: yup
        .string(),
    provincia: yup
        .string(),
    adress: yup
        .string(),


})

export const usePopupRegisterController = ({ showModal, setShowModal }) => {

    const { errors, handleSubmit, handleChange, handleBlur, values, touched, resetForm} = useFormik({
        initialValues: {
            email: '',
            password: '',
            lastname: '',
            name: '',
            ciudad: '',
            dni: '',
            provincia: '',
            adress: '',
        },
        validationSchema: registerFormSchema,
        onSubmit: (values) => handleRegisterClick(values),
        
    });

    const { SaveUserLocalData } = useAuthenticationStorage();
    const { loading, mutate, error, data } = useSingnUpMutationHook();
    const [showRegisterSucessModal, setShowRegisterSucessModal] = useState(false)


    const handleRegisterClick = (values) => {
        const user = new User();

        user.email = values.email;
        user.password = values.password;
        user.lastname = values.lastname,
            user.name = values.name,
            user.ciudad = values.ciudad,
            user.dni = values.dni,
            user.provincia = values.provincia,
            user.adress = values.adress,

            mutate(
                user
            );
           
    };

    useEffect(() => {

        if (data && data.signup && !loading) {
            console.log(data);
            SaveUserLocalData(data.signup.user, data.signup.token);
            setShowRegisterSucessModal(true);
            resetForm();

        }

    }, [data]);

    return {
        handleRegisterClick,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        showRegisterSucessModal,
        setShowRegisterSucessModal,
        loading
        
    }
}
