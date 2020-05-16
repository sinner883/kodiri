import matrix1 from '../img/matrix1.jpg';
import matrix2 from '../img/matrix2.jpg';
import matrix3 from '../img/matrix3.jpg';
import war from '../img/war.jpg';
import prodigy from '../img/prodigy.jpg';
import glass from '../img/glass.jpg';

export default function getMovieApp() {
    return[
        {id: 'matrix', name: 'The Matrix', logo: matrix1 },
        {id: 'matrix2', name: 'The Matrix: Reloaded', logo: matrix2 },
        {id: 'matrix3', name: 'The Matrix: Revolutions', logo: matrix3 },
        {id: 'war', name: 'War', logo: war },
        {id: 'prodigy', name: 'The Prodigy', logo: prodigy },
        {id: 'glass', name: 'Glass', logo: glass }
    ];
}