import React from 'react';
import classnames from 'classnames';
import '../../../styles/scss/side-modal.scss';
import '../../../styles/scss/typography.scss';

const SideModal = (props) => {
    const { Heading, Body, active = false, onCloseClick } = props;

    return (
        <div className={classnames('side-modal', active && 'side-modal--active')}>
            <button type="button" className="side-modal__close" onClick={onCloseClick}>×</button>
            <div className="side-modal__head">
                {Heading}
            </div>
            <div className="side-modal__body">
                {Body}
            </div>
        </div>
    );
}

export default SideModal;