import produce from 'immer'
import { reduce, map } from 'lodash'

const initialState = {
    pizzas: {},
    totalPrice: 0,
    itemsCount: 0,
}

const cart = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'ADD_PIZZA_CART':
                if (!draft.pizzas[action.payload.id]) {
                    draft.pizzas[action.payload.id] = []
                }
                draft.pizzas[action.payload.id].push(action.payload)
                break
            case 'PLUS_CART_ITEMS':
                draft.pizzas[action.payload].push(draft.pizzas[action.payload][0])
                break
            case 'MINUS_CART_ITEMS':
                if (draft.pizzas[action.payload].length > 1) {
                    draft.pizzas[action.payload].shift()
                }
                break
            case 'REMOVE_CART_ITEM':
                delete draft.pizzas[action.payload]
                break
            case 'CLEAR_CART':
                draft.pizzas = {}
                break
            default:
        }

        const result = reduce(map(draft.pizzas), (prev, cur) => prev.concat(cur), [])
        draft.totalPrice = result.reduce((total, obj) => obj.price + total, 0)
        draft.itemsCount = result.length
    })
}

export default cart
