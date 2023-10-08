/** @format */

import ProductsGrid from "@/components/ProductsGrid";
import connect from "@/database";
import Category from "@/database/Schemas/Category";
import Product from "@/database/Schemas/Product";
import { notFound } from "next/navigation";
import { FunctionComponent } from "react";

interface CategoryPageProps {
	params: { slug: string };
}

export const revalidate = 0;

const CategoryPage: FunctionComponent<CategoryPageProps> = async ({
	params: { slug },
}) => {
	connect();

	const categoryPromise = Category.findOne<Category>({ slug: slug });
	const productsPromise = Product.find<Product>({ "category.slug": slug });

	const [category, products] = await Promise.all([
		categoryPromise,
		productsPromise,
	]);

	if (!category) return notFound();

	if (products.length === 0)
		return (
			<div className="text-2xl md:text-5xl flex items-center justify-center h-[calc(100vh-10rem)]">
				No product found
			</div>
		);

	return (
		<main className="lg:px-32 ">
			<ProductsGrid inputProducts={products} />
		</main>
	);
};

export default CategoryPage;
