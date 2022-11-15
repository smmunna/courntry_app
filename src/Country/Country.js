import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
function Country() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
                console.log(response.data);
            });
    }, []);

    const handleRemoveCountry = (name) =>{
        const newCountries = countries.filter(country => country.name.common !== name);
        setCountries(newCountries);
    }

    //Search box working:
    const [search, setSearch] = useState('');
    
    const handleOnChange = (event) => {
        setSearch(event.target.value);
    }

useEffect(() => {   
    const results = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
    setCountries(results);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [ search]);

  

    return (
        <>
        <div className="search-box">
            <input type="text" onChange={handleOnChange} value={search} placeholder="Search Country" />
        </div>
            {
                countries.map(country => (

                    <>
                            <div className="col-lg-4 mycard">
                                <h3 key={country.name.common}>{country.name.common}</h3>
                                <p >Capital: {country.capital}</p>
                                <p>Population: {country.population}</p>
                                <p>Area: {country.area}</p>
                                <img src={country.flags.png} alt={country.name.common} srcset="" />
                           
                                <br />
                                <button className='btn btn-danger mt-3' onClick={()=>{
                                    handleRemoveCountry(country.name.common);
                                }}>Delete</button>
                        </div>
                    </>
                ))

            }
        </>
    )
}

export default Country