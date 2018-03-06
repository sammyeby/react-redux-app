import React from 'react';
import { connect } from 'react-redux';
import '../../scss/pages/profile.scss';
import {updateCurrentCustomer} from "../../redux/actions/customer-actions";
import CONSTANTS from '../../app/constants/constants';
import Modal from '../components/Modal/Modal';
import EditProfileDialog from "../components/EditProfileDialog/EditProfileDialog";

class Profile extends React.Component{
    constructor(props) {
        super(props);

        // Hold current customer data in Page local state before editing
        this.state = {
            isOpen: false,
            dialogData: this.props.customer.customerId ? this.props.customer : {}
        };

        this.handleDialogInputChange = this.handleDialogInputChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCustomerUpdateAfterEditing = this.handleCustomerUpdateAfterEditing.bind(this);
    }

    // Data won't be loaded when page is reloaded
    // So we redirect customers back to login page
    redirectToLogin() {
        this.props.history.push('/login');
    }

    componentDidMount() {
        // Check if no customer is logged in
        if (this.props.customer.noExists) {
            this.redirectToLogin();
        }
    }

    // Call back function to update the state of the profile page when the customer is editing their data in the dialog.
    // It gives live update as the customer types
    handleDialogInputChange(dialogData) {
        this.setState({
            dialogData: dialogData
        });
    }

    // After editing and clicking 'Done', we store the edited data in the store
    handleCustomerUpdateAfterEditing() {
        this.props.onUpdateCurrentCustomer(this.state.dialogData);
        this.toggleModal();
    }

    // Toggle modal state
    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="content-outer full-height">
                <div className="content-inner">
                    <div className="profile">
                        <div className="profile__title page-title">
                            Profile
                        </div>
                        <div className="profile__body">
                            <div className="profile__body__title">
                                Personal Data
                            </div>
                            <div className="profile__body__data">
                                {Object.keys(this.props.customer).map((key, i) => {
                                    return <div className="info-wrapper" key={i}>
                                        <div className="info-wrapper__label">{CONSTANTS.PAGES.PROFILE.FORM_INPUT_LABELS[key.toUpperCase()]}:</div>
                                        <div className="info-wrapper__value">{this.props.customer[key]}</div>
                                    </div>
                                })}
                            </div>
                            <div className="profile__body__btn">
                                <button className="uk-button uk-button-primary" onClick={this.toggleModal}>Update Data</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal onClose={this.toggleModal} show={this.state.isOpen}>
                    <EditProfileDialog closeFn={this.handleCustomerUpdateAfterEditing}
                                       updateInputValue={this.handleDialogInputChange}
                                   dialogData={this.state.dialogData} title={'Update Profile'}/>
                </Modal>
            </div>
        );
    }
}

// Map the state that we need from our appStore to the props of the component for display
const mapStateToProps = state => ({
    customer: state.customer,
    transactions: state.transactions
});

// Map actions that we need to the component props
const mapActionsToProps = {
    onUpdateCurrentCustomer: updateCurrentCustomer
};

// Connect appStore to component and export
export default connect(mapStateToProps, mapActionsToProps)(Profile);