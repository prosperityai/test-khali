import React, {Component} from 'react';
import './Login.css';
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

        width: '400px',
        background: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        padding: '77px 55px 33px 55px',
        boxShadow: '0 5px 10px 0px rgba(0, 0, 0, 0.1)'
    }
};


class Login extends Component {
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

    handleClick(event) {
        // var apiBaseUrl = "http://localhost:4000/api/";
        // var self = this;
        // var payload={
        //     "email":this.state.username,
        //     "password":this.state.password
        // }
        // axios.post(apiBaseUrl+'login', payload)
        //     .then(function (response) {
        //         console.log(response);
        //         if(response.data.code == 200){
        //             console.log("Register successful");
        //             var uploadScreen=[];
        //             uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
        //             self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        //         }
        //         else if(response.data.code == 204){
        //             console.log("Username password do not match");
        //             alert("username password do not match")
        //         }
        //         else{
        //             console.log("Username does not exists");
        //             alert("Username does not exist");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    render() {

        const {isOpen, closeModal, openRegisterModal} = this.props;

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

                    <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                        <input className="input100" type="text" name="email"/>
                        <span className="focus-input100" data-placeholder="Email"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <span className="btn-show-pass">
                        <i className="zmdi zmdi-eye"/>
                    </span>
                        <input className="input100" type="password" name="pass"/>
                        <span className="focus-input100" data-placeholder="Password"/>
                    </div>

                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn"/>
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>
                    </div>

                    <div className="text-center p-t-80">
                        <span className="txt1">
                            Don’t have an account?
                        </span>
                        <a className="txt2 m-l-4" onClick={openRegisterModal}>
                            Sign Up
                        </a>
                    </div>
                </form>
            </Modal>
        );
    }
}

export default Login;
