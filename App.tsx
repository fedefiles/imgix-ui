import { useState } from 'react';
import { Button } from '@nextui-org/react';
import React from "react";
import { Card1 } from './Card1';
import { Card0 } from './Card0';
import {Testi} from './Testi';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
      <Card0/>
      <br/>
      <Testi/>
      </div>
      
      <div className="card">
      
        <p>
         
        </p>
        
      </div>
      <p className="read-the-docs">
        
      </p>
    </div>
  );
}

export default App;