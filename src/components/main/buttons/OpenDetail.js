import { Link } from "react-router-dom";

const OpenDetail = (props) => {
  return (
    <>
      <Link to={`/item/${props.content.id}`} className="btn btn__showDetail">Mostrar Detalles</Link>
    </>
  )};
export default OpenDetail;