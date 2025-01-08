import { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class UniversitySearch extends Component {
  state = {
    selectedUniversity: '',
  };

  handleChange = (e, { value }) => {
    this.setState({ selectedUniversity: value });
  };

  render() {
    const uiniversityOptions = [
      { key: '1', text: 'University of Nigeria Nsukka', value:'unn' },
      { key: '2', text: 'University of Ibadan', value:'ui' },
    ];
    return (
      <Dropdown
        placeholder='Select University'
        fluid
        search
        selection
        options={uiniversityOptions}
        onChange={this.handleChange}
        value={this.state.selectedUniversity}
      />
    );
  };
};

export default UniversitySearch;
