// src/header.jsx
import React from 'react';
import './header.css'; // Ensure this matches the case of the CSS file

const Header = () => {
  return (
    <header className="header">
      <img src="https://imgs.search.brave.com/60NPeLsbfoTqJP-CyDMuMlvbyic_SIi31YYXIQS8AqU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4xNTY2/ODAwMzY0LjQ4MzMv/c24seDEwMDAtcGFk/LDc1MHgxMDAwLGY4/ZjhmOC5qcGc" alt="Background" className="header-background"/>
      <h1 className="header-title">Gregg frickin Heffley</h1>
    </header>
  );
}



const About = () => {
    return (
      <div className="desc">
       
        <p className="par">Im greg heffley from diary of a wimpy kid, my best friend is rowley jeffereson, i try everything to be the most popular kid at school even at the expense of my friends</p>
      </div>
    );
  }


export default Header;
