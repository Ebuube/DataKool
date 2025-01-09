import { Component } from "react";
import ResourceForm from "../Forms/ResourceForm";

class FileCreate extends Component {
  render() {
    const form_format = {
      fields: {
        filename: true,
        owner: true,
        description: true,
      },
      buttons: {
        orientation: 'vertical',
        names: [
          'Save',
          'Upload',
        ],
      },
    };
    return(
      <ResourceForm format={form_format} />
    );
  };
};

export default FileCreate;
