import React from 'react'
import {Link} from 'react-router-dom';
export const NotFound = () => {
  return (
    <><div>NotFound</div>
    <Link to="/" className="btn btn-dark">Volver al Inicio</Link>
    </>
  )
}
export default NotFound;