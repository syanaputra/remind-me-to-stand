import React from 'react';
import classnames from 'classnames';
import '../../../styles/scss/pill.scss';

const Pill = (props) => {
    const { active, disabled, text, onClick } = props;

    return (
        <button type="button" onClick={onClick} className={classnames('pill', active && 'pill--active', disabled && 'pill--disabled')}>
            <div className="pill__text">
                {text}
            </div>
        </button>
    );
}

export default Pill;