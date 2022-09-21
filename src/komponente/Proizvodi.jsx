import React from 'react'
import JedanProizvod from './JedanProizvod'
//prima tri propertija, products, ono sto smo poslali, dodaj i oduzmi funkcije 
const Proizvodi = ({products,Dodaj,Oduzmi}) => {
    const naziv="Naziv proizvoda";
    const opis="Opis proizvoda";
    
    return (
        <>
        
        <div className="all-products">
            {products.map((prod) => {
                return <JedanProizvod product={prod} key={prod.id} Dodaj={Dodaj} Oduzmi={Oduzmi} inCart={1} />;
            })}
            {/*<JedanProizvod product={products[0]} Dodaj={Dodaj}/>
     <JedanProizvod product={products[1]} Dodaj={Dodaj}/>
     <JedanProizvod product={products[2]} Dodaj={Dodaj}/>
     <JedanProizvod product={products[3]} Dodaj={Dodaj}/>
     <JedanProizvod product={products[4]} Dodaj={Dodaj}/>
     */}
        </div></>
    )
}

export default Proizvodi


