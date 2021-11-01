import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const product = (props) => {
	// console.log(props.product);
	const { name, img, seller, price, stock, star } = props.product;
	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	return (
		<div className="product">
			<div>
				<img src={img} alt="" />
			</div>
			<div>
				<h4 className="product-name">{name}</h4>
				<p>
					<small>By:{seller}</small>
				</p>
				<p>Price : ${price}</p>
				<p>
					<small>Only {stock} left in stock - order now</small>
				</p>
				<Rating initialRating={star} emptySymbol="far fa-star icon-color" fullSymbol="fa fa-star icon-color" readonly></Rating>
				<br />
				<button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">
					{cartIcon}Add to cart
				</button>
			</div>
		</div>
	);
};

export default product;
