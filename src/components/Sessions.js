import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Showtimes from './Showtimes'

export default function Sessions() {
	const params = useParams();
    const[movieSessions, setMovieSessions] = useState({});
    const[daysData, setDaysData] = useState([]);
    useEffect(() => {
        const movieSessionsRequest = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${params.idMovie}/showtimes`);
        movieSessionsRequest.then(response => {setMovieSessions(response.data); setDaysData(response.data.days)});
    }, [params.idMovie]);

	return (
		<div class='sessions-feed'>
            <div class='text-box'>Selecione o horário</div>
            <Showtimes days={daysData}/>
            <div class='sessions-feed-bottom'>
                <div class='thumbnail'>
                    <img src={movieSessions.posterURL} alt={movieSessions.title}></img>
                </div>
                <div class='movie-title'>
                    {movieSessions.title}
                </div>
            </div>
        </div>
	);
}