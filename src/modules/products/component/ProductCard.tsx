import React from 'react'

export const ProductCard = () => {
  return (
    <div className='product__card'>
      {/* <div className='mb-4 rounded-xl overflow-hidden'> */}
        <img className='rounded-full w-[150px] h-[150px] object-cover mx-auto mb-2'  
        src="https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Producto" />
        
        <h3 className="text-xl mb-2 text-center text-gray-700">Nombre del producto</h3>
        <p className="text-center text-xl text-gray-500">$65</p>
    </div>
  )
}
