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

        // if the number of item A is one less from offer, in this case, every third item A gets a discount, so when the current number of item A +1 is divisible by 3 then the discount will be applied when added.
        if (
            item.id === 1 &&
            (cart.filter((i) => i.id === 1).length + 1) % 3 === 0
        ) {
            newTotal -= 20;
            newItem = { ...item, price: item.price + " special offer : -£20" };
        }
        // if the number of item B is one less from offer, in this case, every secound item B gets a discount, so when the current number of item A +1 is divisible by 2 then the discount will be applied when added.
        if (
            item.id === 2 &&
            (cart.filter((i) => i.id === 2).length + 1) % 2 === 0
        ) {
            newTotal -= 15;
            newItem = { ...item, price: item.price + " special offer : -£15" };
        }

        setCart([...cart, newItem]);
        setTotalPrice(newTotal);
    };
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
                <div>
                    <h3>Total Price: £{totalPrice}</h3>
                    <h3>Items in cart:</h3>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} - £{item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Kiosk;
