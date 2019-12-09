import React from 'react';
import { Container, Header, List} from "semantic-ui-react"; 
import Lunchitem from "./Lunchitem"; 

const Lunchitems = (props) => (
  <Container>
    <List ordered size="huge">
    { props.items.map(lunch => (
      <Lunchitem key={lunch.id} {...lunch} 
      delete={props.delete}
      edit={props.edit}
      />
    ))
    }
    </List>
  </Container>
);

export default Lunchitems;