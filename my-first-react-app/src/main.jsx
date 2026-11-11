import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './components/welcome.jsx'
import Greetings from './components/Greetings.jsx'
import ProductCard from './components/ProductCard.jsx'
import MoodTracker from './components/MoodTracker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Welcome />
    <Greetings  greet={"Good Morning"} name= {"Phitron"}/>
    <Greetings  greet={"Good Evening"} name= {"Meta"}/>
    <MoodTracker />
    <ProductCard title={'Laptop'} price={'45000'} isStock={'true'} />
  </StrictMode>,
)
