import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import productData from './productData'


const initialState = {
    products: productData,
    cartItem: [],
    orders: []
}

export const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const AddCartItem = paylod => {
        dispatch({
            type: 'ADD_CART',
            payload: paylod
        })
    }

    const DeleteCartItem = payload => {
        dispatch({
            type: 'REMOVE_CART',
            payload: payload
        })
    }

    const orderItem = () => {
        dispatch({
            type: 'ORDER_ITEM'
        })
    }

    return (
        <GlobalContext.Provider 
        value={{ state, cartItem: state.cartItem, AddCartItem, DeleteCartItem, orderItem, cartItem: state.cartItem }}
         >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider