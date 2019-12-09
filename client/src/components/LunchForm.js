import React from 'react';
import { Form, Button} from "semantic-ui-react";

class LunchForm extends React.Component {
  state = { name: "", cost: "" };

  componentDidMount() {
    if (this.props.id)
    this.setState({name: this.props.name, cost: this.props.cost});
}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({id: this.props.id, name: this.state.name, cost: this.state.cost})
      this.props.toggleEdit();
    }
    else {
      this.props.add(this.state);
    }
    this.setState({ name: "", cost: ""});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          label="Name"
          placeholder="Add A Name"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          name="cost"
          label="Cost"
          placeholder="Add A Cost"
          required
          value={this.state.cost}
          onChange={this.handleChange}
        />
        <Button color="green">Submit</Button>
      </Form>
    )
  }
}

export default LunchForm;