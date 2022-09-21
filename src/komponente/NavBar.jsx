import React from "react";
import {BsCart3} from "react-icons/bs";
import {Link} from "react-router-dom";
function NavBar({cartNum}){
    //const curtNum=0;
return <div className="navBar">
    
<Link to="/">Torte i kolaci</Link>
<Link to="/cart" className="cart-items">
    <BsCart3/>
    <p className="cart-num">{cartNum}</p>
</Link>
<Link to="/cenovnik">Cenovnik</Link>
<Link to="/poruciTortu">Porucivanje</Link>


</div>

}
export default NavBar;