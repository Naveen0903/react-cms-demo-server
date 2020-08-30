import React from "react";
import { Card, CardHeader, CardBody, Row, Col} from "reactstrap";
import CardIcon from "./CardIcon";

const IconsLayout = ({iconNames, iconValues, iconRoutes}) => {
      return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <h5 className="title">100s of tools to help track your bussiness</h5>
                    <p className="category">
                      Handcrafted by our Team from{" "}
                      <a href="https://clientspacer.com/">Clients pacer</a>
                    </p>
                  </CardHeader>
                  <CardBody className="all-icons"> 
                    <Row>
                      {iconNames.map((field, value)=>{
                        var params = "tim-icons " + field;
                        return(
                            <CardIcon iconName={params} iconValue={iconValues[value]} iconRoute={iconRoutes[value]}/>
                          );
                        })
                      }
                    </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }

export default IconsLayout;