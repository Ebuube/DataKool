import { Component } from "react";
import ResourceForm from "../Forms/ResourceForm";

class FileDetail extends Component {
  render() {
    const form_format = {
      fields: {
        filename: true,
        owner: true,
        description: true,
      },
      buttons: {
        orientation: 'horizontal',
        names: [
          'Download',
          'Upload',
          'Save',
          'Delete',
          'User',
          'Print',
        ],
      },
    };
    return(
      <ResourceForm format={form_format} />
    );
  };
};

export default FileDetail;
