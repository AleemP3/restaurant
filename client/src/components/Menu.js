import React from 'react';
import { Container, Header, } from "semantic-ui-react"; 
import { Link} from 'react-router-dom';
import Menus from "./Menus";
import MenuForm from "./MenuForm"
import axios from "axios"; 

class Menu extends React.Component {

  state = { menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then(res => {
        this.setState({ menus: res.data, });
      })
  }

  addMenu = (newMenu) => {
    axios.post("/api/menus", newMenu)
    .then( res => {
      this.setState({ menus: [res.data, ...this.state.menus] });
    })
  }

  updateMenu = (update) => {
    axios.put(`/api/menus/${update.id}`, update)
    .then( res => {
      const newmenus = this.state.menus.map( menu => {
        if (menu.id === update.id)
        return update;
      });
      this.setState({ menus: newmenus, });
    })
  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      this.setState({ menus: this.state.menus.filter( m => m.id !== id ), });
    })
  }



  render() {
    return (
      <Container>
        <Header as="h1" style={{textAlign: "Center"}}>Aleem's Cuisine</Header>
        <MenuForm add={this.addMenu} />
        <hr />
        <br />
        <Menus menus={this.state.menus} delete={this.deleteMenu} edit={this.updateMenu}/> 
      </Container>
    );
  };
};

export default Menu;