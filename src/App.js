import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { Button, Header } from './components'
import { Cart, Home } from './pages'
import './scss/app.scss'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

function App() {
    const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
      }
`
    const darkTheme = {
        body: '#E2E2E2',
    }
    const lightTheme = {
        body: '#363537',
    }
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Button onClick={toggleTheme}>Toggle theme</Button>
            <GlobalStyle />

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
        </ThemeProvider>
    )
}

export default App
