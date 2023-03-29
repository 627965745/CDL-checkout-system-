import React, { useEffect, useState } from "react";

const Kiosk = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([]);
    const [offer, setOffer] = useState([]);
    const items = [
        { id: 1, name: "A", price: 50 },
        { id: 2, name: "B", price: 30 },
        { id: 3, name: "C", price: 20 },
        { id: 4, name: "D", price: 15 },
    ];
    const offerA = {message:'Item A buy 3 get £20 off', offerItem: "A"}
    const offerB = {message:'Item B buy 2 get £15 off', offerItem: "B"}
    const numOfIteminCart = (id,cart) => {
        return cart.filter((i) => i.id === id).length;
    };
    const addToCart = (item) => {
        let newItem = { ...item, key: null };
        setCart([...cart, { ...newItem, key: item.id * Math.random() }]);
    };

    const removeFromCart = (item) => {
        const newCart = cart.filter((i) => i.key !== item.key);
        setCart(newCart);
    };

    useEffect(()=> {
        let numOfOfferA = Math.floor(numOfIteminCart(1,cart) / 3)
        let numOfOfferB = Math.floor(numOfIteminCart(2,cart) / 2)
        let newOffersA = Array.from({ length: numOfOfferA }, () => offerA);
        let newOffersB = Array.from({ length: numOfOfferB }, () => offerB);
        let newTotalPrice = numOfIteminCart(1,cart) * 50 + numOfIteminCart(2,cart) * 30 + numOfIteminCart(3,cart) * 20 + numOfIteminCart(4,cart) * 15
        let OfferList = newOffersA.concat(newOffersB)
        OfferList = OfferList.map((item, index) => ({ ...item, key: index }));
        setOffer(OfferList)
        let totalOffer = numOfOfferA * 20 + numOfOfferB * 15
        console.log(totalOffer)
        setTotalPrice(totalPrice => newTotalPrice - totalOffer)
    },[cart]) 

    return (
        <div>
            <h1>Kiosk Checkout System</h1>
            <div style={{ display: "flex" }}>
                <div>
                    {items.map((item) => (
                        <div key={item.id}>
                            <h3>
                                {item.name} - £{item.price}
                                <button onClick={() => addToCart(item)}>
                                    Add to Cart
                                </button>
                            </h3>
                        </div>
                    ))}
                </div>
                <div style={{ width: "auto", paddingRight:"20px"}}>
                    <h3>Total Price: £{totalPrice}</h3>
                    <h3>Items in cart:</h3>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.key}>
                                {item.name} - £{item.price}{" "}
                                {item.message !== undefined && item.message}
                                <button onClick={() => removeFromCart(item)}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ width: "auto"}}>
                    <h3>Offer applied:</h3>
                    <ul>
                        {offer.map((offer) => (
                            <li key={offer.key}>
                                {offer.message}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Kiosk;
