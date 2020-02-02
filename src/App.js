import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [jsonData,setJsonData] = useState(null);

    async function fetchData() {
      const response = await axios.get("http://localhost:3004/posts/1");
      debugger;
      setJsonData(response.data);
  };

  return (
    <div>
     <button onClick={fetchData}>Fetch API</button>
     <pre>
       <code>
         { JSON.stringify(jsonData,null,4) }
       </code>
     </pre>
    </div>
  );
}

export default App;
