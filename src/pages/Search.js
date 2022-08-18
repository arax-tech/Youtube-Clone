import React from 'react'
import Sidebar from '../components/Sidebar'
import MetaData from '../components/MetaData'
import Result from '../components/Result'
import { useParams } from 'react-router-dom'


const Search = () => {
    const params = useParams();
    const keyword = params.keyword.replace(/\+/gi, ' ');
    return (
        <React.Fragment>
            <MetaData title={`${keyword} - Google Search`} />
            <div className="home___container">
                <Sidebar />
                <Result />

            </div>
        </React.Fragment>
    )
}

export default Search
