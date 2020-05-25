import React from 'react';
import Stack from './Stack.js';
import getMovieApp from './getMovieApp';

export default function MovieApp() {
    return (
        <div>
            <h1>My Library</h1>
            <div className='container'>
               {
                   getMovieApp().map(stack => (
                       <Stack 
                        key={stack.id}
                        id={stack.id}
                        name={stack.name} 
                        logo={stack.logo} />
                   ))
               } 
            </div>
        </div>

    );
}
