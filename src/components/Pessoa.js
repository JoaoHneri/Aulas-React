function Pessoa({nome, idade, profissao}){
    return (
        <div>
            {/* <img src={foto} alt={name} ></img> */}
            <p>Nome = {nome}</p>
            <p>Idade = {idade}</p>
            <p>Profissão = {profissao}</p>
        </div>
    )
}

export default Pessoa;