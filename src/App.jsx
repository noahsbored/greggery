// src/App.jsx
import React from 'react';
import Header from './header';
import About from './about';
import Contact from './contact';
import './App.css'; // Assuming you will style your component using CSS

const App = () => {
  return (
    <div className="app">
      <Header />
      <About/>
      <Contact/>
     
     
    </div>
  );
}

export default App;
