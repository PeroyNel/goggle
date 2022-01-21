import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async(type) => {
        setLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
                
                
            }
        });
        
        const data = await response.json();

        

        

        setResults(data);
        setLoading(false);

    }

    return (
        <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, Loading }}>
            {children}

        </StateContext.Provider>

    );

}

export const useStateContext = () => useContext(StateContext);