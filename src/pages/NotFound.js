import React from 'react'
import MetaData from '../components/MetaData'
const NotFound = () => {
    return (
        <React.Fragment>
            <MetaData title="404 Not Found" />
            <div className="home___container">
                <div className="not__found__container">
                    <img src="/images/monkey.png" alt="" />
                    <p>
                        his page isn't available. Sorry about that. <br />
                        Try searching for something else.
                    </p>
                    <h4>Page Not Found...</h4>
                </div>

            </div>
        </React.Fragment>
    )
}

export default NotFound
