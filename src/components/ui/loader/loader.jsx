/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './loader.css';

import loaderGif from '../../../assets/loader.gif';

const loader = (props) => {
  return (
    <div className="wait-loader flex-column">
      <img src={loaderGif} alt="Loader" width="66" height="40"/>
      <span>{props.children}</span>
    </div>
  );
};

export default loader;