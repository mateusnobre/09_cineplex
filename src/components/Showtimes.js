import { Link } from "react-router-dom";

export default function Showtimes(props){
    return (
        props.days.map(session =>
                <div class='day'>
                    <div class='date'>{session.weekday + ' - '+ session.date}</div>
                    <div class = 'showtimes'>
                        {session.showtimes.map(showtime =>
                            <Link to={'/assentos/' + (showtime.id)} style={{ textDecoration: 'none' }}>
                                <div class='showtime' key={showtime.id} onClick={() => props.setShowtime(session.date + ' ' +showtime.name)}>
                                    {showtime.name}
                                </div>
                            </Link>
                            )}
                    </div>
                </div>
            )
    )
}