import Top from './Top';
import MovieFeed from './MovieFeed';
import Sessions from './Sessions';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    const[moviesData, setMoviesData] = useState([]);
    useEffect(() => {
        const moviesRequest = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies');
        moviesRequest.then(response => {setMoviesData(response.data);});
    }, []);

    return(
        <div>
            <Top />
            <BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Top />
                    <MovieFeed moviesData={moviesData}/>
				</Route>
				<Route path="/sessoes/:idMovie" exact component={Sessions}/>
			</Switch>
		</BrowserRouter>
        </div>        
    );
}