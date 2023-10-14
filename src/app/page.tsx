/** @format */

import InlineCategoryContainer from "@/components/category-containers/Inline";
import SideBarCatgoryContainer from "@/components/category-containers/Sidebar";
import ProductsGrid from "@/components/ProductsGrid";
import { categories } from "@/sample/categories";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Container from "@/components/Container";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<section className="flex flex-col">
				<Carousel />
				<div className="w-full h-full justify-center relative md:space-x-7 flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0 items-start">
					{/* <SideBarCatgoryContainer categories={categories} /> */}
					<InlineCategoryContainer />
				</div>
				<Container>
					<ProductsGrid />
				</Container>
			</section>
		</main>
	);
}
