import React from 'react'
import { data } from '../data/data'

const Food = () => {
    console.log(data)
    return (
        <div className='max-w-[1640px] m-auto px-4 p-y-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>


            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p>Filter Type</p>
                    <div>
                        <button>All</button>
                        <button>Burgers</button>
                        <button>Pizza</button>
                        <button>Tacos</button>
                        <button>Dessert</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p>Filter Price</p>
                    <div>
                        <button>$</button>
                        <button>$$</button>
                        <button>$$$</button>
                        <button>$$$$</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Food