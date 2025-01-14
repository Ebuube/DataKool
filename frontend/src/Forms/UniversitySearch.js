import { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class UniversitySearch extends Component {
  /* Props
    name={this.props.name}
    onChange={this.props.onChange}
    value={this.props.value}

  state = {
    selectedUniversity: '',
  };
  */

  /*
  handleChange = (e, { value }) => {
    this.setState({ selectedUniversity: value });
    this.
  };
  */

  render() {
    // Replace university value with uuid of university object
    // University Options are retrieved from server on re-render.
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
        name={this.props.name}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  };
};

export default UniversitySearch;
