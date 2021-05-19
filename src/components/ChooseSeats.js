import { useParams, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seats from './Seats';
import SeatsSubtitles from './SeatsSubtitles';
import UserInputs from './UserInputs';

export default function ChooseSeats(props) {
	const params = useParams();
    const[movie, setMovie] = useState({});
    const[day, setDay] = useState({});
    const[seatsData, setSeatsData] = useState([]);
    useEffect(() => {
        const sessionRequest = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.idSession}/seats`);
        sessionRequest.then(response => {
            setMovie(response.data.movie);
            setDay(response.data.day);
            setSeatsData(response.data.seats);
        });
    }, [params.idSession]);
    function sendOrder(){
        const orderData = {"name": props.clientName, "cpf": props.clientCPF, "ids": props.seats};
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many', orderData);
        props.setSeats([]);
        props.setClientCPF('');
        props.setClientName('');
    }

	return (
        <div class ='seats-feed'>
            <div class='text-box'>Selecione o(s) assento(s)</div>
            <Seats seatsData={seatsData} setSeats={props.setSeats} seats={props.seats}/>
            <SeatsSubtitles/>
            <UserInputs clientName={props.clientName} clientCPF={props.clientCPF} setClientName={props.setClientName} setClientCPF={props.setClientCPF}/>
            <Link to='/sucesso' style={{ textDecoration: 'none' }}>
                <div class='book-seats-button' onClick={sendOrder}> Reservar assento(s)</div>
            </Link>
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