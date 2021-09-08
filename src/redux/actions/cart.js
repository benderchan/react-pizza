const ADD_PIZZA_CART = 'ADD_PIZZA_CART'
const CLEAR_CART = 'CLEAR_CART'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const PLUS_CART_ITEMS = 'PLUS_CART_ITEMS'
const MINUS_CART_ITEMS = 'MINUS_CART_ITEMS'

export const addPizzaToCart = (pizza) => ({
    type: ADD_PIZZA_CART,
    payload: pizza,
})

export const clearCart = () => ({
    type: CLEAR_CART,
})
export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id,
})
export const plusItem = (id) => ({
    type: PLUS_CART_ITEMS,
    payload: id,
})
export const minusItem = (id) => ({
    type: MINUS_CART_ITEMS,
    payload: id,
})
