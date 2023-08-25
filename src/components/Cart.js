import { useState } from 'react';
import '../styles/Cart.css';

function Cart({ cart, updateCart }) {
    const monsteraPrice = 8;
    //const ivyPrice = 10;
    //const flowerPrice = 15;
    //const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className='lmj-cart'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}>
                Fermer
            </button>
            <h2>Panier</h2>

            <div>
                Monstera : {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>     
            </div>
            <h3>Total : {monsteraPrice * cart}€ </h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
        
    ) : (
        <button
            className='lmj-cart-toggle-button' 
            onClick={() => setIsOpen(true)}>
                Ouvrir le panier
            </button>
    )
}

export default Cart

/*
    <li>Lierre : {ivyPrice}€</li>
                <li>Bouquet de fleurs : {flowerPrice}€</li> 
                Total : {monsterPrice + ivyPrice + flowerPrice}€ 
*/