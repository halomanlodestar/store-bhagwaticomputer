/** @format */

import Banner from "@/components/Banner";
import connect from "@/database";
import Product from "@/database/Schemas/Product";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FunctionComponent } from "react";

interface ProductPageProps {
	params: { id: string };
}

export const revalidate = 0;

const ProductPage: FunctionComponent<ProductPageProps> = async ({
	params: { id },
}) => {
	connect();
	const product = await Product.findOne<Product>({ id: id });
	if (!product) return notFound();

	return (
		<main className="w-full p-4 pt-10 sm:p-10 lg:px-32 space-y-8">
			<section className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-4 md:space-x-10">
				<div className="md:w-2/3 lg:w-3/5">
					<Banner category={product.category} src={product.image} />
				</div>
				<div className="flex flex-col space-y-5">
					<h2 className="text-2xl md:text-3xl lg:text-4xl">{product.name}</h2>
					<div>
						<span className="text-neutral-400">Price</span>
						<br />
						<span className="text-2xl">&#8377; {product.price}</span>
					</div>
					<div>
						<span className="text-neutral-400">Availability</span>
						<br />
						<span className="text-2xl">
							{product.availability ? "Available" : "Out of Stock"}
						</span>
					</div>
				</div>
			</section>
			<div>
				<h3 className="text-lg text-neutral-400">Product Description</h3>
				<p>{product.description}</p>
			</div>
		</main>
	);
};

export async function generateMetadata({
	params: { id },
}: ProductPageProps): Promise<Metadata> {
	connect();

	const product = await Product.findOne<Product>({ id: id });

	return {
		title: product?.name,
		description: product?.description,
	};
}

export default ProductPage;
