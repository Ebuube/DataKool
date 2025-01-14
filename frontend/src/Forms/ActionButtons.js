import { Component } from "react";
import { Button } from "semantic-ui-react";

class ActionButtons extends Component {
  render() {
    /*
    const format = {
        orientation: 'horizontal',
        names: [
          'Print',
          'Save',
          'Delete',
          'Folder',
          'Upload',
          'Download',
          'Delete',
          'User',
        ],
      };
    */
    const { orientation, names } = this.props.format;
    const buttons = names.map((name, index) => (
      <Button
        key={index}
        icon={name.toLowerCase()}
        content={name}
        name={name}
        onClick={this.props.onClick}
      />
    ));

    return (
      <Button.Group
        labeled
        icon
        vertical={orientation === 'vertical'? true : false}
        buttons={buttons}
      />
    );
  };
};

export default ActionButtons;
