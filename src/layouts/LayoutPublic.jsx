import React from 'react'
import {Outlet} from 'react-router-dom';

export const LayoutPublic = () => {
  return (
    <div className="container">
            <Outlet/>
    <footer>Este es el footer</footer>
  </div>
    )
}
export default LayoutPublic;