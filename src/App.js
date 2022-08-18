import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import "./App.css"
import Header from './components/Header'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search/:keyword' element={<Search />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </React.Fragment>
    )
}

export default App
