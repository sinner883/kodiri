import React from 'react';
import matrix1 from './img/matrix1.jpg';
import matrix2 from './img/matrix2.jpg';
import matrix3 from './img/matrix3.jpg';
import peaky from './img/peaky.jpg';
import endgame from './img/endgame.jpg';
import twotowers from './img/twotowers.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is my movie library</h1>
      <div className='container'>
        <div className='item'>
          <img src={matrix1} alt='movie' />
          <div>
            <h1 className='overlay'>Matrix1</h1>
          </div>
        </div>
        <div className='item'>
          <img src={matrix2} alt='movie' />
          <div>
            <h1 className='overlay'>Matrix2</h1>
          </div>
        </div>
        <div className='item'>
          <img src={matrix3} alt='movie' />
          <div>
            <h1 className='overlay'>Matrix3</h1>
          </div>
        </div>
      </div >

      <div className='container'>
        <div className='item'>
          <img src={peaky} alt='movie' />
          <div>
            <h1 className='overlay'>Peaky</h1>
          </div>
        </div>
        <div className='item'>
          <img src={endgame} alt='movie' />
          <div>
            <h1 className='overlay'>Endgame</h1>
          </div>
        </div>
        <div className='item'>
          <img src={twotowers} alt='movie' />
          <div>
            <h1 className='overlay'>TwoTowers</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
