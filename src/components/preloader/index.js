import React from 'react';
import "./preloader.css";

export default function preloader() {
    return (
        <div className="preloader-section">
            <div className="preloader-sec">
              <div className="wrapper">
                {
                  new Array(6).fill("").map((_,i)=><div className="loader" key={i}><div className="dot"></div></div>
                  )
                } </div>
              <div className="text">Please wait</div>
            </div>
          </div>
    )
}

