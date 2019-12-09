import React from 'react';
import { Container, Header} from "semantic-ui-react"; 
import axios from "axios";
import Lunchitems from "./Lunchitems"; 
import LunchForm from "./LunchForm"; 

class Lunch extends React.Component {
  state = { lunchitems: [], };

  componentDidMount() {
    axios.get("/api/lunchmenus")
      .then( res => {
      this.setState({ lunchitems: res.data, });
    })
  }

  addItem = (newItem) => {
    axios.post("/api/lunchmenus", newItem)
    .then( res => {
      this.setState({ lunchitems: [res.data, ...this.state.lunchitems] });
    })
  }

  updateItem = (update) => {
    axios.put(`/api/lunchmenus/${update.id}`, update)
    .then( res => {
      const newitems = this.state.lunchitems.map( item => {
        if (item.id === update.id)
        return update;
      });
      this.setState({ lunchitems: newitems, });
    })
  }

  deleteItem = (id) => {
    axios.delete(`/api/lunchmenus/${id}`)
    .then( res => {
      this.setState({ lunchitems: this.state.lunchitems.filter( t => t.id !== id ), });
    })
  }



  render() {
    return (
    <Container>
      <Header as="h1" style={{textAlign: "Center"}}>Aleem's Lunch Cuisine</Header>
      <LunchForm add={this.addItem}/>
      <hr />
      <br /> 
      <Lunchitems items={this.state.lunchitems}
        delete={this.deleteItem}
        edit={this.updateItem}
      />
    </Container>
    );
  };
};

export default Lunch;