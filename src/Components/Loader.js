import React from 'react';
import gif from "../gif/spinner.gif";

const Loader = () => {
    return (
        <div>
            <img src={gif} alt='gifSpinner'/>
        </div>
    );
};

export default Loader;