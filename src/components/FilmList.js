import React from 'react';
import Film from './Film';

export default function FilmList(props){

    const filmNodes = props.films.map(film => {
        return <Film name={film.name} key={film.id}>{film.url}</Film>
    });

    return(
        <div>
            <ul>
                {filmNodes}
            </ul>
        </div>
    )
}