import axios from 'axios'

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios
        .get(
            `https://613b71a2110e000017a4561c.mockapi.io/pizzas?${
                category !== null ? `category=${category}` : ''
            }&sortBy=${sortBy}&order=asc`
        )
        .then(({ data }) => dispatch(setPizzas(data)))
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})

export const setLoaded = (val) => ({
    type: 'SET_LOADED',
    val,
})
