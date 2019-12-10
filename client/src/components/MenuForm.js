import React from 'react';
import { Form, Button, } from "semantic-ui-react";

class MenuForm extends React.Component {
  state = { name: "", };

  componentDidMount() {
    if (this.props.id)
    this.setState({name: this.props.name})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({id: this.props.id, name: this.state.name}) ;
      this.props.toggleEdit();
    }
    else {
    this.props.add(this.state);
    }
    this.setState({ name: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Name"
          placeholder="Add A Menu"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Button color="green">Submit</Button>
      </Form>

    )
  }
}

export default MenuForm;