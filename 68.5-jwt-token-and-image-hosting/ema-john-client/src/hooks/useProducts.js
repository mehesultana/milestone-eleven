import { useEffect } from 'react';
import { useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('http://5000/products')
			.then((res) => res.json())
			.then((data) => setProducts(data.products));
	}, []);
	// return necessary things
	return [products, setProducts];
};

export default useProducts;