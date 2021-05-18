import Top from './Top';
import MovieFeed from './MovieFeed';
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function App() {
    const[moviesData, setMoviesData] = useState([]);
    
    useEffect(() => {
        const moviesRequest = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies');
        moviesRequest.then(response => {setMoviesData(response.data);});
        console.log(moviesData);
    }, []);

    return(
        <body>
                <Top />
                <MovieFeed moviesData={moviesData}/>
        </body>
    );
}