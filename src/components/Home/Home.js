import React, {Component} from 'react';
import Hero from './Hero';
import Feature from './Feature';
import Updates from './Updates';
import './Home.css';
import Login from "../Login/Login";
import Register from "../Register/Register";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginModalOpen: false,
            isRegisterModalOpen: false
        }
    }

    openLoginModal = () => {
        this.setState({
            isLoginModalOpen: true,
            isRegisterModalOpen: false
        })
    };

    closeLoginModal = () => {
        this.setState({
            isLoginModalOpen: false
        })
    };

    openRegisterModal = () => {
        this.setState({
            isLoginModalOpen: false,
            isRegisterModalOpen: true
        })
    };

    closeRegisterModal = () => {
        this.setState({
            isRegisterModalOpen: false
        })
    };

    render() {
        return (
            <div>
                <Hero openLoginModal={this.openLoginModal} openRegisterModal={this.openRegisterModal}/>
                <Feature/>
                <Updates/>
                <Login
                    isOpen={this.state.isLoginModalOpen}
                    closeModal={this.closeLoginModal}
                    openRegisterModal={this.openRegisterModal}/>
                <Register
                    isOpen={this.state.isRegisterModalOpen}
                    closeModal={this.closeRegisterModal}
                    openLoginModal={this.openLoginModal}/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
