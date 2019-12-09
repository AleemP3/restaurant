import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, } from "semantic-ui-react"; 
import Home from './components/Home';
import Lunch from './components/Lunch';
import Navbar from "./components/Navbar";
import NoMatch from './components/NoMatch';


const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lunch" component={Lunch} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>  
  );


export default App;
