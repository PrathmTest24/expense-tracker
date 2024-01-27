import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='head'> Expanse Tracker App </div>     


    <div className="App">
      


      <div className='input-data'>

        <form className='frm'>
          <label className='lable'>Total monthly income
            <input className='input' type='text' name=''/>
          </label>
          <br />

          <label className='lable'>EMI Insurance
            <input className='input' type='text' name=''/>
          </label>

          <br />

          <label className='lable'> Insurance
            <input className='input' type='text' name=''/>
          </label>

          <br />

          <label className='lable'>Home Expences
            <input className='input' type='text' name=''/>
          </label> 

          <br />

          <label className='lable'>Vheical  Expences
            <input className='input' type='text' name=''/>
          </label> 

          <br />

          <label className='lable'>Other
            <input className='input' type='text' name=''/>
          </label>
           
          <button className="button">Click Me</button> 
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
