import React from "react";
import { Outlet, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Books(){
    const { id } = useParams();
    return(
    <>
        <h1>Books {id}</h1>

          <Link to='/books/1'>Book1</Link> <br />
          <Link to='/books/2'>Book2</Link> <br />
          <Link to='/books/order'>New Order</Link>

          <Outlet  />
    </>
    )
}
    