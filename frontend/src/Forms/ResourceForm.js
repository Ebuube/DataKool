import { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import FormFields from './FormFields.js';

class ResourceForm extends Component {
  /* Sample format
  const form_format = {
      fields: {
        fullname: true,
        gender: true,
        telephone: true,
        guardian_phone: true,
        email: true,
        address: true,
        jamb_reg_no: true,
        university: true,
        toggle_check_box: true,
        last_updated: true,
      },
      buttons: {
        orientation: 'vertical',
        names: [
          'Print',
          'Save',
        ]
      },
    };
  */
  render() {
    const { buttons, fields } = this.props.format;
    return (
      <Container as={Grid}>
        <Grid.Column width={13}>
          <FormFields format={fields} />
        </Grid.Column>
        <Grid.Column width={3}>
          ActionButtons
        </Grid.Column>
      </Container>
    );
  };
};

export default ResourceForm;
