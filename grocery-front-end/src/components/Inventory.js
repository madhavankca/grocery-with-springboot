import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const [items, setItems] = useState([]);
    const [itemQuantities, setItemQuantities] = useState({});
    const [totalPrices, setTotalPrices] = useState({});

    const navigate = useNavigate();


    const plus = async (item, quantity) => {
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item.id]: (prevQuantities[item.id] || 0) + 1,
        }));
        updateTotalPrice(item, (itemQuantities[item.id] || 0) + 1);


        const requestData = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity,
            totalPrice: totalPrices[item.id] || 0,
        };

        try {
            const response = await axios.post('http://localhost:8080/storeTheItems', requestData);
        } catch (error) {
            console.error('Error adding items to the db', error);
        }
    };

    const updateTotalPrice = (item, quantity) => {
        const totalPrice = item.price * quantity;
        setTotalPrices((prevTotalPrices) => ({
            ...prevTotalPrices,
            [item.id]: totalPrice,
        }));
    };
    const goToCart = () => {
        navigate('/cart-page')
    }

    useEffect(() => {
        axios.get('http://localhost:8080/getAllItems')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Could not fetch inventory', error);
            });
    }, []);
    return (
        <div>
            <h2>Inventory Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price/Kg</th>
                        <th>Add here</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => plus(item, itemQuantities[item.id] || 0)}>+</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p><button onClick={goToCart}>Go To Cart</button></p>

        </div>
    );
};
export default Inventory;
