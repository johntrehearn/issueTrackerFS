import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css'

// styles imported from ProductCard.module.css is a JS object. So the classes we define int the css module will end up being properties of the object (styles object)



const ProductCard = () => {
    return (
        <div className={styles.card}>
            <AddToCart />
        </div>
    )
}

export default ProductCard