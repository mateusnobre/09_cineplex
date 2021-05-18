export default function MovieFeed(props) {
   return(
        <div class='movie-feed'>
            <div class='text-box'>
                Selecione o filme
            </div>
            <div class='movies'>
                {props.moviesData.map(movie =>
                    <div class = 'movie'>
                        <img src={movie.posterURL}></img>
                    </div>
                    )}
            </div>
        </div>
    );
}