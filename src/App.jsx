import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [users,setUsers]=useState([]);
  const [name,setName]=useState('');
  const [total,setTotal]=useState(0)
  useEffect(()=>{
    const fetchData=async()=>{
    const getuser= await axios.get('http://localhost:8000');
    console.log(getuser.data)
    setUsers(getuser.data);
    setTotal(users.length)
    }
    fetchData()

  },[])
  useEffect(()=>{
    const fetchData=async()=>{
    const getuser= await axios.get('http://localhost:8000');
    console.log(getuser.data)
    setUsers(getuser.data);
    }
    fetchData()

  },[total])

  const handleChange=(e)=>{
    setName(e.target.value);
  }
   const submitName=async()=>{
           const addUser=await axios.post('http://localhost:8000/add',{name})
           console.log(addUser);
           const temp=total;
           setTotal(temp+1);
  }
  return (
    <div className="App">
      <h1>hello world</h1>
      {users.length && (
        <ul>
        {users.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      )}
      <input type="text" onChange={handleChange} />
      <button onClick={submitName} >add name</button>
    </div>
  );
}

export default App;
