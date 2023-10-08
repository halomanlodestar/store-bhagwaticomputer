/** @format */

import { FunctionComponent } from "react";
import Banner from "./Banner";
import Link from "next/link";

interface CardProps {
	product: Product;
}

const Card: FunctionComponent<CardProps> = ({ product }) => {
	// console.log(product);
	return (
		<Link
			href={`/product/${product.id}`}
			className="w-full h-full cursor-pointer flex flex-col space-y-4 bg-neutral-900"
		>
			<Banner src={product.image} category={product.category} />
			<div className="flex flex-col space-y-1 items-start w-full p-3">
				<h3 className="text-xl">{product.name}</h3>
				<span className="text-lg">&#8377; {product.price || 0}</span>
			</div>
		</Link>
	);
};

export default Card;
