import React from 'react'
import JedanProizvod from './JedanProizvod'

const Cart = ({products}) => {
    return (
        <div className="cart-container">
            
            {products.map((prod)=><JedanProizvod product={prod} key={prod.id} inCart={0}/>)}
        </div>
    )
}

export default Cart
