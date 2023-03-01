function Eventos() {

    function meuEvento() {
        alert("Evento Ativado");
    }

    return(
        <div>
            <p>Clique No Botão para disparar um evento!</p>
            <button onClick={meuEvento}>Ativar Evento!</button>
        </div>
    )
}

export default Eventos;