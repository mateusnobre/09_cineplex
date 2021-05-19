export default function Seats(props){
    return(
        <div class='seats-grid'>
            {props.seatsData.map(seat =>
                <div class={seat.isAvailable? 'seat': 'seat unavailable'} onClick={(e) => {e.currentTarget.classList.add('selected')}}>
                    {seat.name}
                </div>
            )}
        </div>
    )
}