import React, { Component } from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import { ImPriceTags } from "react-icons/im";
import style from "./ProductList.module.css"
import image from "../../assets/products/Rioshop-logos.jpeg";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " added to cart");
  };
  render() {
    return (
      <div>
        <h3>Products {" "} {this.props.currentCategory.categoryName}</h3>
        <Row>
          {this.props.products.map((product) => (
            <Col xs="3" className="p-2" key={product.id}>
              <Card style={{minHeight:"360px", borderRadius:"9px"}}>
                <img className={style.img}                                  
                  src={image}
                  alt=""
                />
                <CardBody>
                  <CardTitle className={style.title}>
                    <Link to={"/saveproduct/" + product.id}>
                      {product.productName}
                    </Link>
                  </CardTitle>
                  <CardSubtitle className={style.price}>
                    
                      <ImPriceTags /> {product.unitPrice} $
                    
                  </CardSubtitle>

                  <button className={style.button}
                    
                    onClick={() => this.addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
