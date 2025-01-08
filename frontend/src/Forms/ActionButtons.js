import { Component } from "react";
import { Button } from "semantic-ui-react";

class ActionButtons extends Component {
  render() {
    const { orientation, names } = this.props.format;
    const buttons = names.map((name, index) => (
      <Button
        key={index}
        icon={name.toLowerCase()}
        content={name}
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
