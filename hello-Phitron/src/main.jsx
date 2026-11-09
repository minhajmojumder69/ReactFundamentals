import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './Components/Profile'
import ShoppingList from './Components/ShoppingList'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Profile />
   <ShoppingList />
  </StrictMode>,
)
