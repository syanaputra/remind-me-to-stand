import React from 'react';
import '../../../styles/scss/heading.scss';

const Heading = (props) => {
    const { children } = props;

    return (
        <div className="heading">{children}</div>
    );
}

export default Heading;