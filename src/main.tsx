import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:3000/graphql',
    }),
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
