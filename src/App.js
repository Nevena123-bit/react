//import logo from './logo.svg';
import './App.css';
import NavBar from './komponente/NavBar';
import Proizvodi from './komponente/Proizvodi';
import Cenovnik from './komponente/Cenovnik';
import {useState} from "react";
import Cart from './komponente/Cart';
import {Img} from 'react-image';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import PoruciTortu  from './komponente/PoruciTortu';

function App() {
  //let curtNum=0;
  const [cartNum, setcartNum] = useState(0);
  const [cartProducts, setcartProducts] = useState([]);
  const [products]=useState([
   
    {id:1,
      title:"Torte",
    description:"Domaće torte su izrađene od dnevno svežih jaja i ostalih najkvalitetnijih domaćih i uvoznih materijala i sirovina.Svi filovi su kuvani na pari, i nigde se ne stavljaju sirova jaja, tj. sva su termički obrađena.",
  amount:0,
  link:"https://ancikolaci.rs/wp-content/uploads/2021/02/svecane-torte.png.webp"},
    {id:2,
      title:"Kolaci",
    description:"Štanglica u dva sloja, svetlije i tamnije boje, urađen od mlevenog, pečenog lešnika, oraha i keksa. Glaziran crnom čokoladom.",
  amount:0,
  link:"https://ancikolaci.rs/wp-content/uploads/2021/02/kolaci.png.webp"},
  {id:3,
    title:"Slatki sto",
  description:"Slatki sto je omiljeni centar okupljanja svake proslave. ",
amount:0,
link:"https://ancikolaci.rs/wp-content/uploads/2020/10/Group-47-1.png.webp"
  }]);
  function refresCart(){
  let newProducts=products.filter((prod)=>prod.amount>0);
  setcartProducts(newProducts);
  }
  function Dodaj(title,id){
    setcartNum(cartNum+1);
    products.forEach((prod) => {
      if(prod.id===id){
        prod.amount++;
      }
      console.log(prod.amount);
    });
  
}


function Oduzmi(title){
  if(products.amount>0){
  setcartNum(cartNum-1);
  }else{
    alert("Brojac je vec na nuli!");
  }
}

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
    <Routes>

      
    </Routes>
     
      
      </BrowserRouter>
  );
}

export default App;
