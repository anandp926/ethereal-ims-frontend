import React from 'react';
import './fullscreen_loader.css';
import loaderGif from '../../../assets/loader.gif';

const FullScreenLoader = () => {
    return(
        <div className="fullscreen-loading">
            <img src={loaderGif} alt="Loader" width="110" height="88"/>
        </div>
    )
}

export default FullScreenLoader