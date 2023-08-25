import CareScale from "./CareScale";
import monstrera from "../assets/monstera.jpg"
import "../styles/PlantItem.css"

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem ({name, cover, light, water})  {
    cover= monstrera;
    return (
        <li className="lmj-plant-item" onClick={()=> handleClick(name)}>
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
            {name}
            <div>
            
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
        
    )
}



/*function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}*/

export default PlantItem