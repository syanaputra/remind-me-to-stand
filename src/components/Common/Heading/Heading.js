import React from 'react';
import '../../../styles/scss/typography.scss';

const Heading = (props) => {
    const { children } = props;

    return (
        <div className="heading heading--lv4">{children}</div>
    );
}

export default Heading;