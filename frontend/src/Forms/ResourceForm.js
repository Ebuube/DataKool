import { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import FormFields from './FormFields.js';
import ActionButtons from './ActionButtons.js';

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
        filename: true,
        owner: true,
        description: true,
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
      <FormFields format={{fields, buttons }} />
    );
  };
};

export default ResourceForm;
