import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left */}
            <div className='flex items-center '>
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    Local<span className='font-bold '>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>

            {/* Search */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20} />
                <input type="text"
                    placeholder='Search Menu Items'
                    className='bg-transparent p-2 focus:outline-none w-full' />
            </div>
            {/* Cart */}
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20}
                    className="mr-2" />
                Cart
            </button>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>


                {/* SideBar Menu */}
                <div className='fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-75'>

                </div>
            </div>
        </div>
    )
}

export default Navbar