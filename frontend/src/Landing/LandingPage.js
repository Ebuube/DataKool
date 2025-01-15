import { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return(
      <Container
        as={Grid}
        fluid
      >
        <div>

        </div>
        <Grid.Column
          width={4}
        />
        <Grid.Column
          width={8}
          textAlign='left'
        >
          <Grid.Row
            verticalAlign='middle'
          >
            <Image
                  src='/logo.png'
            />
          </Grid.Row>

          <Grid.Row>
            <h1
              className='welcome-header'
            >
              Welcome to DataKool - CMS
            </h1>
          </Grid.Row>

          <Grid.Row>
            <p>
              <a
                href='/login'
                rel='noopener noreferrer'
                title='Visit our Login page'
              >Login</a> to get started!
            </p>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column
          width={4}
        />
      </Container>
    );
  };
};

export default LandingPage;
