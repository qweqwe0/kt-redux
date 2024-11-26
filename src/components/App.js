import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Cart from '../components/card/Cart.jsx';

function App() {
    return (
        <Provider store={store}>
            <Cart />
        </Provider>
    );
}

export default App;
