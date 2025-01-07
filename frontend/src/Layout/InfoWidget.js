import React, { Component, } from "react";
import { Container, Grid, GridColumn, Image, List, ListItem } from "semantic-ui-react";

class InfoWidget extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return(
      <Grid verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={13}>
            <div>
              <div>{data.role}</div>
              <div>{data.username}</div>
            </div>
          </Grid.Column>
          <Grid.Column width={3}>
            <Image
              circular
              fluid
              src={data.photo}
              size='tiny'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
};

export default InfoWidget;
