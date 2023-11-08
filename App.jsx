import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())
  const [clickHistory, newClickHistory] = useState([])
  return <>
      <button onClick={() => {
            setCount( count+1 );
            const oldHistory = [...clickHistory];
            oldHistory.push({date: new Date(), counter: count});
            newClickHistory (oldHistory);
            }
          }
      >Count</button>
    <button onClick={() => {
            setCount( 0 );
            newClickHistory (0);
          }
        
      }>Reset Button</button>

{clickHistory.map( function (historyItem)
{
  return (
<div className="numScreen" >  
    <div>Click Count: {historyItem.counter}</div>
    <div> Click Time: {historyItem.date.getHours()},{historyItem.date.getMinutes()},{historyItem.date.getSeconds()},
    </div>
    </div>
  )

  
})

}
 
   </>
  
}

export default App
