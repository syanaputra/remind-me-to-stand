import React from 'react';
import '../../../styles/scss/made-by.scss';

const MadeBy = (props) => {
    return (
        <div className="madeby">
            <div className="madeby__subtext">Made with love in</div>
            <a href="https://syanaputra.com" className="madeby__text">
                melbourne
            </a>
        </div>
    );
}

export default MadeBy;