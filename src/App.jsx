import { useState } from 'react'
import './App.css'
import Listing from './components/Listing'
import etsy from './data/etsy' 

function App() {
  const [count, setCount] = useState(0)
 
  return (
      <Listing items={etsy}/>
  )
}

export default App
