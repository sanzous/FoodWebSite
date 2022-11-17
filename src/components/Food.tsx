import React, { useState } from 'react'
import { data } from '../data/data'



const Food = () => {
    const [foods, setFoods] = useState(data)

    const filterByType = (category: any) => {
        setFoods(
            data.filter((item) => {
                return item.category === category
            })
        )
    }

    const filterByPrice = (price: any) => {
        setFoods(
            data.filter((item) => {
                return item.price == price
            })
        )
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 p-y-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>


            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                        <button onClick={() => filterByType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burgers</button>
                        <button onClick={() => filterByType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
                        <button onClick={() => filterByType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Chicken</button>
                        <button onClick={() => filterByType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Salad</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterByPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$</button>
                        <button onClick={() => filterByPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$</button>
                        <button onClick={() => filterByPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$</button>
                        <button onClick={() => filterByPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$$</button>
                    </div>
                </div>
            </div>

            {/* Display API Food Data */}
            <div className='grid  lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={item.id} className=" border shadow-lg rounded-lg hover:scale-105 duration-300">
                        <img src={item.image}
                            alt={item.name}
                            className="w-full h-[200px] object-cover rounded-t-lg" />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-2 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food