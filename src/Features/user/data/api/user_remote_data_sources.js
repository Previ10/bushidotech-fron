import { ApolloClient, gql } from '@apollo/client';

export const LoginMutation = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      user {
        adress
        ciudad
        dni
        email
        id
        isActive
        lastname
        name
        numero
        piso
        provincia
        rol
      }
    }
  }
`

export const SignupMutation = gql`
  mutation Mutation($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      token
      user {
        ciudad
        dni
        email
        id
        isActive
        lastname
        rol
        piso
        numero
        name
        provincia
        adress
      }
    }
  }
`

