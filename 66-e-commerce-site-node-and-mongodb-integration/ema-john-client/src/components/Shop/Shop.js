import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);

	useEffect(() => {
		// console.log('product API called');
		fetch('./products.JSON')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				// console.log('products received');
				setDisplayProducts(data);
			});
	}, []);

	useEffect(() => {
		// console.log('local storage callled');
		if (products.length) {
			const savedCart = getStoredCart();
			// console.log(savedCart);
			const storedCart = [];
			for (const key in savedCart) {
				// console.log(key);

				const addedProduct = products.find((product) => product.key === key);
				// console.log(addedProduct);
				if (addedProduct) {
					const quantity = savedCart[key];
					addedProduct.quantity = quantity;
					// console.log(addedProduct);
					storedCart.push(addedProduct);
				}
			}
			setCart(storedCart);
		}
	}, [products]);

	const handleAddToCart = (product) => {
		const exists = cart.find((pd) => pd.key === product.key);
		let newCart = [];
		if (exists) {
			const rest = cart.filter((pd) => pd.key !== product.key);
			exists.quantity = exists.quantity + 1;
			newCart = [...rest, product];
		} else {
			product.quantity = 1;
			newCart = [...cart, product];
		}

		setCart(newCart);
		//save to local storage (for now)
		addToDb(product.key);
	};

	const handleSearch = (event) => {
		const searchText = event.target.value;
		const matchedProducts = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
		setDisplayProducts(matchedProducts);
		console.log(matchedProducts);
	};

	return (
		<div>
			<div className="search-container">
				<input type="text" onChange={handleSearch} placeholder="search product" />
			</div>
			<div className="shop-container">
				<div className="product-container">
					{displayProducts.map((product) => (
						<Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart}>
						<Link to="/review">
							<button className="btn-regular">Review Your Order</button>
						</Link>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
