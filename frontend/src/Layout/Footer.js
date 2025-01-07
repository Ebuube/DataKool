import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Footer extends Component {
  links = [
    { name: 'X', url: 'https://x.com/Ebubestar' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ebubeonwuta/' },
    { name: 'GitHub', url: 'https://github.com/Ebuube' },
  ];
  icons = this.links.map((link, index) => (
    <a
      key={index}
      href={link.url}
      target='_blank'
      rel='noopener noreferrer'
      title={`Visit our ${link.name} page`}
    >
      <i className={`orange ${link.name.toLowerCase()} icon`}></i>
    </a>
  ));

  render() {
    return (
      <Container textAlign='center' text>
        <span>{this.icons}</span>
        <span>&copy; 2025: MieStudio.tech. All rights reserved.</span>
      </Container>
    );
  };
};

export default Footer;
