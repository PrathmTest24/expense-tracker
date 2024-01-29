import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Balance from './components/Balance';

function App() {
 
  const [income, setIncome ]= useState('');
  const [emi, setEmi ]= useState('');
  const [insurance, setInsurance ]= useState('');
  const [home, setHome ]= useState('');
  const [vheical, setVheical ]= useState('');
  const [other, setOther ]= useState('');

 
  // console.log(income)
  const click =()=>{
    console.log(income);
  }
  
  return (
    <>
    <div className='head'> Expanse Tracker App </div>     


    <div className="App">
      
       

      <div className='input-data'>
      <Balance/>

        <form className='frm'>
          
         </form>
      </div>
    </div>
    </>
  );
}

export default App;
