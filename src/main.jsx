import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

//
//

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-rxtmyu71ooqow0d6.us.auth0.com'
    clientId='SxTWHsJKrMY98BhaeY1JzVIBsip5jRhi'
    authorizationParams={{
      redirect_uri: `${window.location.origin}/cart`,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);






