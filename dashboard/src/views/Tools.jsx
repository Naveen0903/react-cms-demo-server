import React from "react";
import IconsLayout from "../components/Tools/IconsLayout";

// Tools
class Icons extends React.Component {
  render() {
    var iconNames = ["icon-badge", "icon-alert-circle-exc"];
    var iconValues = ["Clients profile", "About"];
    var iconRoutes = ["/tools/clients", "/about"]
    return (
      <>
        <IconsLayout iconNames={iconNames} iconValues={iconValues} iconRoutes={iconRoutes}/>
      </>
    );
  }
}

export default Icons;