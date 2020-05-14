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
                <Stack id='matrix' name='The Matrix' logo={matrix1} />
                <Stack id='matrix2' name='The Matrix: Reloaded' logo={matrix2} />
                <Stack id='matrix3' name='The Matrix: Revolutions' logo={matrix3} />
            </div>
            <div className='container'>
                <Stack id='war' name='War' logo={war} />
                <Stack id='prodigy' name='Prodigy' logo={prodigy} />
                <Stack id='glass' name='Glass' logo={glass} />
            </div>
        </div>

    );
}