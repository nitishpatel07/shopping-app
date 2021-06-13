import React from "react";
import "./directory-menu.styles.scss";
import DirectoryData from "./directory.data";
import MenuItem from "../menu-item/menu-item";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: DirectoryData,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}></MenuItem>
        ))}
      </div>
    );
  }
}

export default Directory;
