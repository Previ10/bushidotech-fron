import { gql } from "@apollo/client";

export const CreateProductMutation = gql`
mutation CreateProduct($createProductInput: CreateProductInput!) {
  createProduct(createProductInput: $createProductInput) {
    brand
    description
    garantia
    id
    image
    name
    precio
    stock
    type
    features {
      general
      dimensiones
      consumoEnergia
      conectividad
    }
   
  }
}
`
export const DeleteProductMutation = gql`
mutation DeleteProduct($deleteProductId: String!) {
  deleteProduct(id: $deleteProductId)
}
`

export const CreatePreferenceMutation = gql`
mutation Mutation($createPreferenceInput: CreatePreferenceDto!) {
  createPreference(createPreferenceInput: $createPreferenceInput)
}
`
export const GetProductQuery = gql`
  query GetProducts($offset: Int, $limit: Int, $search: String) {
    getProducts(offset: $offset, limit: $limit, search: $search) {
      itemCount
      items {
        type
        stock
        precio
        name
        image
        id
        garantia
        features {
          general
          dimensiones
          consumoEnergia
          conectividad
        }
        description
        brand
      }
    }
  }
`;

export const GetProductByIdQuery = gql`
query Query($getProductByidId: ID!) {
  getProductByid(id: $getProductByidId) {
    type
    stock
    precio
    name
    image
    id
    garantia
    features {
        general
        dimensiones
        consumoEnergia
        conectividad
      }
    description
    brand
  }
}
`
