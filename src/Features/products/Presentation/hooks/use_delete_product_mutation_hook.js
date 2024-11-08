import { useMutation } from "@apollo/client";
import { DeleteProductMutation } from "../data/api/product_remote_data_source";

export const useDeleteProductMutationHook = () => {
    const [deleteProduct, { data, loading, error }] = useMutation(DeleteProductMutation);

  const mutate = async (deleteProductId) => { 
    const response = await deleteProduct({
      variables: {
        deleteProductId, 
      },
    });

    return response.data?.deleteProduct;
  };

  return {
    mutate,
    data,
    loading,
    error,
  };
};