import randomElementArray from "../utils/randomElement";
import phrase from '../utils/phrases.json'

const Buton =({ setpostRandom, setrandonBack, backRandon }) => {
    const handleRaondom = ()=>{
      setpostRandom(randomElementArray(phrase));
      setrandonBack(randomElementArray(backRandon))
       
        
      }
      return <button className="btn" onClick={handleRaondom}>Abrir otra Galleta</button>
}


export default Buton
