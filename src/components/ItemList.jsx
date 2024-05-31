import Item from "./Item";

const ItemList = ({productos}) => {
    return(
        <>
          {productos.map(producto => (
                <Item key={producto.id} libro={producto} />            
          ))}
  
        </>
    )
} 

export default  ItemList;