import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './Components/Profile'
import ShoppingList from './Components/ShoppingList'
import User from './Components/User'
import Products from './Components/Products'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Products />
    <User />
   <Profile />
   <ShoppingList />
  </StrictMode>,
)
