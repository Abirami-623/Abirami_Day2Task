import React from 'react';
import './App.css';
import Card from './Card';

function App() {
    const cardData = [
        {
            imageClass: 'car-1',
            title: 'Car 1',
            description: 'The front-wheel drive layout with the engine at the front (FF layout) is generally the most common for cars, but it is not as common among traditional sports cars. Nonetheless, the FF layout is used by sport compacts and hot hatches such as the Mazdaspeed3.',
            link: '#'
        },
        {
            imageClass: 'car-2',
            title: 'Car 2',
            description: 'The longer-range Style Edition gets a 77 kWh battery, a power bump to 340 PS and a range of 580 km; both single-motor models get from zero to 100 km/h in 4.9 seconds on their way to a top speed of just under 200 km/h. Less Cost.High Speed.',
            link: '#'
        },
        {
            imageClass: 'car-3',
            title: 'Car 3',
            description: 'Introduce new safety technologies and comfort amenities. Emphasized higher levels of comfort and safety. Less price.FR layout is more expensive to produce and produces lower fuel economy than a front-wheel drive layout.High Cost.',
            link: '#'
        }
    ];

    return (
        <div className="container">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    imageClass={card.imageClass}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </div>
    );
}

export default App;
