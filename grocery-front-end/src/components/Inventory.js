import React, { useEffect, useState } from 'react';
    import axios from 'axios';
import { Route , useNavigate, useHistory} from 'react-router-dom';

const Inventory = () => {
    const [items, setItems] = useState([]);
    const [itemQuantities, setItemQuantities] = useState({});
    const [totalPrices, setTotalPrices] = useState({});
    const [disabledButton, setDisabledButton] = useState({});
    const navigate = useNavigate();
    // const history = useHistory();


    const plus = async(item, quantity) => {
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item.id]: (prevQuantities[item.id] || 0) + 1,
        }));
        updateTotalPrice(item, (itemQuantities[item.id] || 0) + 1);

        ///////
        const requestData = {
            id:item.id,
            name: item.name,
            pricePerQuantity: item.price,
            quantity: quantity,
            totalPrice: totalPrices[item.id] || 0,
        };

        try {
            const response = await axios.post('http://localhost:8080/storeTheItems', requestData);
            console.log('Item added to cart:', response.data);
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

    const addToCart = async (item, quantity) => {
        setDisabledButton((prevDisabledButton) => ({
            ...prevDisabledButton,
            [item.id]: true,
        }));
    };

    const goToCart = () => {
        navigate('/cart-page')
    }

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
    return (
        <div>
            <h2>Inventory Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price/Kg</th>
                        <th>Add here</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => plus(item, itemQuantities[item.id] || 0)}>+</button></td>


                            {/* <td>{itemQuantities[item.id] || 0}</td>
                            <td>
                                <button
                                    onClick={() => addToCart(item, itemQuantities[item.id])}
                                    disabled={disabledButton[item.id]}
                                >
                                    Add To Cart
                                </button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p><button onClick={goToCart}>Go To Cart</button></p>

        </div>
    );
};
export default Inventory;
