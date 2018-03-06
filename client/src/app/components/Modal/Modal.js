import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

export default class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="modal-wrapper">
                <div className="modal">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};