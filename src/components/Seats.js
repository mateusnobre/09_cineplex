export default function Seats(props) {

    function selectSeat(e, isAvailable, id) {
        e.preventDefault();
        if (isAvailable && !e.currentTarget.classList.contains('selected')) {
            props.setSeats([...props.seats, id])
        }
        else if (isAvailable && e.currentTarget.classList.contains('selected')) {
            props.setSeats(props.seats.filter(function (value) {
                return value !== id;
            }));
        }
        else { return }
    }
    return (
        <div class='seats-grid'>
            {props.seatsData.map(seat =>
                <div class={seat.isAvailable ? 
                        props.seats.includes(seat.id) ? 'seat selected' : 'seat' 
                        : 'seat unavailable'} onClick={(e) => selectSeat(e, seat.isAvailable, seat.id)} key={seat.id}> 
                    {seat.name}
                </div>
            )}
        </div>
    )
}