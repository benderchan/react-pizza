import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Categories, SortPopup, Pizza, PizzaLoader } from '../components'
import { addPizzaToCart } from '../redux/actions/cart'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const sortItems = [
    { name: 'popular', type: 'popular' },
    { name: 'price', type: 'price' },
    { name: 'name', type: 'name' },
]

const categories = ['Meat', 'Vegan', 'Grill', 'Spicy', 'Closed']

const Home = () => {
    const { items, isLoaded, sortBy, category, cartItems } = useSelector((state) => {
        return {
            items: state.pizzas.items,
            isLoaded: state.pizzas.isLoaded,
            sortBy: state.filters.sortBy,
            category: state.filters.category,
            cartItems: state.cart.pizzas,
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy, dispatch])

    const onSelectCategory = (index) => {
        dispatch(setCategory(index))
    }
    const onSelectSort = (type) => {
        dispatch(setSortBy(type))
    }

    const dispatchPizzaToCart = (pizza) => {
        dispatch(addPizzaToCart(pizza))
    }

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories onCategoryClick={onSelectCategory} categories={categories} activeCategory={category} />
                <SortPopup sortBy={sortBy} sortItems={sortItems} onSortClick={(index) => onSelectSort(index)} />
            </div>
            <h2 className='content__title'>All pizzas</h2>
            <div className='content__items'>
                {isLoaded
                    ? items.map((pizza) => (
                          <Pizza
                              dispatch={dispatchPizzaToCart}
                              {...pizza}
                              key={pizza.id}
                              isLoading={true}
                              cartItemsCount={cartItems[pizza.id] && cartItems[pizza.id].length}
                          />
                      ))
                    : Array(12)
                          .fill(0)
                          .map((_, index) => <PizzaLoader key={index} />)}
            </div>
        </div>
    )
}

export default Home
