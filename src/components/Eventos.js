import Button from "./Eventos_components/Button";
function Eventos() {

    function meuEvento() {
        console.log("Evento Ativado");
    }

    function meuEvento2() {
        console.log("Segundo Evento Ativado");
        
    }
    return(
        <div>
            <p>Clique No Botão para disparar um evento!</p>
            <Button event={meuEvento} text="Primeiro Evento"/> 
            <Button event={meuEvento2} text="Segundo Evento"/> 
        </div>
    )
}

export default Eventos;