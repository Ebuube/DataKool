import { Component } from "react";
import { Form, } from "semantic-ui-react";
import UniversitySearch from './UniversitySearch.js';
import OwnerSearch from './OwnerSearch.js';
import ActionButtons from "./ActionButtons.js";

class FormFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdated: `${(new Date(Date.now())).toLocaleDateString()} - ${(new Date(Date.now())).toLocaleTimeString()}`
    }; // lastUpdated should be fetched from the server
  }

  handleInputChange = (event, data) => {
    /*
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    */
    const { name ,value, checked } = data;
    const type = data.type || (checked !== undefined ? 'checkbox' : 'text');

    if (type === 'checkbox') {
      this.setState({ [name]: checked });
      console.log(`${name}: ${checked}`); // test
    } else {
      this.setState({ [name]: value });
      console.log(`${name}: ${value}`); // test
    }
  };

  render() {
    console.log(this.state); // test

    const { fields, buttons } = this.props.format;
    const genders = [
      'Male',
      'Female',
    ];
    const genderOptions = genders.map((gender, index) => (
      {
        key: index,
        text: gender,
        value: gender,
        icon: gender.toLowerCase(),
      }
    ));

    return (
      <Form>
        <Form.Field>
          <ActionButtons format={buttons} />
        </Form.Field>
        {fields.fullname &&
          <Form.Field>
            <label>Full Name</label>
            <Form.Group widths='equal'>
              <Form.Input
                type='text'
                name='firstname'
                placeholder='First Name'
                onChange={this.handleInputChange}
                value={this.state.firstname}
              />
              <Form.Input
                type='text'
                name='lastname'
                placeholder='Last Name'
                onChange={this.handleInputChange}
                value={this.state.lastname}
              />
            </Form.Group>
          </Form.Field>
        }
        {fields.gender &&
          <Form.Dropdown
            fluid
            name='gender'
            label='Gender'
            placeholder='Gender'
            selection
            options={genderOptions}
            onChange={this.handleInputChange}
            value={this.state.gender}
          />
        }
        {fields.telephone &&
          <Form.Input
            label='Telephone'
            type='text'
            name='telephone'
            placeholder='+234 - 000 - 0000 - 000'
            onChange={this.handleInputChange}
            value={this.state.telephone}
          />
        }
        {fields.guardian_phone &&
          <Form.Input
            label='Guardian Phone'
            type='text'
            name='guardianPhone'
            placeholder='+234 - 000 - 0000 - 000'
            onChange={this.handleInputChange}
            value={this.state.guardianPhone}
          />
        }
        {fields.email &&
          <Form.Input
            label='Email'
            type='email'
            name='email'
            placeholder='me@gmail.com'
            onChange={this.handleInputChange}
            value={this.state.email}
          />
        }
        {fields.address &&
          <Form.Input
            label='Address'
            type='text'
            name='address'
            placeholder='Street, District, State, Country'
            onChange={this.handleInputChange}
            value={this.state.address}
          />
        }
        {fields.jamb_reg_no &&
          <Form.Input
            label='JAMB Reg. No.'
            type='text'
            name='jambRegNo'
            placeholder='123ABC'
            onChange={this.handleInputChange}
            value={this.state.jambRegNo}
          />
        }
        {fields.university &&
          <Form.Field>
            <label>University</label>
            <UniversitySearch
              name='university'
              onChange={this.handleInputChange}
              value={this.state.university}
            />
          </Form.Field>
        }
        {fields.toggle_check_box &&
          <Form.Checkbox
            label='Deactivated'
            slider
            name='isDeactivated'
            onChange={this.handleInputChange}
            checked={this.state.isDeactivated}
          />
        }
        {fields.last_updated &&
          <Form.Field inline>
            <label>Last updated</label>
            <p>{this.state.lastUpdated}</p>
          </Form.Field>
        }
        {fields.filename &&
          <Form.Input
            label='File name'
            type='text'
            name='filename'
            placeholder='File Name'
            onChange={this.handleInputChange}
            value={this.state.filename}
          />
        }
        {fields.owner &&
          <Form.Field>
            <label>Owner</label>
            <OwnerSearch
              name='owner'
              onChange={this.handleInputChange}
              value={this.state.owner}
            />
          </Form.Field>
        }
        {fields.description &&
          <Form.Input
            label='Description'
            type='text'
            name='description'
            placeholder='This File is for the purpose of ...'
            onChange={this.handleInputChange}
            value={this.state.description}
          />
        }
      </Form>
    );
  };
};

export default FormFields;
