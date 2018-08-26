import React, { Component } from 'react';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RunIcon from '@material-ui/icons/DirectionsRun';
import '../../Fonts.css';

class Updates extends Component {
  render () {
    return (
      <div className="updates-view">
          <div className="container">
            <Grid container spacing={24}>
              <Grid className="grid-item" item xs={12} sm={6} md={6} lg={6} xl={6}>
                <h2 className="updates-grid-title">Top Workout Sessions</h2>
                <p className="updates-grid-info">
                  <b>TrainersDigital</b> is an online
                  marketplace for the best workout sessions,
                  video tutorials and guides.
                  <b style={{cursor: 'pointer'}}>Check it here</b>
                </p>
                <hr />
                
                <Grid className="updates-sexiest-workouts" container spacing={24}>
                  <Grid style={{paddingLeft: 0}} item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img className="updates-sexiest-workouts-img" src={require('../../assets/pexels-photo-414029.jpeg')}></img>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img className="updates-sexiest-workouts-img" src={require('../../assets/pexels-photo-866027.jpeg')}></img>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img className="updates-sexiest-workouts-img" src={require('../../assets/pexels-photo-927437.jpeg')}></img>
                  </Grid>
                </Grid>
                <h4 className="updates-grid-item-title">THE SEXIEST WORKOUTS EVER</h4>
                <p className="updates-grid-item-info">
                  5 Videos, Nutrition Guides &amp; Workout Plan
                </p>

                <Grid className="updates-sexiest-workouts" container spacing={24}>
                  <Grid style={{paddingLeft: 0}} item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img className="updates-sexiest-workouts-img" src={require('../../assets/pexels-photo-1092883.jpeg')}></img>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img className="updates-sexiest-workouts-img" src={require('../../assets/pexels-photo-931325.jpeg')}></img>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img className="updates-sexiest-workouts-img" src={require('../../assets/pexels-photo-1229356.jpeg')}></img>
                  </Grid>
                </Grid>
                <h4 className="updates-grid-item-title">Crossfit: Introductions &amp; basics</h4>
                <p className="updates-grid-item-info">
                  Youtube workout challenge
                </p>
                <hr style={{margin: '30px 0'}} />
              </Grid>
              <Grid className="grid-item" item xs={12} sm={6} md={6} lg={6} xl={6}
                style={{paddingLeft: '50px'}}>
                <h2 className="updates-grid-title">Featured Bootcamps</h2>

                <Grid className="updates-grid-camp-item" container spacing={16}>
                  <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <h4 className="updates-grid-title" style={{margin: '2px 0'}}>
                      Jonny roxx back 2 basics 2 week challenge - 11/14/15
                    </h4>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Button className="updates-grid-button" variant="outlined">Join</Button>
                  </Grid>
                </Grid>
                <p className="updates-grid-item-info">
                  Jonny Roxx | <RunIcon/> 1,156
                </p>

                <div className="updates-grid-camp-item">
                  <Grid className="updates-grid-camp-item" container spacing={16}>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                      <h4 className="updates-grid-title" style={{margin: '2px 0'}}>
                        Getbodiedbyj 7 day workout challenge
                      </h4>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                      <Button className="updates-grid-button" variant="outlined">Join</Button>
                    </Grid>
                  </Grid>
                  <p className="updates-grid-item-info">
                    J Aka Getbodiedbyj | <RunIcon/> 7,294
                  </p>
                </div>

                <div className="updates-grid-camp-item">
                  <Grid className="updates-grid-camp-item" container spacing={16}>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                      <h4 className="updates-grid-title" style={{margin: '2px 0'}}>
                        Heat.hardcore. extreme. active. training
                      </h4>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                      <Button className="updates-grid-button" variant="outlined">Join</Button>
                    </Grid>
                  </Grid>
                  <p className="updates-grid-item-info">
                    Darrell Patterson | <RunIcon/> 692
                  </p>
                </div>

                <div className="updates-grid-camp-item">
                  <Grid className="updates-grid-camp-item" container spacing={16}>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                      <h4 className="updates-grid-title" style={{margin: '2px 0'}}>
                        A.M. Body Fit - 1 Class For
                      </h4>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                      <Button className="updates-grid-button" variant="outlined">Join</Button>
                    </Grid>
                  </Grid>
                  <p className="updates-grid-item-info">
                    Nakreshia Borno | <RunIcon/> 692
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
    )
  }
}

export default withWidth()(Updates);
