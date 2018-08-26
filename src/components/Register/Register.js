import React, {Component} from 'react';
import './Register.css';
import '../../Utils/Util.css';
import {NavLink} from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',

        width: '480px',
        background: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        padding: '77px 55px 33px 55px',
        boxShadow: '0 5px 10px 0px rgba(0, 0, 0, 0.1)'
    }
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render() {

        const {isOpen, closeModal, openLoginModal} = this.props;

        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}>

                <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-26">
                                Welcome
                            </span>
                    {/*<span className="login100-form-title p-b-48">*/}
                    {/*<i className="zmdi zmdi-font"/>*/}
                    {/*</span>*/}

                    <div className="wrap-input100 validate-input" data-validate="Enter you first name">
                        <input className="input100" type="text" name="first_name"/>
                        <span className="focus-input100" data-placeholder="First Name"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Enter you last name">
                        <input className="input100" type="text" name="last_name"/>
                        <span className="focus-input100" data-placeholder="Last Name"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                        <input className="input100" type="text" name="email"/>
                        <span className="focus-input100" data-placeholder="Email"/>
                    </div>


                    <div className="wrap-input100 validate-input" data-validate="Enter your phone number">
                        <input className="input100" type="text" name="phone_number"/>
                        <span className="focus-input100" data-placeholder="Phone Number"/>
                    </div>

                    <div className="wrap-radio-input100">
                        <span className="m-l-8">Gender</span>
                        <input className="m-l-50" type="radio" name="gender" value="male"/> Male
                        <input className="m-l-20" type="radio" name="gender" value="female"/> Female
                    </div>


                    <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"/>
                                </span>
                        <input className="input100" type="password" name="pass"/>
                        <span className="focus-input100" data-placeholder="Password"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Confirm password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"/>
                                </span>
                        <input className="input100" type="password" name="confirm_pass"/>
                        <span className="focus-input100" data-placeholder="Confirm Password"/>
                    </div>

                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn"/>
                            <button className="login100-form-btn">
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="text-center p-t-40">
                        <span className="txt1">
                            Do you have already account?
                        </span>

                        <a className="txt2 m-l-4" onClick={openLoginModal}>
                            Sign In
                        </a>
                    </div>
                </form>

            </Modal>
        );
    }
}

export default Register;
