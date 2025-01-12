import { Component } from "react";
import ResourceForm from '../Forms/ResourceForm.js';

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
        orientation: 'horizontal',
        names: [
          'Print',
          'Save',
        ],
      },
    };
    return (
      <ResourceForm format={form_format} />
    );
  };
};

export default Profile;
