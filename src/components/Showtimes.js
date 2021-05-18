export default function Showtimes(props){
    return (
        props.days.map(session =>
                <div class='day'>
                    <div class='date'>{session.weekday + ' - '+ session.date}</div>
                    <div class = 'showtimes'>
                        {session.showtimes.map(showtime =>
                            <div class='showtime'>
                                {showtime.name}
                            </div>)}
                    </div>
                </div>
            )
    )
}