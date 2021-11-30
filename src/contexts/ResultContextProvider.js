import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('React');

    const getResults = async(type) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '7275795ca0msh883b96b5fc78302p1c58c4jsn8124510bcd8a'
                
                
            }
        });
        
        const data = await response.json();

        if(type.includes('/news')) {
            setResults(data.entries);
        } else if(type.includes('/images')) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }

        console.log(data);

        setResults(data);
        setIsLoading(false);

    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}

        </ResultContext.Provider>

    );

}

export const useResultsContext = () => useContext(ResultContext);