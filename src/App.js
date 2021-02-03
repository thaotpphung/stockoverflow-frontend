import React, { useState, useEffect } from "react";
// useEffect is usually componentDidMount, also componentWillUpdate
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Landing from "./containers/Landing/Landing.js";
import Dashboard from "./containers/Dashboard/Dashboard.js";
import Navbar from "./components/Navbar/Navbar.js";
import SignIn from "./containers/SignIn/SignIn.js";

import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts';

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./assets/images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import useStyles from './styles';


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  

    // <BrowserRouter>
    //   <Navbar/>
    //   <Switch>
    //     <Route exact path="/" component={Landing} />
    //     <Route exact path="/dashboard" component={Dashboard} />
    //     <Route exact path="/portfolio" component={Dashboard} />
    //     {/* <Route exact path="/alerts/:userid" component={Landing} /> */}
    //     <Route
    // 			path="/signin"
    // 			render={() =>
    // 			  <SignIn/>
    // 			}
    // 		/>

    //   </Switch>
    // </BrowserRouter>
  );
};

export default App;
