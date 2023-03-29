import React, { useState } from "react";

const Kiosk = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([]);
    const items = [
        { id: 1, name: "A", price: 50 },
        { id: 2, name: "B", price: 30 },
        { id: 3, name: "C", price: 20 },
        { id: 4, name: "D", price: 15 },
    ];
    const addToCart = (item) => {
        let newTotal = totalPrice + item.price;
        let newItem = item;

        setCart([...cart, newItem]);
        setTotalPrice(newTotal);
    };
    return (
        <div>
            <h1>Kiosk Checkout System</h1>
            <div>
                {items.map((item) => (
                    <div key={item.id}>
                        <h3>
                            {item.name} - £{item.price}
                        </h3>
                        <button onClick={() => addToCart(item)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <h3>Total: ${totalPrice}</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - £{item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Kiosk;
