import { useQuery } from "@apollo/client";
import { GetProductByIdQuery } from "../data/api/product_remote_data_source";


export const useGetProductByIdQueryHook = (id) => {

    const {
        data, loading, error
    } = useQuery(GetProductByIdQuery, {
        variables: { getProductByidId: id } 
    });

    return {
        data: data?.getProductByid,
        loading,
        error
    };
};