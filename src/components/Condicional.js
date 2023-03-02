import { useState } from "react";
import Button from "./Eventos_components/Button";

function Condicional(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();


    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email) 
    }

    function limparEmail(){
         setUserEmail("")
    }
        return (
            <div>
                <h2>Cadastre-se com E-mail:</h2>
                <form>
                     <input type="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
                     <button onClick={enviarEmail}>Enviar Email</button>
                     {userEmail && (
                        <div>
                            <p>O email do usuario é: {userEmail}</p>
                            <button onClick={limparEmail}>Limpar</button>
                            
                        </div>
                     )}
                </form>
            </div>
        )
}

export default Condicional;