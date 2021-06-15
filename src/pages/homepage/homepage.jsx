import React from "react";
import "./homepage.styles.scss";
import DirectoryData from "./directory.data";
import MenuItem from "../../components/menu-item/menu-item";

class HomePage extends React.Component {
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
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default HomePage;
