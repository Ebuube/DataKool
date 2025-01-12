import { Component } from "react";
import ResourceForm from "../Forms/ResourceForm";

class StudentCreate extends Component {
  render() {
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
      },
      buttons: {
        orientation: 'horizontal',
        names: [
          'Save',
        ],
      },
    };
    return(
      <ResourceForm format={form_format} />
    );
  };
};

export default StudentCreate;
