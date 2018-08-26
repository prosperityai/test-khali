import React, {Component} from 'react';
import withWidth, {isWidthUp, isWidthDown} from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import '../../Fonts.css';

class Feature extends Component {
    render() {
        /* Responsive for tablet devices */
        if (isWidthDown('md', this.props.width) && isWidthUp('sm', this.props.width)) {
            return (
                <div className="feature-view">
                    <div className="wrap-middle container">
                        <Grid container spacing={24}>
                            <Grid className="feature-item" item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <img className="feature-avatar" src={require('../../assets/sprint.svg')}></img>
                                <p className="feature-title">
                                    <span className="feature-title-tablet">
                                    1. Purchase your training
                                    </span>
                                </p>
                                <p className="feature-info">
                                    <span className="feature-info-tablet">
                                        Pickup a Personal training or a group training
                                        and play online. You can prepay for packages
                                        of training in advance
                                    </span>
                                </p>
                            </Grid>
                            <Grid className="feature-item" item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <img className="feature-avatar" src={require('../../assets/schedule.svg')}></img>
                                <p className="feature-title">
                                    <span className="feature-title-tablet">
                                        2. Schedule Convenient Time
                                    </span>
                                </p>
                                <p className="feature-info">
                                    <span className="feature-info-tablet">
                                        Login to check calendar availability and schedule your workouts.
                                        It's very easy to manage your bookings!
                                    </span>
                                </p>
                            </Grid>
                            <Grid className="feature-item" item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <img className="feature-avatar" src={require('../../assets/training.svg')}></img>
                                <p className="feature-title">
                                    <span className="feature-title-tablet">
                                        3. Start Training
                                    </span>
                                </p>
                                <p className="feature-info" style={{padding: '15px 0'}}>
                                    <span className="feature-info-tablet">
                                        Get a kick-ass workout experience with a US-certified trainer.
                                    </span>
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
        } /* Responsive for mobile devices */ else if (isWidthDown('sm', this.props.width)) {
            return (
                <div className="feature-view" style={{height: '55em'}}>
                    <div className="wrap-middle container">
                        <Grid container spacing={24}>
                            <Grid className="feature-item" item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <img className="feature-avatar" src={require('../../assets/sprint.svg')}></img>
                                <p className="feature-title">1. Purchase your training</p>
                                <p className="feature-info">
                                    Pickup a Personal training or a group training
                                    and play online. You can prepay for packages
                                    of training in advance</p>
                            </Grid>
                            <Grid className="feature-item" item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <img className="feature-avatar" src={require('../../assets/schedule.svg')}></img>
                                <p className="feature-title">2. Schedule Convenient Time</p>
                                <p className="feature-info">
                                    Login to check calendar availability and schedule your workouts.
                                    It's very easy to manage your bookings!
                                </p>
                            </Grid>
                            <Grid className="feature-item" item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <img className="feature-avatar" src={require('../../assets/training.svg')}></img>
                                <p className="feature-title">3. Start Training</p>
                                <p className="feature-info" style={{padding: '8px 0'}}>
                                    Get a kick-ass workout experience with a US-certified trainer.
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
        } /* Responsive for Desktop devices */ else if (isWidthUp('md', this.props.width)) {
            return (
                <div className="feature-view">
                    <div className="wrap-middle container">
                        <Grid container spacing={24}>
                            <Grid className="feature-item" item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <img className="feature-avatar" src={require('../../assets/sprint.svg')}></img>
                                <p className="feature-title">1. Purchase your training</p>
                                <p className="feature-info tabletView">
                                    Pickup a Personal training or a group training
                                    and play online. You can prepay for packages
                                    of training in advance</p>
                            </Grid>
                            <Grid className="feature-item" item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <img className="feature-avatar" src={require('../../assets/schedule.svg')}></img>
                                <p className="feature-title">2. Schedule Convenient Time</p>
                                <p className="feature-info">
                                    Login to check calendar availability and schedule your workouts.
                                    It's very easy to manage your bookings!
                                </p>
                            </Grid>
                            <Grid className="feature-item" item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <img className="feature-avatar" src={require('../../assets/training.svg')}></img>
                                <p className="feature-title">3. Start Training</p>
                                <p className="feature-info" style={{padding: '8px 0'}}>
                                    Get a kick-ass workout experience with a US-certified trainer.
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
        }
    }
}

export default withWidth()(Feature);
