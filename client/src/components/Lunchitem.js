import React from 'react';
import { Container, List, Button, Icon } from "semantic-ui-react"; 
import LunchForm from "./LunchForm";

class Lunchitem extends React.Component {

state = {editing: false};

toggleEdit = () => {
  this.setState({ editing: !this.state.editing}); 
}


  render() {
    return (
      <>
        {this.state.editing ? <LunchForm 
          name={this.props.name} 
          cost={this.props.cost} 
          id={this.props.id} 
          edit={this.props.edit} 
          toggleEdit={this.toggleEdit} 
          /> : 
        <List.Item>: {this.props.name} - {this.props.cost}</List.Item>
        }
        <br />
        <Button color="red" onClick={() => this.props.delete(this.props.id)}>
            Delete
        </Button>
        <Button color="blue" onClick={this.toggleEdit}>Edit</Button>
        <hr />
      </>
    );
  };
};

export default Lunchitem; 