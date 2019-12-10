import React from 'react';
import { List, Button, Icon } from "semantic-ui-react"; 
import LunchForm from "./LunchForm"; 

class Items extends React.Component {

  state = {editing: false}

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }


  render() {
    return (
      <>
        {this.state.editing ? 
        <LunchForm 
          id={this.props.id}
          name={this.props.name}
          cost={this.props.cost}
          edit={this.props.edit}
          toggleEdit={this.toggleEdit}
        /> 
        :
        <List.Item>: {this.props.name} - {this.props.cost}</List.Item>
        }
        <br />
        <Button icon color="red" onClick={() => this.props.delete(this.props.id)}>
            <Icon name="trash" />
        </Button>
        <Button color="blue" onClick={this.toggleEdit}>Edit</Button>
        <hr />
      </>
    );
  };
};

export default Items; 