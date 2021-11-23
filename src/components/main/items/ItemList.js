import Item from "./Item";
import OpenDetail from "../buttons/OpenDetail";

const ItemList = (props) => {
  return (
    <>
      {
        props.content.length === 0 ?
        <p className="msg msg__cargando" id="messageData"></p> :
        props.content.map(art => 
          <figure key={`figure${art.id}`} className="card">
            <Item content={art}/>
            <OpenDetail content={art}/>
          </figure>
        ) 
      }
    </>
  )}
export default ItemList;