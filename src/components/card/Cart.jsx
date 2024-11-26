import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addProduct, removeProduct } from '../../redux/cartSlice';
import './Cart.css';


function Cart () {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const [productName, setProductName] = useState('');

    const handleAddProduct = () => {
        if (productName.trim()) {
            dispatch(addProduct(productName));
            setProductName('');
        }
    };

    return (
        <div className="cart-cont">
            <div className="search">
                <input
                    type="text"
                    placeholder="Имя нового продукта..."
                    value={productName}
                    onChange={e => setProductName(e.target.value)}
                />
                <button onClick={handleAddProduct} className="addBtn">
                    Добавить
                </button>
            </div>
            <div className="productCart">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <div>{item.title}</div>
                        <div className="counter">
                            <button
                                onClick={() => dispatch(decrement(item.id))}
                                className="cart-btn"
                            >
                                -
                            </button>
                            <span className="cart-count">{item.count}</span>
                            <button
                                onClick={() => dispatch(increment(item.id))}
                                className="cart-btn"
                            >
                                +
                            </button>
                        </div>
                        {item.count === 0 && (
                            <button
                                onClick={() => dispatch(removeProduct(item.id))}
                                className="deleteProduct"
                            >
                                Удалить
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Cart;