import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);

		axios.post('http://localhost:5000/services', data).then((res) => {
			if (res.data.insertedId) {
				alert('added succesfully');
			}
		});
	};

	return (
		<div className="add-service">
			<h2>add a service</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('name', { required: true, maxLength: 20 })} placeholder="Name" />
				<input {...register('description')} placeholder="Description" />
				<input type="number" {...register('price')} placeholder="Price" />
				<input {...register('img')} placeholder="Img" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default AddService;
