import React from 'react';
import DataView from './components/DataView.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="header">Earn More, Pay Less? Average Housing Costs and Incomes by NYC Borough</h1>

      <DataView
       borough="Staten Island"
       renterCost="$14,292"
       ownerCost="$28,752"/>

             <DataView
       borough="Queens"
       renterCost="$16,812"
       ownerCost="$29,256"/>

             <DataView
       borough="Manhattan"
       renterCost="$18,900"
       ownerCost="$36,252"/>

             <DataView
       borough="Brooklyn"
       renterCost="$14,144"
       ownerCost="$31,908"/>

             <DataView
       borough="Bronx"
       renterCost="$13,176"
       ownerCost="$28,548"/>
    </div>
  );
}

export default App;
