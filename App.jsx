import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Circle from './circle'


function App() {
  const [count, setCount] = useState(0)
  return <>
  <div className='flex gap-20 justify-center overflow-auto'>
  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>

  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>

  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>

  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>
  <Circle/>
  </div>
  </>
    
 
}

export default App
