import { Component } from "react";
import Form from '../Form/Form.js';

class Profile extends Component {
  render() {
    const form_format = {
      fields: {
        fullname: true,
        gender: true,
        telephone: true,
        email: true,
        address: true,
        toggle_check_box: true,
        last_updated: true,
      },
      buttons: {
        orientation: 'vertical',
        names: [
          'Print',
          'Save',
        ],
      },
    };
    return (
      <Form format={form_format} />
    );
  };
};

export default Profile;
