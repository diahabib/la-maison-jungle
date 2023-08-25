import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function handleClick( scaleValue, careType ) {
	let q = 'peu';
	if ( scaleValue === 2) q = 'modérement'; else if ( scaleValue === 3 ) q = 'beaucoup'; 

	alert(`Cette plante requiert ${q} d'arrosage`);
	alert(`Type composant : ${careType}`);
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? sun : water

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span onClick={()=> handleClick(scaleValue, careType)} key={rangeElem.toString()}><img src={scaleType} alt='scale type' className='lmj-scale' /></span>
				) : null
			)}
		</div>
	)
}

export default CareScale