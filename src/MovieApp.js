import React from 'react';
import Stack from './Stack.js'
import matrix1 from './img/matrix1.jpg';
import matrix2 from './img/matrix2.jpg';
import matrix3 from './img/matrix3.jpg';
import war from './img/war.jpg';
import prodigy from './img/prodigy.jpg';
import glass from './img/glass.jpg';



export default function MovieApp() {
    return (
        <div>
            <h1>My Library</h1>
            <div className='container'>
                <Stack name='The Matrix' logo={matrix1} />
                <Stack name='The Matrix: Reloaded' logo={matrix2} />
                <Stack name='The Matrix: Revolutions' logo={matrix3} />
            </div>
            <div className='container'>
                <Stack name='War' logo={war} />
                <Stack name='Prodigy' logo={prodigy} />
                <Stack name='Glass' logo={glass} />
            </div>
        </div>

    );
}