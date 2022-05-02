import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
    <h1>Hola bienvenido a las rutas!</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </div>
     <Routes>     
        <Route path="/" element={
        <h1>Hola soy el Home</h1>
        } />
         <Route path="/about" element={
        <h1>Hola soy el About</h1>
        } />
        <Route path="/users" element={
        <h1>Hola soy el Users</h1>
        } />
    </Routes>
  </div>
  );
}

export default App;
