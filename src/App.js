
import React, { useState, useEffect } from 'react';
import fetchData from './fetch-data';

const App = (props) => {
  const {data, isLoading} = fetchData (
    "https://jsonplaceholder.typicode.com/users",
  )
  
  return (
    <div>
      {isLoading ? <div>Loading...</div> :
        <ol>
          {data.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ol>
      }


    </div>
  )
}
export default App;
