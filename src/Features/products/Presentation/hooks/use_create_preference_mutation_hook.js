import { useMutation } from "@apollo/client"
import { CreatePreferenceMutation } from "../data/api/product_remote_data_source";

export const UseCreatePreferenceMutationHook = () => {
    const [createPreference, { data, loading, error }] = useMutation(CreatePreferenceMutation);

    const mutate = async ({ productId, quantity }) => {
        try {
            const response = await createPreference({
                variables: {
                    createPreferenceInput: {
                        productId,
                        quantity,
                    },
                },
            });
            return response;
        } catch (error) {
            console.error("Error creando metodo de pago:", error);
            throw error;
        }
    };

    return {
        mutate,
        data,
        error,
        loading,
    };
};