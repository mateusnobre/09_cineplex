export default function SeatsSubtitles(){
    return(
        <div class='seats-subtitles-grid'>
            <div class='seat-subtitle'>
                <div class='selected'></div>
                <div class='text-box'>Selecionado</div>
            </div>
            <div class='seat-subtitle'>
                <div class='available'></div>
                <div class='text-box'>Disponível</div>
            </div>
            <div class='seat-subtitle'>
                <div class='unavailable'></div>
                <div class='text-box'>Indisponível</div>
            </div>
        </div>
    )
}