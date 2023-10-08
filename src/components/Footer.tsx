/** @format */

import Category from "@/database/Schemas/Category";
import Link from "next/link";
import React from "react";

const Footer = async () => {
	const categories = await Category.find<Category>();

	return (
		<footer className="w-full space-y-7 lg:px-36 px-4 py-10 border-t dark:bg-neutral-900 mt-10">
			<h3 className="text-2xl">
				Bhagwati Computer <span className="text-xs">STORE</span>
			</h3>

			<div className="flex flex-col space-y-3">
				<h5 className="uppercase text-sm">categories</h5>
				<div className="flex flex-col space-y-2 text-sm list-none">
					{categories.map((category, key) => (
						<Link
							href={`/category/${category.slug}`}
							key={key}
							className="cursor-pointer w-fit opacity-60 hover:underline hover:opacity-100 "
						>
							{category.label}
						</Link>
					))}
				</div>
			</div>
			<hr className="h-0.5 border-none bg-neutral-700" />
			<div className="flex justify-between items-start flex-col">
				<span className="text-neutral-300">&copy; Bhagwati Computer</span>
				<span className="text-sm text-neutral-400">All Right Reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
