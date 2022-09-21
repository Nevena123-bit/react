import { useState } from "react"; 

function PoruciTortu() {
    const  kategorijeTorti = ["Svadbene","Decije","Svecane","Kolaci","SlatkiBar"];
    function posalji(){
    document.getElementById("ucitani").innerHTML=`

        <h3>${ime}</h3>
        <h3>${prezime}</h3>
        <h3>${mail}</h3>
        <h3>${telefon}</h3>
        <h3>${torte}</h3>
        
        `;   
    
    }
    const [ime,promenIime]=useState("");
    const[prezime,promeniPrezime]=useState("");
    const[mail,promeniMail]=useState("");
    const[telefon,promeniTelefon]=useState("");
    const[torte,promeniTorte]=useState("");
    
    return (
        <>
        <h1>Forma za narucivanje torte</h1>

        <table>

  </table>
           
        <div id="ucitani">
        </div>
        <div id='poruciTortu'>
           <form >
               <input type="text" placeholder='Ime' className='razmak' onInput={(e)=>{promenIime(e.target.value); console.log(e.target.value)}}/>
               <input type="text" placeholder='Prezime'className='razmak'onInput={(e)=>{promeniPrezime(e.target.value);console.log(e.target.value)}}/>
               <input type="email" placeholder='Mail' className='razmak' onInput={(e)=>{promeniMail(e.target.value);console.log(e.target.value)}}/>
               <input type="text" placeholder='Broj telefona' className='razmak' onInput={(e)=>{promeniTelefon(e.target.value);console.log(e.target.value)}}/>
               <select name="torte" className='razmak' onChange={(e)=>{promeniTorte(e.target.value)}} >
                   {kategorijeTorti.map((kategorija)=>(
                       <option key={kategorija} >{kategorija}</option>
                   ))}

</select>
               <button onClick={(e)=>{e.preventDefault();posalji()}} className='razmak'>Poruci</button>

           </form>


        </div>
       
        </>
    )
}

export default PoruciTortu
