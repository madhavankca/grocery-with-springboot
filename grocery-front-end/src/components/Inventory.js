
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getAllItems')
            .then(response => {
                console.log('Printing inventory data', response.data);
                setItems(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    }, []);

    const addToCart = (itemId) => {
        axios.post('http://localhost:8080/addToCart', { itemId })
            .then(response => {
                alert('Item added to the Cart:', response.data);
                // You can update the state or take any other necessary actions
            })
            .catch(error => {
                console.error('Error adding item to the cart:', error);
            });
    };


    return (
        <div>
            <h2>Inventory Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.itemName}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => addToCart(item.id)}>Add to Cart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;
