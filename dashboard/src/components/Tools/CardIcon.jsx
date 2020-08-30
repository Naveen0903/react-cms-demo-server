import React from "react";
import { Route} from "react-router-dom";
import {Col } from "reactstrap";
import { NavLink } from "react-router-dom";

// import AdminLayout from "../../layouts/Admin/Admin"

const CardIcon = ({iconName, iconValue, iconRoute}) => {
    return (
      <>
        <Col
          className="font-icon-list col-xs-6 col-xs-6"
          lg="2"
          md="3"
          sm="4"
        >
          <NavLink
            to={iconRoute}
            className="nav-link"
            activeClassName="active"
            onClick={()=>{
              return <Route to={iconRoute}/>
            }
          }
          >
            <div className="font-icon-detail">
                <i className={iconName} />
                <p>{iconValue}</p>
            </div>
          </NavLink>
        </Col>
      </>);
  }

export default CardIcon;
