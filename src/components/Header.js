import React, { useContext, useEffect, useState} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all h-[60px] flex items-center`}>
    <div className='container mx-auto flex items-center justify-between w-full'>
      {/* Logo */}
      <Link to={'/'}>
        <img src={Logo} alt="Logo" className='w-[40px]' />
      </Link>
  
      {/* Cart Icon */}
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2xl' />
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
          {itemAmount}
        </div>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
