import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Axios  from 'axios'
import axios from 'axios'
import { Result } from 'postcss'



 
function App() {
  const [posts, setPosts] = useState([]);
  const [timez, setTimez] = useState(0);
  const timezstart = () => 
 {
  setInterval(() => {
    setTimez(sec => sec+1)
  },1000);
 }
return <>

 <div>
 
  {Math.floor(timez/(60*60))}:{Math.floor(timez / 60)}:{timez % 60}
<button onClick={timezstart}>start</button>
  </div>
  </>
}

export default App
