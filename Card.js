import React from 'react';
import './Card.css';

const Card = ({ imageClass, title, description, link }) => {
    return (
        <div className="card">
            <div className={`card-image ${imageClass}`}></div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>READ MORE</a>
        </div>
    );
};

export default Card;
