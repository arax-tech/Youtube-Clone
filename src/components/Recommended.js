import React from 'react'
import Video from './Video'

const Recommended = () => {
    return (
        <div className="recommended">

            <div className="recommended__tags">
                <div className="recommended__tag recommended__tag__active">
                    <h4 style={{ padding: "10px 20px" }}>All</h4>
                </div>
                <div className="recommended__tag">
                    <h4>React Routers</h4>
                </div>
                <div className="recommended__tag">
                    <h4>HTML</h4>
                </div>
                <div className="recommended__tag">
                    <h4>Music</h4>
                </div>
                <div className="recommended__tag">
                    <h4>Android</h4>
                </div>
                <div className="recommended__tag">
                    <h4>Data Structure</h4>
                </div>

                <div className="recommended__tag">
                    <h4>Pakistani Daramas</h4>
                </div>

                <div className="recommended__tag">
                    <h4>Thoughts</h4>
                </div>
                <div className="recommended__tag">
                    <h4>Scene</h4>
                </div>
                <div className="recommended__tag">
                    <h4>Editing Structure</h4>
                </div>

            </div>


            <div className='recommended__videos'>
                <Video title="Become a Web Developer in 10 inutes" image="/images/thumbnail.jpg" channel="Arham Khan" channelImage="/images/arham.jpeg" views="2.3M Views" timestamp="3 days ago" />
                <Video title="Become a Web Developer in 10 inutes" image="/images/thumbnail.jpg" channel="Arham Khan" channelImage="/images/arham.jpeg" views="2.3M Views" timestamp="3 days ago" />
                <Video title="Become a Web Developer in 10 inutes" image="/images/thumbnail.jpg" channel="Arham Khan" channelImage="/images/arham.jpeg" views="2.3M Views" timestamp="3 days ago" />
                <Video title="Become a Web Developer in 10 inutes" image="/images/thumbnail.jpg" channel="Arham Khan" channelImage="/images/arham.jpeg" views="2.3M Views" timestamp="3 days ago" />
                <Video title="Become a Web Developer in 10 inutes" image="/images/thumbnail.jpg" channel="Arham Khan" channelImage="/images/arham.jpeg" views="2.3M Views" timestamp="3 days ago" />


            </div>

        </div >
    )
}

export default Recommended
