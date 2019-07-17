import React from "react";

import Box from "../../components/box";
import buys from "../../transactions.json";

class BoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buys
    };
  }

  getRandomVal() {
    return Math.floor(Math.random() * 10 + 1);
  }

  handleClick(e) {
    let purchase = e.target.attributes.value.value;
    console.log(purchase);
    // this.setState({ purchase: this.state.purchase + purchase });
  }

  render() {
    return this.state.buys.map(icon => (
      <Box
        key={icon.id}
        src={icon.src}
        alt={icon.name}
        value={this.getRandomVal()}
        onClick={this.handleClick}
      />
    ));
  }
}

export default BoxContainer;
