import { useMutation } from "@apollo/client"
import { LoginMutation } from "../../data/api/user_remote_data_sources"

export const useLoginMutationHook = () => {

    const [login, { data, loading, error}] = useMutation(LoginMutation);
    const mutate =  async (User) => {
        // console.log(User)

        const response = await login({
            variables : {
                loginInput:{    
                    passWord:User.password,
                    email:User.email,
                }  
            }
        })

        return response.data.login

    }

    return {
        mutate,
        data,
        loading,
        error,
    }


}
