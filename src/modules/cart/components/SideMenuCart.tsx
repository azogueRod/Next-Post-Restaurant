import { Button } from '@nextui-org/react'
import React from 'react'

export const SideMenuCart = () => {
  return (
    <nav className='cart__sidemenu'>
  <h2 >Carrito de  <span className='font-light'>Compras</span></h2>

  <ul className="">
    <li></li>
  </ul>
  <p className='text-2xl text-gray-400 text-center '>No hay productos en el carrito</p>
   
   <Button color='primary' size='lg' variant='shadow'>Pagar: 0.00</Button>
    </nav>
  )
}
