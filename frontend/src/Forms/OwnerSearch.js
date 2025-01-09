import { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class OwnerSearch extends Component {
  state = {
    selectedOwner: '',
  };

  handleChange = (e, { value }) => {
    this.setState({ selectedOwner: value });
  };

  render() {
    const ownerOptions = [
      { key: '1', text: 'Onwuta Ebube', value: '1' },
      { key: '2', text: 'Emeka Okpabie', value: '2' },
      { key: '3', text: 'Jide Ukedi', value: '3' },
    ];
    return (
      <Dropdown
        placeholder='Select Owner'
        fluid
        search
        selection
        options={ownerOptions}
        onChange={this.handleChange}
        value={this.state.selectedOwner}
      />
    );
  };
};

export default OwnerSearch;
