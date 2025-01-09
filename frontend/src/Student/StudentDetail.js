import { Component } from "react";
import ResourceForm from "../Forms/ResourceForm";

class StudentDetail extends Component {
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
        last_updated: true,
      },
      buttons: {
        orientation: 'vertical',
        names: [
          'Print',
          'Save',
          'Delete',
          'File',
        ],
      },
    };
    return(
      <ResourceForm format={form_format} />
    );
  };
};

export default StudentDetail;
