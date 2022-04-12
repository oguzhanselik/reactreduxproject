import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import logo from "../../assets/logo/logo.jpeg";
import { withRouter } from "react-router-dom";
import style from "./Navi.module.css";

class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
    this.goHome = this.goHome.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  goHome() {
    this.props.history.push({
      pathname: "/",
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" className={style.colornav} variant="light" light expand="md">
          <NavbarBrand onClick={this.goHome}>
            <img alt="" src={logo} /> RIO SHOP
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/saveproduct" className="nav-link">
                  Add Product
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/admin" className="nav-link">
                  Update Product
                </Link>
              </NavItem>

              <CartSummary />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Navi);
