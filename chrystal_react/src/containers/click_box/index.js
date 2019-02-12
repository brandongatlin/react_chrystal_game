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

  render() {
    return this.state.buys.map(icon => (
      <Box key={icon.id} src={icon.src} alt={icon.alt} />
    ));
  }
}

export default BoxContainer;
