import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./app.css"
import Header from "./Component/Header";


function App() {
  const[data , setData] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'

  const fetchData = async()=>{
    try {
     const res = await axios.get(url)
    //  console.log(res);
        if(res?.data?.length){
            setData(res.data)
            // console.log(res);
            
        }
    } catch (error) {
       return alert("unable to fetch data")
    }   
  } 

  useEffect(() => {

    fetchData();
    // console.log(data);
  
    
  }, [])

  // console.log(data)
  
  
  
  return (
    <div className="App">

              <Header/>
              <div className="row m-5 justify-content-evenly">
                {data.map((v,i)=>(
                  <div key={i} className="wh p-5 m-4 card shadow">
                      <p>Name: {v.name}</p>
                      <p>Email: {v.email}</p>
                      <p>Number: {v.phone}</p>
                      <p>Address: {v.address.city}-{v.address.street}</p>
                  </div>
                ))}
              
            

            </div>
    </div>
  );
}

export default App;
