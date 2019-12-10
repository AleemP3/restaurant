import React from "react"; 
import { Container, Grid, } from "semantic-ui-react";
import Lists from "./List";  


const Menus = (props) => (
  <Container>
    <Grid columns={3}>
      <Grid.Row>
        {
          props.menus.map( menu => (
            <Lists key={menu.id} {...menu} 
            add={props.add} 
            delete={props.delete} 
            edit={props.edit}/>
          ))
        }
      </Grid.Row>
    </Grid>
  </Container>
);

export default Menus; 