import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())
  const [clickHistory, newClickHistory] = useState([])
  const [name, newName] = useState()
  const [status, newStatus] = useState()
  const [save, NewSave] = useState([ ])
  return <>
  <form onSubmit={(e) => {e.preventDefault();
  const copy = [...save];
  copy.push({Name: name, Status: status} )
  NewSave(copy);
  }}> 
    <input type="text" value={name} onChange={ (e) => {
      newName(e.target.value);
    }}/>
    <select onChange={ (e) => {
      newStatus(e.target.value);
    }}>
  <option value="Incomplete">InComplete</option>
  <option value="Complete">Complete</option>
</select>
<input type="submit" value="submit" />
  </form>
  <div>{save.map(
    function (item) {
      return <> {item.Name}, {item.Status}</> 
    }
  )}</div>
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
