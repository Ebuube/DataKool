import { Component } from "react";
import ResourceSearch from "../Resources/ResourceSearch";

class FileSearch extends Component {
  render() {
    const form_format = {
      type: 'file'
    };

    return(
      <div>
        <ResourceSearch
          format={form_format}
        />
        <p>ResourceTable</p>
      </div>
    );
  };
};

export default FileSearch;
