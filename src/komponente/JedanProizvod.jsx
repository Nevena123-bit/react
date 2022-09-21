import React from 'react'
import {GrAddCircle} from "react-icons/gr";
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {Img} from 'react-image';
function JedanProizvod({product,Dodaj,Oduzmi,inCart}) {
   // console.log(props);
  /* function Dodaj(title){
       product.amount=product.amount+1;
       ssssssssss
       console.log("product id= "+product.id,"amount= "+ product.amount +title);
   }
   */

  /* function Oduzmi(){
       if(product.amount>0){
        product.amount=product.amount-1;
        console.log("product id= "+product.id,"amount= "+product.amount);
    
       }
       
   }
   */
    return (
        <div className={inCart===1 ? "card" : "card-cart"}>
           <img
        className="card-img-top"
        src={product.link}
        alt="Neka slika"
/>
           <div className="card-body">
               <h3 className="card-title">{product.title}</h3>
                <p className="card-text">{product.description}</p>
                
               </div>
               {inCart===1 ?(
                    <> 
                    <button className="btn" onClick={()=>Dodaj(product.title,product.id)}>
                        <GrAddCircle/>
                        </button>
           <button className="btn" onClick={()=>Oduzmi(product.title)}>
               <IoMdRemoveCircleOutline/>
           </button>
           </>
           ):(
           <h3>Amount:{product.amount}</h3>
           )}
          
        </div>
    );
}

export default JedanProizvod
