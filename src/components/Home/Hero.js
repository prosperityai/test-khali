import React, {Component} from 'react';
import withWidth, {isWidthUp, isWidthDown} from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../../Fonts.css';
import {NavLink} from "react-router-dom";

class Hero extends Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {

        const {openLoginModal, openRegisterModal} = this.props;

        const sideList = (
            <div className="drawer">
                <div className="drawer-item">
                    {/*<NavLink exact to="/register" style={{textDecoration:'none'}}>*/}
                    <h2 onClick={openRegisterModal}>Register</h2>
                    {/*</NavLink>*/}
                </div>
                <div className="drawer-item">
                    {/*<NavLink exact to="/login" style={{textDecoration:'none'}}>*/}
                    <h2 onClick={openLoginModal}>Login</h2>
                    {/*</NavLink>*/}
                </div>
            </div>
        );

        /* Responsive for tablet devices */
        if (isWidthDown('md', this.props.width) && isWidthUp('sm', this.props.width)) {
            return (
                <div className="hero" style={{height: '42em'}}>
                    <div className="container navbar">
                        <img className="nav-logo" src={require('../../assets/logo.png')}/>
                        <div className="nav-items">
                            <ul>
                                <li>
                                    {/*<NavLink exact to="/login" style={{textDecoration:'none'}}>*/}
                                    <Button variant="outlined" style={{color: '#FFF', borderColor: '#FFF', borderRadius: 0}}
                                            onClick={openLoginModal}>
                                        Login
                                    </Button>
                                    {/*</NavLink>*/}
                                </li>
                                <li>
                                    {/*<NavLink exact to="/register" style={{textDecoration:'none'}}>*/}
                                    <Button style={{color: '#FFF'}} onClick={openRegisterModal}>
                                        Register
                                    </Button>
                                    {/*</NavLink>*/}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container hero-view">
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={7} md={7} lg={7} xl={7} style={{paddingTop: '90px'}}>
                                <span className="hero-text" style={{fontFamily: 'GothamBlack', fontSize: '3em'}}>
                                    LET'S<br/>
                                    GET<br/>
                                    MOVING,<br/>
                                    <span style={{color: '#00bff3'}}>WARSAW!</span>
                                </span>
                                <div style={{margin: '50px 0'}}>
                                    <input className="hero-input" placeholder="Book your training"/>
                                    <Button variant="contained" className="hero-button">Join a Group</Button>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                                <img className="hero-image" style={{height: '550px', width: 'auto'}}
                                     src={require('../../assets/khalil-transparent.png')}/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
        } /* Responsive for mobile devices */ else if (isWidthDown('sm', this.props.width)) {
            return (
                <div>
                    <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('right', false)}
                            onKeyDown={this.toggleDrawer('right', false)}>
                            {sideList}
                        </div>
                    </Drawer>
                    <div className="hero" style={{height: '61em'}}>
                        <div className="container navbar">
                            <img className="nav-logo" style={{height: '17px'}}
                                 src={require('../../assets/logo.png')}/>
                            <div className="nav-items">
                                <IconButton style={{color: '#FFF', marginTop: '-10px'}} aria-label="Menu"
                                            onClick={this.toggleDrawer('right', true)}>
                                    <MenuIcon/>
                                </IconButton>
                            </div>
                        </div>
                        <div className="container hero-view">
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={7} md={7} lg={7} xl={7} style={{paddingTop: '20px'}}>
                                    <span className="hero-text" style={{fontFamily: 'GothamBlack', fontSize: '3em'}}>
                                    LET'S<br/>
                                    GET<br/>
                                    MOVING,<br/>
                                    <span style={{color: '#00bff3'}}>WARSAW!</span>
                                    </span>
                                    <div style={{margin: '50px 0'}}>
                                        <input className="hero-input" style={{display: 'block', margin: '10px 0'}}
                                               placeholder="Book your training"/>
                                        <Button variant="contained"
                                                style={{display: 'block', margin: '10px 0', width: '220px'}}
                                                className="hero-button">Join a Group</Button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                                    <img className="hero-image"
                                         style={{height: '40%', display: 'block', margin: 'auto'}}
                                         src={require('../../assets/khalil-transparent.png')}/>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            )
        } /* Responsive for Desktop devices */ else if (isWidthUp('md', this.props.width)) {
            return (
                <div className="hero">
                    <div className="container navbar">
                        <img className="nav-logo" src={require('../../assets/logo.png')}/>
                        <div className="nav-items">
                            <ul>
                                <li>
                                    {/*<NavLink exact to="/login" style={{textDecoration:'none'}}>*/}
                                    <Button variant="outlined" style={{color: '#FFF', borderColor: '#FFF', borderRadius: 0}}
                                            onClick={openLoginModal}>
                                        Login
                                    </Button>
                                    {/*</NavLink>*/}
                                </li>
                                <li>
                                    {/*<NavLink exact to="/register" style={{textDecoration: 'none'}}>*/}
                                    <Button style={{color: '#FFF'}} onClick={openRegisterModal}>
                                        Register
                                    </Button>
                                    {/*</NavLink>*/}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container hero-view">
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={7} md={7} lg={7} xl={7} style={{paddingTop: '70px'}}>
                                <div>
                                    <span className="hero-text" style={{fontFamily: 'GothamBlack'}}>
                                        LET'S<br/>
                                        GET<br/>
                                        MOVING,<br/>
                                        <span style={{color: '#00bff3'}}>WARSAW!</span>
                                    </span>
                                </div>
                                <div style={{margin: '50px 0'}}>
                                    <input className="hero-input" placeholder="Book your training"/>
                                    <Button variant="contained" className="hero-button">Join a Group</Button>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                                <img className="hero-image" style={{height: '550px', width: 'auto'}}
                                     src={require('../../assets/khalil-transparent.png')}/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
        }
    }
}

export default withWidth()(Hero);
