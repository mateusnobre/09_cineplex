import { Link } from "react-router-dom";
export default function MovieFeed(props) {
    
   return(
        <div class='movie-feed'>
            <div class='text-box'>
                Selecione o filme
            </div>
            <div class='movies'>
                {props.moviesData.map(movie =>
                    <Link to={'sessoes/' + (movie.id)}>
                        <div class = 'movie' key={movie.id}>
                            <img src={movie.posterURL} alt={movie.title}></img>
                        </div>
                    </Link>
                    )}
            </div>
        </div>
    );
}