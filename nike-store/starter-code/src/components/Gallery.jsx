import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Gallery.css";

export default class Gallery extends Component {
    render() {
        console.log(this.props.products);
        return (

            <div className = "Gallery" > {
                this.props.products.map(product =>
                    <div className = "Shoe" key = { product._id }>
                    <img src = { product.url }/> 
                    <span className = "Shoe-Color" > { product.colors.length } colors </span> 
                    <hr />
                    <em className = "Shoe-Title" > { product.name } </em> 
                    <span className = "Shoe-Type" > { product.type } </span> 
                    <span className = "Shoe-Price" > $ { product.price } </span> </div>

                )
            }

            </div>

        );
    }
}


Gallery.defaultProps = {
    products: []
};
Gallery.propTypes = {
    products: PropTypes.array
};