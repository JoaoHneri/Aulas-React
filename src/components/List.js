import Item from "./Item";

function List(){
    return(
        <>
            <h1>List</h1>
            <ul>
                <Item marca='Ford' ano_lancamento={2015}/>
                <Item/>
            </ul>
        </>
    )
}

export default List;