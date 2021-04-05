import React, { useEffect, useState } from 'react'
// import logo from './logo.svg';
import './Profile.css'
import { Button } from "react-bootstrap";
import { Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import AddListingModal from './AddListingModal'

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
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4000/profile/`)
      .then(response => {
        setData(response.data)
        //console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
        const backupData = [
          {
            id: 2,
            username: 'BackupName',
            email: 'backupemail@gmail.com',
            bio:
              'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          },
        ]

        setData(backupData[0])
      })
  }, [])


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
          <h3>{data.username}</h3>
          <p>
            {data.bio}
            </p><br/><br/>
          <h5>Showcase</h5>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={5}>
                <FormRow />
              </Grid>
            </Grid>
          </div> <br/><br/>
          <AddListingModal />
        </section>
      </section>

    </div>
  )
}

export default Profile
