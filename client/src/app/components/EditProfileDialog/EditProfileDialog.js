import React from 'react';
import './editProfileDialog.scss';
import CONSTANTS from '../../constants/constants';
import '../../../scss/pages/profile.scss';

export default class EditProfileDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmitAction = this.handleFormSubmitAction.bind(this);
    }

    // Handle inputs changes in the dialog
    handleInputChange(e) {
        this.props.dialogData[e.target.name] = e.target.value;
        this.props.updateInputValue(this.props.dialogData);
    }

    // Handle editProfile form submit
    handleFormSubmitAction(e) {
        e.preventDefault();
        this.props.closeFn();
    }

    render() {
        return (
            <div className="edit-profile-dialog profile">
                <div className="profile__title page-title">
                    {this.props.title}
                </div>
                <div className="profile__body">
                    <div className="profile__body__title">
                        Personal Data
                    </div>
                    <form name="editProfileForm" className="profile__body__data" onSubmit={this.handleFormSubmitAction}>
                        {Object.keys(this.props.dialogData).map((key, i) => {
                            return <div className="info-wrapper" key={i}>
                                <div className="info-wrapper__label">{CONSTANTS.PAGES.PROFILE.FORM_INPUT_LABELS[key.toUpperCase()]}:</div>
                                <div className="info-wrapper__value">
                                    <input className="uk-input" name={key} type="text" value={this.props.dialogData[key]} onChange={this.handleInputChange} placeholder={CONSTANTS.PAGES.PROFILE.FORM_INPUT_LABELS[key.toUpperCase()]} disabled={key === 'customerId'}/>
                                </div>
                            </div>
                        })}
                        <div className="info-wrapper">
                            <div className="info-wrapper__label">
                            </div>
                            <div className="info-wrapper__value">
                                <button className="uk-button uk-button-primary" type="submit">Done</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}