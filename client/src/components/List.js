import React from "react"; 
import { Icon, Card, Button, Grid, List} from "semantic-ui-react";
import MenuForm from "./MenuForm"; 
import LunchForm from "./LunchForm"; 
import Items from "./Items"; 
import axios from "axios";


class Lists extends React.Component {

state = { editing: false, items: [] }; 

toggleEdit = () => {
  this.setState({ editing: !this.state.editing });
}

componentDidMount() {
  axios.get(`/api/menus/${this.props.id}/lunchmenus`)
  .then( res => {
  this.setState({ items: res.data, });
  })
}

showItems = () => {
    return this.state.items.map(item => (
      <Items key={item.id} {...item} delete={this.deleteItem} edit={this.updateItem}/>
    ))
}

addItem = (id, newItem) => {
  axios.post(`/api/menus/${id}/lunchmenus`, newItem)
  .then( res => {
    console.log(res.data); 
    this.setState({ items: [res.data, ...this.state.items] });
  })
}

deleteItem = (itemId) => {
  axios.delete(`/api/menus/${this.props.id}/lunchmenus/${itemId}`)
  .then( res => {
    this.setState({ items: this.state.items.filter( t => t.id !== itemId ), });
  })
}

updateItem = (update) => {
  axios.put(`/api/menus/${this.props.id}/lunchmenus/${update.id}`, update)
  .then( res => {
    const newitems = this.state.items.map( item => {
      if (item.id === update.id)
      return update;
    });
    this.setState({ items: newitems, });
  })
}


  render() {
    return (
      <>
      <Grid.Column>
        { this.state.editing ? <MenuForm 
          id={this.props.id}
          name={this.props.name}
          edit={this.props.edit}
          toggleEdit={this.toggleEdit}
        /> : 
        <Card>
          <Card.Content>
            <Button icon color="red" onClick={() => this.props.delete(this.props.id)}>
              <Icon name="trash"/>
            </Button>
            <Button color="blue" floated="right" onClick={this.toggleEdit}>Edit</Button>
            <Card.Header style={{textAlign: "Center"}}>
              {this.props.name}
              <hr />
            </Card.Header>
            <br />
            <LunchForm id={this.props.id} add={this.addItem}/>
            <List ordered size="small">
              {this.showItems()}
            </List>
          </Card.Content>
        </Card>
        }
      </Grid.Column>
      </>
    );
  };
};


export default Lists; 