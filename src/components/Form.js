function Form(){

    function cadastrarUsuario(){
        alert("Cadastro realizado com sucesso!");

    }
    return(
    <div>
        <h3> Meu Cadastro: </h3>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type='text' placeholder='Digite seu Nome'/> 
            </div>
            <input type='submit' value='Cadastrar'/>
        </form>
    </div>        
    )
}

export default Form;