import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seats from './Seats';
import UserInputs from './UserInputs';

export default function ChooseSeats(props) {
	const params = useParams();
    const[session, setSession] = useState({});
    const[movie, setMovie] = useState({});
    const[day, setDay] = useState({});
    const[seatsData, setSeatsData] = useState([]);
    useEffect(() => {
        const sessionRequest = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.idSession}/seats`);
        sessionRequest.then(response => {
            setSession(response.data);
            setMovie(response.data.movie);
            setDay(response.data.day);
            setSeatsData(response.data.seats);
            console.log(response.data.seats);
        });
    }, [params.idSession]);

	return (
        <div class ='seats-feed'>
            <div class='text-box'>Selecione o(s) assento(s)</div>
            <Seats seatsData={seatsData} setSeats={props.setSeats}/>
            <UserInputs clientName={props.clientName} clientCPF={props.clientCPF} setClientName={props.setClientName} setClientCPF={props.setClientCPF}/>
            <div class='book-seats-button'> Reservar assento(s)</div>
            <div class='sessions-feed-bottom'>
                <div class='thumbnail'>
                    <img src={movie.posterURL} alt={movie.title}></img>
                </div>
                <div class='movie-title'>
                    <p>{movie.title}</p>
                    <p>{day.weekday + ' - ' + day.date}</p>
                </div>
            </div>
        </div>
    )
}