import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultsContext } from '../context/ResultsContextProvider';
import { Loading } from './Loading';

export const Results = () => {

    const { results, isLoading, getResults, searchTerm } = useReactContext();
    const location = useLocation();

    if(isLoading) return <Loading />;



    return (
        <div>
            Results
            
        </div>
    );
}
