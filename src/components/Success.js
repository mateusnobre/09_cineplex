import { Link } from "react-router-dom";
export default function Success(props){
    return(
        <div class='success'>
            <div class='text-box'> Pedido feito com sucesso! </div>
            <div class='section-title'>Filme e sessão</div>
            <div class='section-text'>{props.movieTitle}</div>
            <div class='section-text'>{props.showtime}</div>
            <div class='section-title'>Ingressos</div>
            {props.seats.map(seat =>
                <div class='section-text'>
                    Assento: {seat}
                </div>
                )}
            <div class='section-title'>Comprador</div>
            <div class='section-text'>Nome: {props.clientName}</div>
            <div class='section-text'>CPF: {props.clientCPF}</div>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div class='go-home-button'>Voltar pra Home</div>
            </Link>
        </div>
    )
}