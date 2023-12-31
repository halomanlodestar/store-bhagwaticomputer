/** @format */

import { FunctionComponent } from "react";
import Image from "next/image";
import Product from "@/database/Schemas/Product";
import Link from "next/link";
import connect from "@/database";

interface CarouselProps {}

const Carousel: FunctionComponent<CarouselProps> = async () => {
	connect();
	const featuredProducts = await Product.find<Product>({ featured: true });

	return (
		<div className="relative flex justify-center p-10 max-h-[calc(100vh-5rem)] w-full">
			<Link href={`/product/${featuredProducts[0].id}`}>
				<Image
					alt=""
					priority
					className="max-h-full max-w-full h-fit w-fit"
					// priority
					src={featuredProducts[0].image}
					width={750}
					height={450}
				/>
				<div className="space-y-2 bottom-0 left-0 w-full">
					<h2 className="sm:text-3xl md:text-5xl text-xl">
						{featuredProducts[0].name}
					</h2>
					<p className="text-xs sm:text-sm"></p>
				</div>
			</Link>
		</div>
	);
};

export default Carousel;
