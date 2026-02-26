import React, { useEffect, useState } from "react"

import './../styles/App.css';

const App = () => {
  const [data,setData]=useState(null);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
      const response=await fetch("https://dummyjson.com/products");
        const result=await response.json();
        setData(result);}
      catch(error){
        console.error("Error fetching data:", error);
      }
    };
  fetchData();
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
    <h2>Data Fetcher</h2>
    <pre>
  {data?JSON.stringify(data,null,2):"Loading..."}
  </pre>
    </div>
  )
};

export default App
