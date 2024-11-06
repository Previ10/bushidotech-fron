import { useMutation } from "@apollo/client"
import { CreateProductMutation } from "../data/api/product_remote_data_source";

export const useCreateProductMutationHook = () => {

    const [createProduct, { data, loading, error }] = useMutation(CreateProductMutation)
    const mutate = async (Product) => {
        const response = await createProduct({

            variables: {
                createProductInput: {
                   
                    brand: Product.brand,
                    description: Product.description,
                    features: Product.features,
                    garantia: Product.garantia,
                    image: Product.image,
                    name: Product.name,
                    precio: Product.precio,
                    stock: Product.stock,
                    type: Product.type
                }

            }

        });

        return response.data.createProduct

    }

    return {
        mutate,
        data,
        loading,
        error,
    }
}
