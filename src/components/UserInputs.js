export default function UserInputs(props){
    console.log(props);
    return(
        <div>
            <div class='user-input-title'>Nome do comprador:</div>
            <div class='user-input-field'>
                <input placeholder='Digite seu nome...' value={props.clientName} onChange={e => props.setClientName(e.target.value)}/>
            </div>
            <div class='user-input-title'>CPF do comprador:</div>
            <div class='user-input-field'>
                <input placeholder='Digite seu CPF...' value={props.clientCPF} onChange={e => props.setClientCPF(e.target.value)}/>
            </div>
        </div>
    )
}