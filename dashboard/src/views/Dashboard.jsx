import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";


import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


import {
  // chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
 } from "../variables/charts.jsx";

import {dashboard} from "../lib/API/user";
import { useState } from "react";
import { useEffect } from "react";
import { chart_options, line } from "../components/Charts/chart";

// class Dashboard extends React.Component {
const Dashboard = () => {
  const [state, setState] = useState({
    bigChartData: "deals",
    data: {},
    dealValues: []
  });
  let performanceChart = ["Accounts", "Sessions"];
  let performanceChartData = {
    Accounts: "deals",
    Sessions: "schedule"
  };

  const getDashboardData = async () => {
    let values = await dashboard();
    let stateValues = {...state};
    stateValues["data"] = values;
    if(values["deals"]){
      for(let deal in values.deals){
        stateValues.dealValues.push(Number(values.deals[deal].dealValue));
      }
    }
    setState(stateValues);
  }

  const handleClick = (chartName) => { 
    let stateValues = {...state};
    stateValues.bigChartData = chartName;
    stateValues.dealValues = []
    if(chartName == "deals"){
      for(let deal in state.data.deals){
        stateValues.dealValues.push(Number(state.data.deals[deal].dealValue));
      }
    }
    setState(stateValues);
  }

  useEffect(()=>{
    getDashboardData();
  },[])
  
  let {
    data
  } = state;
  
  console.log(state);
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      {
                        performanceChart.map((chartName, inx)=>{
                          return(
                            <Button
                              key={`${chartName}_${inx}`}
                              tag="label"
                              className={classNames("btn-simple", {
                                active: state.bigChartData === performanceChartData[chartName]
                              })}
                              color="info"
                              id="0"
                              size="sm"
                              onClick={()=>handleClick(performanceChartData[chartName])}
                            >
                              <input
                                defaultChecked
                                className="d-none"
                                name="options"
                                type="radio"
                              />
                              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                {chartName}
                              </span>
                              <span className="d-block d-sm-none">
                                <i className="tim-icons icon-single-02" />
                              </span>
                            </Button>
                          )
                        })
                      }
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={line(state.dealValues, state.bigChartData)["data"]}
                    options={chart_options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Orders</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" />{" "}
                  763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500&#x20b9;
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">{`Tasks(${(data["tasks"] && data.tasks.length) || 0})`}</h6>
                <p className="card-category d-inline"> today</p>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      {
                        data["tasks"] && data.tasks.map((client, inx)=>{
                          let {
                            tag,
                            taskDescription
                          } = client;
                          // task.map((listTask)=>{
                            return (
                              <tr key={inx}>
                                <td>
                                  <FormGroup check>
                                    <Label check>
                                      <Input defaultValue="" type="checkbox" />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </Label>
                                  </FormGroup>
                                </td>
                                <td>
                                  <p className="title">{tag}</p>
                                  <p className="text-muted">
                                    {taskDescription}
                                  </p>
                                </td>
                                <td className="td-actions text-right">
                                  <Button
                                    color="link"
                                    id="tooltip636901683"
                                    title=""
                                    type="button"
                                  >
                                    <i className="tim-icons icon-pencil" />
                                  </Button>
                                  <UncontrolledTooltip
                                    delay={0}
                                    target="tooltip636901683"
                                    placement="right"
                                  >
                                    Edit Task
                                  </UncontrolledTooltip>
                                </td>
                              </tr>
                            );
                        })
                    }
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Meetings</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Date</th>
                      <th>Agenda</th>
                      <th>Tag</th>  
                    </tr>
                  </thead>
                  <tbody>
                    { 
                    data["schedule"] && data.schedule.map((sched, inx)=>{
                      return(
                        <tr key={inx}>
                          <td>{sched.deadline}</td>
                          <td>{sched.agenda}</td>
                          <td>{sched.tag}</td>
                        </tr>
                      );
                    })
                  }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
