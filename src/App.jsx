
import React from 'react';
import Header from './header';
import About from './about';
import Contact from './contact';
import './App.css'; 

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
