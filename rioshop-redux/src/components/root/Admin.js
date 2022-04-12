import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ManageProduct from "../products/ManageProduct";

export default class Dashboard extends Component {
  render() {
    return (
      <div>       
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>
          <Col xs="9">
            <ManageProduct />
          </Col>
        </Row>
      </div>
    );
  }
}
