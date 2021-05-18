export default function Seats(props){
    return(
        <div class='seat-grid'>
            {props.seatsData.map(seat =>
                <div class={seat.isAvailable? 'seat': 'seat unavailable'}>
                    {seat.name}
                </div>
            )}
        </div>
    )
}