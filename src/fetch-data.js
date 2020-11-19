import React, { useState, useEffect } from 'react';

const fetchData = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // fetch('https://jsonplaceholder.typicode.com/users')
      // .then((response) => response.json())
      // .then((data) => setData(data));
  
      (async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setTimeout(()=>{
          setData(data);
        setIsLoading(false);
  
        },1000)
        
  
      })();
  
    }, []);

    return {data, isLoading} ; 




}
export default fetchData;