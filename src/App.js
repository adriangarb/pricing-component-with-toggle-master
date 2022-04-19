
import './scss/app.scss';
import Componente from './Componente'
import ToggleBar from './ToggleBar'
import { useState } from 'react';

function App() {
  const [time,setTime] = useState(true);
  const dataAnually = [{
    plan: "Basic",
    price: 199.99,
    storage: "500 GB",
    users: 2,
    send: "3 GB"
  },{
    plan: "Professional",
    price: 249.99,
    storage: "1 TB",
    users: 5,
    send: "10 GB"
  },{
    plan: "Master",
    price: 399.99,
    storage: "2 TB",
    users: 10,
    send: "20 GB"
  }]
  return (
    <div className="app">
      <div className="app_toggle-bar">
        <ToggleBar onChange={(event)=>{
          setTime(prevState => !prevState)
          }
      }/>
      </div>
      <div className="app_cards">
        {time===true ? (
          dataAnually.map((data,index)=><Componente key={index} plan={data.plan}price={data.price}storage={data.storage}users={data.users}send={data.send}/>)
        ) : (
          dataAnually.filter(data =>
            data.price = parseInt(data.price * 10) / 100).map((data,index)=><Componente key={index} plan={data.plan}price={data.price}storage={data.storage}users={data.users}send={data.send}/>)
        )
        } 
      </div>
      
    </div>
  );
}

export default App;
