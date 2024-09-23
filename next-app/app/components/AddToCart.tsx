'use client'
import React from 'react'

// OLD VERSION for CSS MODULES
//const AddToCart = () => {
//     return (
//         <div>
//             <button onClick={() => console.log('Added to cart')}>Add to cart</button>
//         </div>
//     )
// }

// export default AddToCart


const AddToCart = () => {
    return (
        <div>
            <button className='btn btn-primary' onClick={() => console.log('Added to cart')}>Add to cart</button>
        </div>
    )
}

export default AddToCart