
import React, { useState } from 'react';

 
const Example=()=> {
  const [change, setChange] = useState(true);
  return (
  <div>
     
    <button onClick = {() => setChange(!change)}>
      Click Here!
    </button>
    {change?
      <NewExample data="Welcome to GeeksforGeeks"/>:
      <NewExample data="A Computer Science Portal for Geeks"/>}
 
  </div>
  );
    
  }
  function NewExample(props)
    {       
    return(
      <div>
        <h1>{props.data}</h1>
      </div>
    )

    }
export default Example;