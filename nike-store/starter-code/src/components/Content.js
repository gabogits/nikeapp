import React, { Component } from "react";
import Gallery from "./Gallery";
import PropTypes from 'prop-types';
import "./Content.css";



export default class Content extends Component {
  render() {

    return (
      <div>
        <div className="Content">
          <h3 className="Content-Title">
            Men’s Shoes & Skeakers
  <span className="Results">(876)</span>
          </h3>
          <p className="Results-Description">Explore the latest shoes for men for every sport, workout and everyday look. Built for ultimate performance and sneaker style, Nike shoes for men deliver cutting-edge technologies specific to your sport in iconic designs.</p>
          Gallery--
        </div>

        <Gallery products={this.props.products} />
      </div>

    );
  }
}



Content.defaultProps = {
  products: []
};
Content.propTypes = {
  products: PropTypes.array
};

