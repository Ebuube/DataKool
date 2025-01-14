import { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class OwnerSearch extends Component {
  /*
  state = {
    selectedOwner: '',
  };

  handleChange = (e, { value }) => {
    this.setState({ selectedOwner: value });
  };
  */

  render() {
    const ownerOptions = [
      { key: '1', text: 'Onwuta Ebube', value: 'ebube-id' },
      { key: '2', text: 'Emeka Okpabie', value: 'emeka-id' },
      { key: '3', text: 'Jide Ukedi', value: 'jide-id' },
    ];
    return (
      <Dropdown
        placeholder='Select Owner'
        fluid
        search
        selection
        options={ownerOptions}
        name={this.props.name}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  };
};

export default OwnerSearch;
