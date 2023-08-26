import { useState } from 'react';
import { plantList } from '../datas/plantList'

/*function Categories({ activeCategory, setActiveCategory, categories }) {
    const categories = plantList.reduce(
		(acc, curr) => {
            if (!acc.includes(curr.category)){
                acc.push(curr.category);
            }
            return acc;
        }, 
    []);
    //console.log(categories);
    return (
        <div>
            <select onChange={( event ) => setActiveCategory(event.target.value)}  className='lmj-categories-select' >
                {        
                    categories.map(( cat  , index ) => (
                        
                            <option key={`${cat}-${index}`}>{ cat }</option>
                        
                    )) 
                }
            </select>

            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
    
}*/
function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
    )
}

export default Categories;