import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCartUI = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center '>
      <ShoppingCart className='text-gray-300' size={100}/>
      <h1 className='text-2xl font-bold text-gray-300'>
        Your cart is empty
      </h1>
      <p className='text-gray-400'>
        Looks like you haven't added anything to your cart yet.
      </p>
      <Link to={"/"}>
        <button className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 cursor-pointer rounded-md flex items-center transition duration-300 ease-in-out'>
            Start Shopping
        </button>
      </Link>
    </div>
  )
}

export default EmptyCartUI
