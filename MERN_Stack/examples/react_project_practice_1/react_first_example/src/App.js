import React from 'react';  // Import React
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <form action="/process" method="post">                
          <div className="form-group">                    
              <label htmlFor="email">Email:</label>                    
              <input type="text" id="email" name="username" className="form-control" />                
          </div>            
      </form>        
  );
}





export default App;

