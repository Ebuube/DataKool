import { Component } from "react";
import { Form, } from "semantic-ui-react";
import UniversitySearch from './UniversitySearch.js';
import OwnerSearch from './OwnerSearch.js';

class FormFields extends Component {
  render() {
    const fields = this.props.format;
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
        {fields.fullname &&
          <Form.Field>
            <label>Full Name</label>
            <Form.Group widths='equal'>
              <Form.Input
                type='text'
                name='firstname'
                placeholder='First Name'
              />
              <Form.Input
                type='text'
                name='lastname'
                placeholder='Last Name'
              />
            </Form.Group>
          </Form.Field>
        }
        {fields.gender &&
          <Form.Dropdown
            fluid
            label='Gender'
            placeholder='Gender'
            selection
            options={genderOptions}
          />
        }
        {fields.telephone &&
          <Form.Input
            label='Telephone'
            type='text'
            name='telephone'
            placeholder='+234 - 000 - 0000 - 000'
          />
        }
        {fields.guardian_phone &&
          <Form.Input
            label='Guardian Phone'
            type='text'
            name='gaurdian-phone'
            placeholder='+234 - 000 - 0000 - 000'
          />
        }
        {fields.email &&
          <Form.Input
            label='Email'
            type='email'
            name='email'
            placeholder='me@gmail.com'
          />
        }
        {fields.address &&
          <Form.Input
            label='Address'
            type='text'
            name='address'
            placeholder='Street, District, State, Country'
          />
        }
        {fields.jamb_reg_no &&
          <Form.Input
            label='JAMB Reg. No.'
            type='text'
            name='jamb-reg-no'
            placeholder='123ABC'
          />
        }
        {fields.university &&
          <Form.Field>
            <label>University</label>
            <UniversitySearch />
          </Form.Field>
        }
        {fields.toggle_check_box &&
          <Form.Checkbox
            label='Deactivated'
            slider
          />
        }
        {fields.last_updated &&
          <Form.Field inline>
            <label>Last updated</label>
            <p>{`${(new Date(Date.now())).toLocaleDateString()} - ${(new Date(Date.now())).toLocaleTimeString()}`}</p>
          </Form.Field>
        }
        {fields.filename &&
          <Form.Input
            label='File name'
            type='text'
            name='filename'
            placeholder='File Name'
          />
        }
        {fields.owner &&
          <Form.Field>
            <label>Owner</label>
            <OwnerSearch />
          </Form.Field>
        }
        {fields.description &&
          <Form.Input
            label='Description'
            type='text'
            name='description'
            placeholder='This File is for the purpose of ...'
          />
        }
      </Form>
    );
  };
};

export default FormFields;
