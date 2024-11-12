import { useQuery } from "@apollo/client"
import { GetProductQuery } from "../data/api/product_remote_data_source";


export const useGetProductQueryHook = ({ category, searchInput }) => {
    const { data, loading, error, refetch } = useQuery(GetProductQuery, {
        variables: {
            search: category,
            ...(searchInput && { filterName: searchInput })
        },
    });

    return {
        data: data?.getProducts.items, loading, error, refetch
    }

}