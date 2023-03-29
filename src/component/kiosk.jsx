import React, { useState } from "react";

const Kiosk = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([]);
    const items = [
        { id: 1, name: "A", price: 50, multibuy: 3, discount: 20 },
        { id: 2, name: "B", price: 30, multibuy: 2, discount: 15 },
        { id: 3, name: "C", price: 20 },
        { id: 4, name: "D", price: 15 },
    ];
    const numOfIteminCart = (id,cart) => {
        return cart.filter((i) => i.id === id).length;
    };
    const addToCart = (item) => {
        let newTotal = totalPrice + item.price;
        let newItem = { ...item, key: null };

        // if the number of item A is one less from offer, in this case, every third item A gets a discount, so when the current number of item A +1 is divisible by 3 then the discount will be applied when added.
        if (item.id === 1 && (numOfIteminCart(item.id,cart) + 1) % 3 === 0) {
            newTotal -= 20;
            newItem = {
                ...item,
                price: item.price - 20,
                message: " (special offer : -£20)",
            };
        }
        // if the number of item B is one less from offer, in this case, every secound item B gets a discount, so when the current number of item A +1 is divisible by 2 then the discount will be applied when added.
        if (item.id === 2 && (numOfIteminCart(item.id,cart) + 1) % 2 === 0) {
            newTotal -= 15;
            newItem = {
                ...item,
                price: item.price - 15,
                message: " (special offer : -£15)",
            };
        }

        setCart([...cart, { ...newItem, key: item.id * Math.random() }]);
        setTotalPrice(newTotal);
    };

    const removeFromCart = (item) => {
        const newCart = cart.filter((i) => i.key !== item.key);
        const newTotal = totalPrice - item.price;
        setCart(newCart);
        setTotalPrice(newTotal);

        if (item.id === 1) {
            if ((numOfIteminCart(item.id,newCart) + 1) % 3 === 0) {
                updateLastDiscountedItem(20, newCart, item.id);
            } else if (
                numOfIteminCart(item.id,newCart) % 3 === 0 &&
                numOfIteminCart(item.id,newCart) > 2
            ) {
                console.log(numOfIteminCart(item.id,newCart) > 2)
                updateLastItemToDiscounted(20, newCart, item.id);
            }
        } else if (
            item.id === 2 &&
            (newCart.filter((i) => i.id === 2).length + 1) % 2 === 0
        ) {
            updateLastDiscountedItem(15, newCart, item.id);
        }
    };

    const updateLastDiscountedItem = (discount, newCart, id) => {
        console.log(newCart);
        const index = newCart
            .slice()
            .reverse()
            .findIndex((item) => item.message !== undefined && item.id === id);
        if (index !== -1) {
            const lastIndex = newCart.length - 1 - index;
            const newCartItems = [...newCart];
            delete newCartItems[lastIndex].message;
            newCartItems[lastIndex].price += discount;
            const newTotal = totalPrice - (newCartItems[lastIndex].price - discount);
            setCart(newCartItems);
            setTotalPrice(newTotal);
        }
    };

    const updateLastItemToDiscounted = (discount, newCart, id) => {
        const index = newCart
            .slice()
            .reverse()
            .findIndex((item) => item.message === undefined && item.id === id);
        if (index !== -1) {
            const lastIndex = newCart.length - 1 - index;
            const newCartItems = [...newCart];
            newCartItems[lastIndex].message = ` (special offer : -£${discount})`;
            newCartItems[lastIndex].price -= discount;
            const newTotal = totalPrice - newCartItems[lastIndex].price - discount;
            setCart(newCartItems);
            setTotalPrice(newTotal);
        }
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
            </div>
        </div>
    );
};

export default Kiosk;
