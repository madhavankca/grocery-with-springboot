
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalBill,setTotalBill] = useState(0);

    const calculateTotalBill = (cartItems) => {
        const total = cartItems.reduce((sum, cartItem) => sum + cartItem.totalPrice,0);
        setTotalBill(total);
    }

    useEffect(() => {
        axios.get('http://localhost:8080/getCartItems')
            .then(response => {
                setCartItems(response.data);
                calculateTotalBill(response.data);
            })
            .catch(error => {
                console.error('Error fetching cart items', error);
            });
    }, []);


    return (
        <div>
            <h2>Cart Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price/Kg</th>
                        <th>Quantity(Kg)</th>
                        <th>Total price of this Item</th>

                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(cartItem => (
                        <tr key={cartItem.id}>
                            <td>{cartItem.name}</td>
                            <td>{cartItem.pricePerQuantity}</td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.totalPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>Total : {totalBill}</div>
        </div>
    );
};

export default CartPage;
