import React from 'react'
import { categories } from '../data/data'

const Category = () => {
    console.log(categories)
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Categories</h1>
            {/* Categories */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((item, index) => (
                    <div key={item.id} className="bg-gray-100 rounded-lg p-4 flex flex-row justify-around  items-center">
                        <h2 className='font-bold sm:text-xl m-5 max-w-[100px]'>{item.name}</h2>
                        <img src={item.image} alt={item.name}
                            className='w-20' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category