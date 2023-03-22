import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,population,area,flags,region} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h4>Country Name: {name.common}</h4>
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p>region: {region}</p>
        </div>
    );
};

export default Country;