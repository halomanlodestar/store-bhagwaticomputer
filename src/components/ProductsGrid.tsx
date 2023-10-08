/** @format */

import { FunctionComponent } from "react";
import Card from "./Card";
import Product from "@/database/Schemas/Product";
import connect from "@/database";

interface ProductsGridProps {
	inputProducts?: Product[];
}

const ProductsGrid: FunctionComponent<ProductsGridProps> = async ({
	inputProducts,
}) => {
	connect();
	const products = inputProducts || (await Product.find<Product>());

	return (
		<section className="w-full px-4 text-3xl md:text-4xl h-full space-y-4 sm:space-y-7 pt-10">
			<h2>Products</h2>
			<div className="grid grid-cols-1 gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3">
				{products.map((product) => {
					return <Card key={product.id} product={product} />;
				})}
			</div>
		</section>
	);
};

export default ProductsGrid;
