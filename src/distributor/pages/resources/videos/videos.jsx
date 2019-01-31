import React, { Component } from 'react'
import {videoLink} from './data'
import './videos.css'

class Videos extends Component {
    render() {
        return(
            <div className="container flex-column">
                <div className="video-list">
                    {
                        videoLink.map((video) => (
                            <div className='videoCard' key={video.id}>
                                <h1 className="videoHeading">{video.title}</h1>
                                <p className="videoDescription">{video.description}</p>
                                <div className="videoArea">
                                    <iframe 
                                        className='videoFrame'
                                        key={video.id}
                                        width="720" 
                                        height="405" 
                                        frameBorder="0" 
                                        allow="autoplay; encrypted-media" 
                                        src={video.link}
                                        allowFullScreen
                                    >
                                    </iframe>
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
                
            </div>
        )
    }
}


export default Videos