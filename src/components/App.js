import Top from './Top';
import MovieFeed from './MovieFeed';
import Sessions from './Sessions';
import ChooseSeats from './ChooseSeats';
import Success from './Success';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    const[moviesData, setMoviesData] = useState([]);
    const[seats, setSeats] = useState([]);
    const[clientName, setClientName] = useState('');
    const[clientCPF, setClientCPF] = useState('');
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
				<Route path="/assentos/:idSession" exact component={() => <ChooseSeats setSeats={setSeats} clientName={clientName} clientCPF={clientCPF} setClientName={setClientName} setClientCPF={setClientCPF}/>}/>
				<Route path="/success" exact component={() => <Success clientCPF={clientCPF} clientName={clientName} seats={seats}/>}/>
            </Switch>
		</BrowserRouter>
        </div>        
    );
}