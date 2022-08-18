import React from 'react'
import MetaData from '../components/MetaData'
import Recommended from '../components/Recommended'
import Sidebar from '../components/Sidebar'


const Home = () => {
    return (
        <React.Fragment>
            <MetaData title="YouTube" />
            <div className="home___container">
                <Sidebar />
                <Recommended />
            </div>
        </React.Fragment>
    )
}

export default Home
