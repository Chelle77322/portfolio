import React from 'react';
import "../stylesheets/Wrapped.css";

function Wrapped ({ children}){
    return(
        <div className = "wrapped">
            {children}
        </div>
    );
}
export default Wrapped;