import { useState} from "react";
function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)  
        console.log(password) 
        alert("Cadastro realizado com sucesso!");

    }

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return(
    <div>
        <h3> Meu Cadastro: </h3>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type='text' placeholder='Digite seu Nome' id="name" name="name" onChange={(e)=> setName(e.target.value)}/> 
            </div>
            <div>
                <label htmlFor="email">Senha:</label>
                <input type='password' placeholder='Digite sua Senha' id="password" name="password" onChange={(e) => setPassword(e.target.value)}/> 
            </div>
            <input type='submit' value='Cadastrar'/>
        </form>
    </div>        
    )
}

export default Form;