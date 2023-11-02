import React, { createContext, useContext, useReducer } from 'react'


// create 2 context, one for state of cart and another for to update the state of cart
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// create reducer to change the state of cart, all functionalities are defined in the reducer like ADD, REMOVE, etc.
// take 2 params, one current state and other takes what action is to be performed
const reducer = (state, action) => {
    switch (action.type) {
        // To add data to cart which will be used to display on cart page
        case "ADD": return [...state, { id: action.id, name: action.name, rating: action.rating, price: action.price, description: action.description, quantity: action.quantity }]
        case "REMOVE":
            // Filter out the item with the specified ID to remove it from the cart
            return state.filter(item => item.id !== action.id);

        case "DROP":
            return [];
            
        default: console.log('Some error occured');
    }
}

// pass the children as prop, children can be whole component
export const CartProvider = ({ children }) => {

    // create useReducer 
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

// export created contexts to use globally 
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
