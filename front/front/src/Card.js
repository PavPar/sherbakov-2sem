import React from 'react';

export default function Card({title, info}) {
    return (
        <div className="note">
            <h2 className="note__title">{title}</h2>
            <p className="note__info">{info}</p>
        </div>
    )
}
