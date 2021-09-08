import React from 'react'
import { Route } from 'react-router-dom'
import { Header } from './components'
import { Cart, Home } from './pages'
import './scss/app.scss'

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/cart' exact>
                    <Cart />
                </Route>
            </div>
        </div>
    )
}

export default App
