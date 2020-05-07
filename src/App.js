import React from 'react';
import matrix1 from './img/matrix1.jpg';
import matrix2 from './img/matrix2.jpg';
import matrix3 from './img/matrix3.jpg';
import peaky from './img/war.jpg';
import endgame from './img/prodigy.jpg';
import twotowers from './img/glass.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is my movie library</h1> 
      <div className='container'>
        <div className='item'>
          <img src={matrix1} alt='movie' />
          <div>
            <div className='overlay'>Matrix1</div>
          </div>
        </div>
        <div className='item'>
          <img src={matrix2} alt='movie' />
          <div>
            <div className='overlay'>Matrix2</div>
          </div>
        </div>
        <div className='item'>
          <img src={matrix3} alt='movie' />
          <div>
            <div className='overlay'>Matrix3</div>
          </div>
        </div>
      </div >

      <div className='container'>
        <div className='item'>
          <img src={peaky} alt='movie' />
          <div>
            <div className='overlay'>
            <h3>Peaky</h3>
            </div>
          </div>
        </div>
        <div className='item'>
          <img src={endgame} alt='movie' />
          <div>
            <div className='overlay'>
              <h3>Endgame</h3>
            </div>
          </div>
        </div>
        <div className='item'>
          <img src={twotowers} alt='movie' />
          <div>
            <div className='overlay'>
              TwoTowers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
