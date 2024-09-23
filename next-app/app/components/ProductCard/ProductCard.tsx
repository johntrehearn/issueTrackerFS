import React from 'react'
import AddToCart from '../AddToCart'
// REMOVED FOR TAILWIND EG - import styles from './ProductCard.module.css'

// styles imported from ProductCard.module.css is a JS object. So the classes we define int the css module will end up being properties of the object (styles object)


//OLD VERSION for CSS MODULES
// const ProductCard = () => {
//     return (
//         <div className={styles.card}>
//             <AddToCart />
//         </div>
//     )
// }

//export default ProductCard


// With Tailwind CSS if you press CTRL and SPACE you will get a list of all the Tailwind classes you can use. But it shows on MAC automatically.

const ProductCard = () => {
    return (
        <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>
            <AddToCart />
        </div>
    )
}

export default ProductCard