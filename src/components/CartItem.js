import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoIosAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)
  const {id, title, image, price, amount} = item
  return (
    <div className='flex justify-between items-center gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
  {/* Left Side: Image */}
  <Link to={`/product/${id}`}>
    <img className="max-w-[80px]" src={image} alt={title} />
  </Link>

  {/* Right Side: Text Content */}
  <div className='flex flex-col w-full'>
    {/* Title and Remove Icon */}
    <div className='flex justify-between mb-2'>
      <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
      <div className='text-xl cursor-pointer' onClick={() => removeFromCart(id)}>
        <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
      </div>
    </div>

    {/* Quantity Selector, Single Item Price & Total Price INLINE */}
    <div className='flex items-center justify-between h-[36px] text-sm'>
      {/* Quantity Selector */}
      <div className='flex max-w-[100px] items-center h-full border text-primary font-medium'>
        <div className='flex-1 flex justify-center items-center cursor-pointer h-full' onClick={() => decreaseAmount(id)}>
          <IoMdRemove />
        </div>
        <div className='h-full flex justify-center items-center px-2'>{amount}</div>
        <div className='flex-1 h-full flex justify-center items-center cursor-pointer' onClick={() => increaseAmount(id)}>
          <IoIosAdd />
        </div>
      </div>

      {/* Single Item Price */}
      <div className='text-gray-500 font-medium'>{`$ ${price.toFixed(2)}`}</div>

      {/* Total Price (IN LINE) */}
      <div className='text-primary font-medium'>{`$ ${(price * amount).toFixed(2)}`}</div>
    </div>
  </div>
</div>


  

  );
};

export default CartItem;
