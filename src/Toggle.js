import React from "react";
import LanguageContext from "./contexts/LanguageContext";

class Toggle extends React.Component {
  static contextType = LanguageContext;

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    console.log(this.context);
    return (
      <div className="ui container">
        <div>
          choose the language
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
      </div>
    );
  }
}

export default Toggle;
