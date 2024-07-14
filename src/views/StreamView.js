/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
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
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import { useNavigate, useParams } from "react-router-dom";

function StreamView() {
  console.log('StreamView')
  const { streamId } = useParams();
  const navigate = useNavigate();
  console.log('streamIdd', streamId, streamId === ':streamId')
  const id = streamId || localStorage.getItem('viewer-streamId');

  const renderNoStreamIdHTML = () => {
    return (
      <Card className="card-tasks">
        <CardHeader>
          <h6 className="title d-inline">Stream-ID</h6>
        </CardHeader>
        <CardBody>
          <div className="table-full-width table-responsive">
            <p>There is no stream</p>
          </div>
        </CardBody>
      </Card>
    )
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            {!id ? 
            <>{renderNoStreamIdHTML()}</>
            :
            <Card className="card-tasks">
              <CardHeader>
                <CardTitle tag="h4">Stream Details</CardTitle>
                <h6 className="title d-inline">Stream-ID</h6>
                <p className="card-category d-inline">{id}</p>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <p className="title">User-ID</p>
                          <p className="text-muted">
                            gfdfgbh
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="title">Number of Viewers</p>
                          <p className="text-muted">
                            1200
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="title">Flags Passed in the Stream</p>
                          <p className="text-muted">
                          {'{flags object}'}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
            }
          </Col>
        </Row>
      </div>
    </>
  );
}

export default StreamView;
