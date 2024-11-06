import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { QueryClient, QueryClientProvider } from "react-query";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URI,
  }),
  cache: new InMemoryCache(),
  
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ApolloProvider client={client}> 
      <App/>
    </ApolloProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
