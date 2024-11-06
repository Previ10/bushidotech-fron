import { useMutation } from "@apollo/client"
import { SignupMutation } from "../../data/api/user_remote_data_sources";

export const useSingnUpMutationHook = () => {

    const [signup, { data, loading, error }] = useMutation(SignupMutation)
    const mutate = async (User) => {
        const response = await signup({

            variables: {
                signupInput: {
                    passWord: User.password,
                    email: User.email,
                    lastname: User.lastname,
                    name: User.name,
                    ciudad: User.ciudad,
                    dni: User.dni,
                    provincia: User.provincia,
                    adress: User.adress,
                }

            }

        });

        return response.data.signup

    }

    return {
        mutate,
        data,
        loading,
        error,
    }
}
