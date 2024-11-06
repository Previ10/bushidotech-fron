import { useQuery } from "@apollo/client"
import { GetProductQuery } from "../data/api/product_remote_data_source";

export const useGetProductQueryHook = ({category}) => {

    const {
        data, loading, error
    } = useQuery(GetProductQuery,{
        variables:{
            search:category
        }
    });

    return {
        data:data?.getProducts.items, loading, error
    }

}