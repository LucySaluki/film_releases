import React from 'react';

export default function Film(props){
    return(
        <div>
            <li className="list-item"><a href={props.children}>{props.name}</a></li>
        </div>
    )
}