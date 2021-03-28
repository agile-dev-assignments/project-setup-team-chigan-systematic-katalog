import React from 'react'
// import logo from './logo.svg';
import './Profile.css'
import { Button } from "react-bootstrap";
import { Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3.5}>
          <Paper className={classes.paper}><img alt="Photocard 1" src="https://picsum.photos/200?page=profile" style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 3,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/> </Paper>
        </Grid>
        <Grid item xs={3.5}>
          <Paper className={classes.paper}><img alt="Photocard 1" src="https://picsum.photos/200?page=profile" style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 3,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/> </Paper>
        </Grid>
        <Grid item xs={3.5}>
          <Paper className={classes.paper}><img alt="Photocard 1" src="https://picsum.photos/200?page=profile" style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 3,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/> </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div className="Profile">
      <h1>Profile</h1>
      <section className="main-content">
        <section>
          <img alt="welcome!" src="https://picsum.photos/200?page=profile" />
          <br /><br />
          <Button className = "pfLogin" style={{ alignSelf: 'center', backgroundColor: '#F4F4ED' }} href="/editprofile">
            Edit Profile
          </Button><br /><br />
          <Button className = "pfLogin" style={{ alignSelf: 'center', backgroundColor: '#F4F4ED' }} href = "/">
            Wishlist
          </Button><br /><br />
          <Button className = "pfLogin"  style={{ alignSelf: 'center', backgroundColor: '#F4F4ED' }}>
            Recently Viewed Items
          </Button><br /><br />
        </section>
        <section>
          <h3>Name</h3>
          <p>
            Brownie toffee jujubes tiramisu sugar plum macaroon wafer danish
            icing. Cotton candy jelly-o topping ice cream tart oat cake
            gingerbread jelly halvah. Marshmallow gummies danish jelly-o sesame
            snaps fruitcake candy chocolate bar. Sweet pie sweet powder ice cream
            cookie apple pie. Powder chocolate bear claw candy lemon drops jelly.
            Biscuit halvah cookie.
            </p><br/><br/>
          <h5>Showcase</h5>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={5}>
                <FormRow />
              </Grid>
            </Grid>
          </div> <br/><br/>
          <Button className = "pfLogin" style={{ alignSelf: 'center', backgroundColor: '#F4F4ED' }}>
            Add a Listing
          </Button><br /><br />
        </section>
      </section>

    </div>
  )
}

export default Profile
