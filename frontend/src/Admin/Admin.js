import { Component } from "react";
import ResourceForm from '../Forms/ResourceForm.js';

class Admin extends Component {
  render() {
    const form_format = {
      fields: {
        fullname: true,
        gender: true,
        telephone: true,
        email: true,
        address: true,
      },
      buttons: {
        orientation: 'horizontal',
        names: [
          'Save',
        ]
      },
    };
    return(
      <ResourceForm format={form_format} />
    );
  };
};

export default Admin;
