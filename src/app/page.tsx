/** @format */

import InlineCategoryContainer from "@/components/category-containers/Inline";
import SideBarCatgoryContainer from "@/components/category-containers/Sidebar";
import ProductsGrid from "@/components/ProductsGrid";
import Product from "@/database/Schemas/Product";
import { categories } from "@/sample/categories";
import connect from "@/database/";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col h-screen">
			<section className=" lg:px-32 flex flex-col">
				<div className="p-4 w-full h-full justify-center relative md:space-x-7 flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0 items-start">
					<div className="md:h-[80vh] relative flex justify-center sm:h-[24rem] h-56 w-full md:w-4/5">
						<Image
							alt=""
							className="max-h-full max-w-full"
							// priority
							src={
								"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/p-series/p2424ht/media-gallery/monitor-p2424ht-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=503&qlt=100,1&resMode=sharp2&size=503,402&chrss=full"
							}
							width={750}
							height={450}
						/>
						<div className="p-5 space-y-2 bottom-0 left-0 w-full absolute sm:w-2/3">
							<h2 className="sm:text-5xl text-xl">Title</h2>
							<p className="text-xs sm:text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
					</div>
					<SideBarCatgoryContainer categories={categories} />
					<InlineCategoryContainer categories={categories} />
				</div>
				<ProductsGrid />
			</section>
			<Footer />
		</main>
	);
}
