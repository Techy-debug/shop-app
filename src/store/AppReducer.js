import removeDuplicates from './reducerhelperfunctions/removeDuplicates'


export default (state, action) => {
    switch(action.type){

        case 'ADD_CART':
            let newCart = [...state.cartItem, action.payload]
            return {...state, cartItem: removeDuplicates(newCart, 'id') }

        case 'REMOVE_CART':
            return {...state, cartItem: state.cartItem.filter(v => v.id !== action.payload.id)}

        case 'ORDER_ITEM':
            return { ...state, cartItem: [], orders: [...state.cartItem, ...state.orders]}

        default: 
            return;
    }
}